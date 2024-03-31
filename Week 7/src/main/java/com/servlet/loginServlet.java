package com.servlet;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.*;

public class loginServlet extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		response.setContentType("text/html");
		String username = request.getParameter("usernameTextbox");
		String password = request.getParameter("passwordTextbox");
		PrintWriter out = response.getWriter();
		
		try {
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/wdd", "root", "admin");
			PreparedStatement ps = con.prepareStatement("select * from exp7 where username=? and password=?");
			ps.setString(1, username);
			ps.setString(2, password);
			
			ResultSet rs = ps.executeQuery();
			
			if(rs.next()) {
				out.println("Login succesful. Welcome:"+username);
			} else {
				out.println("Invalid username or password");
			}
			
			
		} catch (Exception e) {
			out.println(e);
		}
	}		
}
