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
String gene0="";
String database_name="";
gene0=request.getParameter("gene");
database_name=request.getParameter("database_name");

//////////使用XMLHttpRequest 输出数据
response.setContentType("text/html;charset=utf-8");
//获取PrintWriter
PrintWriter pw = response.getWriter();
// database_name="luad01_td6_spot_exp";
// gene0="FAM138A";
String sql="SELECT * FROM "+database_name+" where gene = '"+gene0+"'";


System.out.println(sql);

try {
DBConn db = new DBConn();
db.open();
ResultSet rs_gene=db.executeQuery(sql);

rs_gene.first();
String exp=rs_gene.getString("exp").trim();

//System.out.println(exp);

rs_gene.close();
db.close();

pw.println("{"+'"'+"exp"+'"'+":"+'"'+exp+'"'+"}");

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