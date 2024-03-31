package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class gradeServlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html");
		
		char grade = ' ';
		int G1 = Integer.parseInt(request.getParameter("G1"));
		int G2 = Integer.parseInt(request.getParameter("G2"));
		int G3 = Integer.parseInt(request.getParameter("G3"));
		int G4 = Integer.parseInt(request.getParameter("G4"));
		int G5 = Integer.parseInt(request.getParameter("G5"));
		
		int avg = (G1+G2+G3+G4+G5)/5;
		grade = calculateGrade(avg);
		
		request.setAttribute("grade", grade);
		request.getRequestDispatcher("gradePage.jsp").forward(request, response);
		
	}
	
	private char calculateGrade(int score) {
        if (score >= 90) return 'A';
        else if (score >= 80) return 'B';
        else if (score >= 70) return 'C';
        else if (score >= 60) return 'D';
        else return 'F';
    }

}
