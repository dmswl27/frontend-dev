<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>  
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js" type="text/javascript"></script>
<script>
$(function(){
	const vo = {
			name: "호날두",
			password: "1234",
			message: "호우"
	};
	$("button").click(function(){
		$.ajax({
			url: "${pageContext.request.contextPath }/api/post02",
			async: true, 		// 디폴트
			dataType: "json",	// 받을 때 포맷
			type: "post", 		// 요청 method
			// 1. form data 포맷  default
			contentType: "application/json",	 
			data: JSON.stringify(vo),
			success: function(response){
				let html = "";
				html += ("<h4>" + response.data.no + "</h4>");
				html += ("<h5>" + response.data.name + "</h5>");
				html += ("<p>" + response.data.message + "</p>");
				$("#data").append(html);				
			}
		});
	});
});
</script>
</head>
<body>
	<h1> AJAX Test - post data2(from data format) </h1>
	<button> 데이터 보내기 </button>
	<div id="data"></div>
</body>
</html>
