<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<form method="get" action="ParamServlet">
		���̵� : <input type="text" name="id"> <br>
		�� &nbsp; �� : <input type="text" name="age"> <br>
		favorites <input type="checkbox" name="item" value="�Ź�"> �Ź�
		<input type="checkbox" name="item" value="����"> ����
		<input type="checkbox" name="item" value="��Ʈ"> ��Ʈ
		<input type="submit" value="����">
	</form>
</body>
</html>