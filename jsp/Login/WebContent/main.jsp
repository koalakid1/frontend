<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<%@include file="sessionCheck.jsp" %>
<%=session.getAttribute("loginUser")%>님 안녕하세요!<br>
<form method="post" action="logout.jsp">
<input type=submit value="로그아웃">
</form>
</body>
</html>