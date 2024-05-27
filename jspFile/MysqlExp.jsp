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
String metagenome_type="";
String metagenome_subtype="";
String database_name="";

metagenome_type=request.getParameter("metagenome_type");
metagenome_subtype=request.getParameter("metagenome_subtype");
database_name=request.getParameter("dataSetID");
database_name=database_name+"_st_bac";


//////////使用XMLHttpRequest 输出数据
response.setContentType("text/html;charset=utf-8");
//获取PrintWriter
PrintWriter pw = response.getWriter();
// database_name="luad01_td6_spot_exp";
// gene0="FAM138A";
String key=metagenome_type+"_"+metagenome_subtype;
String sql="SELECT * FROM "+database_name+" where bac = '"+key+"'";
String sql_name="SELECT * FROM "+database_name+" where bac = 'spots_names' ";

System.out.println(sql_name);
System.out.println(sql);

try {
DBConn db = new DBConn();
db.open();
ResultSet rs_exp=db.executeQuery(sql);
rs_exp.first();
String exp=rs_exp.getString("exp").trim();
//System.out.println(exp);
rs_exp.close();

ResultSet rs_spotNames=db.executeQuery(sql_name);
rs_spotNames.first();
String spotNames=rs_spotNames.getString("exp").trim();
//System.out.println(spotNames);
rs_spotNames.close();
////////////// data table ////////
String[] expArray =exp.split(",");
String[] spotNamesArray =spotNames.split(",");
int count=spotNamesArray.length;

// List<String> list_title = new ArrayList<String>();
// list_title.add("spot");
// list_title.add("mainclass");
// list_title.add("subclass");
// list_title.add("exp");

String dir = getServletContext().getRealPath("/0_files");
dir=dir+"/";
dir=dir.replaceAll("\\\\","/");
System.out.println(dir);

BufferedWriter bw = new BufferedWriter(new FileWriter(dir+"bacExpDatatable.txt"));
bw.write("{"+"\n"+'"'+"data"+'"'+':'+'['+"\n");			              			             			              

for (int i=0;i<count;i++){
	 bw.write("{"+"\n");
	if(i==(count-1)){
			bw.write('"'+"spot"+'"'+':'+'"'+spotNamesArray[i]+'"'+","+"\n"); 
			bw.write('"'+"mainclass"+'"'+':'+'"'+metagenome_type+'"'+","+"\n"); 
			bw.write('"'+"subclass"+'"'+':'+'"'+metagenome_subtype+'"'+","+"\n");
			bw.write('"'+"exp"+'"'+':'+'"'+expArray[i]+'"'+"\n");
			bw.write("}"+"\n");
	}else{ 
			bw.write('"'+"spot"+'"'+':'+'"'+spotNamesArray[i]+'"'+","+"\n"); 
			bw.write('"'+"mainclass"+'"'+':'+'"'+metagenome_type+'"'+","+"\n"); 
			bw.write('"'+"subclass"+'"'+':'+'"'+metagenome_subtype+'"'+","+"\n"); 
			bw.write('"'+"exp"+'"'+':'+'"'+expArray[i]+'"'+"\n");
			bw.write("},"+"\n");
		}
	
	}


	
	

bw.write(']'+"\n"+'}');
//关文件流			            	
bw.flush();
bw.close();	
////////////
db.close();
pw.println("{"+'"'+"exp"+'"'+":"+'"'+exp+'"'+","+'"'+"error_attention"+'"'+":"+'"'+"no"+'"'+"}");


} catch (Exception e) {
    e.printStackTrace();
    pw.println("{"+'"'+"error_attention"+'"'+":"+'"'+"yes"+'"'+"}");
    
    System.out.println("no such gene");
}
pw.flush();
pw.close();


%>
</body>
</html>