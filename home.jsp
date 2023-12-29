<%
String user = request.getParameter("user");
String pass = request.getParameter("pass");

if(user.equals("Admin") && pass.equals("1234")){
    response.sendRedirect("Success.jsp");
}
else{
    response.sendRedirect("saurabh2.html");
}
%>