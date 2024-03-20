package com.servlet;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class loginServlet extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		response.setContentType("text/html");
		String usrName = request.getParameter("inTxtBox");
		PrintWriter obj = response.getWriter();
		if(usrName.equals("Nanda")) {			
			obj.println("<h1>welcome "+usrName+"</h1>");
		}
		else {
			obj.println("<h1>Not valid user"+usrName+"</h1>");
		}
		obj.close();
		}
}
