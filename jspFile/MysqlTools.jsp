<%@ page import="Util.*" import="java.sql.*" import="java.util.ArrayList"  language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="java.io.*"%>
    <%@ page import="java.util.List" %>
    <%@ page import="java.sql.ResultSet" %>
	<%@ page import="java.sql.ResultSetMetaData" %>
	<%@ page import="org.rosuda.REngine.REXP"%>
	<%@ page import="org.rosuda.REngine.REXPMismatchException"%>
	<%@ page import="org.rosuda.REngine.Rserve.RConnection"%>
	<%@ page import="org.rosuda.REngine.Rserve.RserveException"%>
	<%@ page import="java.io.File"%>
	<%@ page import="java.io.FileWriter"%>
	<%@ page import="java.io.BufferedWriter"%>
	<%@ page import="java.io.FileReader"%>
	<%@ page import="java.io.BufferedReader"%>
	<%@ page import="java.io.IOException"%>
	<%@ page import="javax.servlet.http.HttpServletRequest" %>
	<%@ page import="javax.servlet.http.HttpSession" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%
String Metagenome="";
String neb="";
String bac="";
String toolsType="";
String sql="";
String dasetid="";
String out_filename="";
String celltype="";
String gene="";

toolsType=request.getParameter("toolsType");
if(toolsType.equals("bacAbc")){
	Metagenome=request.getParameter("Metagenome");
	bac=request.getParameter("bac");
	sql="SELECT * FROM fuzzy_matching_tool WHERE bac_"+Metagenome+" LIKE "+ "'%"+bac+"%'";
	out_filename="ToolsBacAbc.txt";
}else if(toolsType.equals("bacNeb")){
	Metagenome=request.getParameter("Metagenome");
	bac=request.getParameter("bac");
	neb=request.getParameter("neb");
	//sql="SELECT * FROM fuzzy_matching_tool WHERE bac_"+Metagenome+" LIKE "+ "'%"+bac+"%'";
	//sql="SELECT * FROM fuzzy_matching_tool WHERE ( gene LIKE " + "'%"+key+"%'  OR marker LIKE " + "'%"+key+"%' OR svg LIKE " + "'%"+key+"%' )  ";
	sql="SELECT * FROM fuzzy_matching_tool WHERE ( bac_"+Metagenome+" LIKE "+ "'%"+bac+"%'"+" AND neb LIKE " + "'%"+neb+"%' )  ";
	out_filename="ToolsBacNeb.txt";
	
}else if(toolsType.equals("bacCty")){
	celltype=request.getParameter("celltype");
	bac=request.getParameter("bac");
	out_filename="ToolsBacCty.txt";
	if(bac.equals("All")){
		sql="SELECT * FROM fuzzy_matching_tool WHERE celltype LIKE "+ "'%"+celltype+"%'";
	}else{
		//sql="SELECT * FROM fuzzy_matching_tool WHERE  LIKE "+ "'%"+bac+"%'";
		sql="SELECT * FROM fuzzy_matching_tool WHERE ( bac_genus  LIKE "+ "'%"+bac+"%'"+" AND celltype LIKE " + "'%"+celltype+"%' )  ";

	}
}else if(toolsType.equals("bacCoooC")){
	gene=request.getParameter("gene");
	bac=request.getParameter("bac");
	out_filename="ToolsBacCoooC.txt";
	if(bac.equals("All")){
		sql="SELECT * FROM fuzzy_matching_tool_coooc WHERE gene LIKE "+ "'%"+gene+"%'";
	}else{
		//sql="SELECT * FROM fuzzy_matching_tool WHERE  LIKE "+ "'%"+bac+"%'";
		sql="SELECT * FROM fuzzy_matching_tool_coooc WHERE ( genus  LIKE "+ "'%"+bac+"%'"+" AND gene LIKE " + "'%"+gene+"%' )  ";

	}
}

//////////使用XMLHttpRequest 输出数据
response.setContentType("text/html;charset=utf-8");
PrintWriter pw = response.getWriter();
System.out.println(sql);

String datasetIDSlice="";
try {
	DBConn db = new DBConn();
	db.open();
	ResultSet rs_gene=db.executeQuery(sql);
		int count=0;
		rs_gene.last();
		int recordCount=rs_gene.getRow();
		rs_gene.first();
		//datasetIDSlice=datasetIDSlice+rs_gene.getString("dataset_id");
		//表对应的名字与ajax的col要对应
		List<String> list_title = new ArrayList<String>();
		if(toolsType.equals("bacCoooC")){
			count=13;
			list_title.add("genus");
			list_title.add("gene");
			list_title.add("dataset_id");
			list_title.add("paper_title");
			list_title.add("paper_http");
			list_title.add("paper_doi");
			list_title.add("publication");
			list_title.add("celltype_num");
			list_title.add("neb_num");
			list_title.add("marker_gene_num");
			list_title.add("neb");
			list_title.add("coooc_num");
			list_title.add("cancer");
		}else{
			count=29;
		  list_title.add("species");
		  list_title.add("dataset_id");
		  list_title.add("cancer");
		  list_title.add("cancer_fullname");
		  list_title.add("tissue");
		  list_title.add("bac_kingdom");
		  list_title.add("bac_phylum");
		  list_title.add("bac_class");
		  list_title.add("bac_order");
		  list_title.add("bac_family");
		  list_title.add("bac_species");
		  list_title.add("bac_genue");
		  list_title.add("gene");
		  list_title.add("marker");
		  list_title.add("svg");
		  list_title.add("celltype");
		  list_title.add("paper_title");
		  list_title.add("paper_http");
		  list_title.add("paper_doi");
		  list_title.add("spot_num");
		  list_title.add("cluster_num");
		  list_title.add("celltype_num");
		  list_title.add("bac_num");
		  list_title.add("cell_num");
		  list_title.add("publication");
		  
		  list_title.add("marker_gene_num");
		  list_title.add("neb_num");
		  list_title.add("neb");
		  list_title.add("coooc_num");
		}
		  String dir = getServletContext().getRealPath("/0_files");
		  dir=dir+"/";
		  dir=dir.replaceAll("\\\\","/");
		  //System.out.println(dir);
		//写出table的ajax文件
		  BufferedWriter bw = new BufferedWriter(new FileWriter(dir+out_filename));
		  bw.write("{"+"\n"+'"'+"data"+'"'+':'+'['+"\n");	
		  int j=1;
		 
		  bw.write("{"+"\n");
			for (int i=1;i<=count;i++){
				
					if(i==(count)){
							bw.write('"'+list_title.get(i-1)+'"'+':'+'"'+rs_gene.getString(i).trim()+'"'+"\n");
					}else{ 
							bw.write('"'+list_title.get(i-1)+'"'+':'+'"'+rs_gene.getString(i).trim()+'"'+","+"\n");   
						}			            						            			
					}
				
				if (j==recordCount){
					bw.write("}"+"\n");
				}else{
				bw.write("},"+"\n");
			  }
		  
		  while(rs_gene.next()){
			  //datasetIDSlice=datasetIDSlice+rs_gene.getString("dataset_slice")+";";
			  j=j+1;
			  
			  bw.write("{"+"\n");
			for (int i=1;i<=count;i++){
				
					if(i==(count)){
						  bw.write('"'+list_title.get(i-1)+'"'+':'+'"'+rs_gene.getString(i).trim()+'"'+"\n");
					}else{bw.write('"'+list_title.get(i-1)+'"'+':'+'"'+rs_gene.getString(i).trim()+'"'+","+"\n");}			            						            			
					}
			
				if (j==recordCount){
					bw.write("}"+"\n");
				}else{
				bw.write("},"+"\n");
			  }	
				
	}
		  bw.write(']'+"\n"+'}');
		  //关文件流			            	
		  bw.flush();
		  bw.close();
	
	///////
			//datasetIDSlice=datasetIDSlice.substring(0,datasetIDSlice.length()-1);///删除最后一个；
			//System.out.println(datasetIDSlice);
			pw.println("{"+'"'+"datasetIDSlice"+'"'+":"+'"'+datasetIDSlice+'"'+","+'"'+"error_attention"+'"'+":"+'"'+"no"+'"'+"}");
		
	
	
	rs_gene.close();
	db.close();
} catch (Exception e) {
    e.printStackTrace();
    pw.println("{"+'"'+"error_attention"+'"'+":"+'"'+"yes"+'"'+"}");
    
    System.out.println("no such key");
}
pw.flush();
pw.close();



%>
</body>
</html>