<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="gradeServlet" method="get">
		G1:<input type="number" name="G1"><br>
		G2:<input type="number" name="G2"><br>
		G3:<input type="number" name="G3"><br>
		G4:<input type="number" name="G4"><br>
		G5:<input type="number" name="G5"><br>
		<input type="submit">
	</form>
	<p>Grade is:<%=request.getAttribute("grade")%></p>
</body>
</html>