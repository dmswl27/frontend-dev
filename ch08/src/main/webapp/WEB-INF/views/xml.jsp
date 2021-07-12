<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>  
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js" type="text/javascript"></script>
<script>
$(function(){
	$("button").click(function(){
		$.ajax({
			url:"${pageContext.request.contextPath }/api/xml",
			dataType: "xml",
			async: true,
			success: function(response) {
				const $data = $("data",response);
				const $no = $("no" , $data);
				const $name = $("name" , $data);
				const $message = $("message" , $data);
				
				const no = $no.text();
				const name = $name.text();
				const message = $message.text();
				
				let html="";
				html += "<h4>" + no + "</h4>" 
				html += "<h5>" + name + "</h5>" 
				html += "<p>" + message + "</p>" 
				
				$("#data").append(html);
			}
		});
	});
});
</script>
</head>
<body>
	<h1>AJAX Test - XML format Message(data)</h1>
	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>