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

String gene="";
String type="";
String dataset="";
String database_name="";
gene=request.getParameter("gene0");
type=request.getParameter("type0");
dataset=request.getParameter("dataset0");
database_name=dataset+"_"+type;

////
//////////使用XMLHttpRequest 输出数据
response.setContentType("text/html;charset=utf-8");
PrintWriter pw = response.getWriter();

String sql="";
sql="SELECT * FROM "+database_name+" where gene = '"+gene+"'";
System.out.println(sql+"\n");

try {
	DBConn db = new DBConn();
	db.open();
	ResultSet rs_gene=db.executeQuery(sql);
	rs_gene.first();
	
	String exp=rs_gene.getString("exp").trim();
	String cluster="";
	String out_file_name="";
	if(type.equals("st")){
	 	 cluster=rs_gene.getString("cluster").trim();
	 	 out_file_name="gene0_st_violin.csv";
	 }else{
		 cluster=rs_gene.getString("loc").trim();
		 out_file_name="gene0_st_violin_1.csv";
	 }
    String[] exp_arr = exp.split(",");
    String[] cluster_arr = cluster.split(",");
    int arr_leng=exp_arr.length;
	
	String dir = getServletContext().getRealPath("/0_files/violin");
	dir=dir+"/";
	dir=dir.replaceAll("\\\\","/");
	//System.out.println(dir);
	
	BufferedWriter bw = new BufferedWriter(new FileWriter(dir+out_file_name));
		bw.write("violin_y"+","+"violin_x"+"\n");	
		try {
			for (int i=0;i<arr_leng;i++){
				bw.write(exp_arr[i]+","+cluster_arr[i]+"\n");
			}
		} catch (ArrayIndexOutOfBoundsException e) {
		    System.out.println("index out of range");
		    e.printStackTrace();
		}
	//关文件流			            	
	  bw.flush();
	  bw.close();
///////
rs_gene.close();
db.close();
pw.println("{"+'"'+"violin_filename"+'"'+":"+'"'+out_file_name+'"'+","+'"'+"error_attention"+'"'+":"+'"'+"no"+'"'+"}");
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