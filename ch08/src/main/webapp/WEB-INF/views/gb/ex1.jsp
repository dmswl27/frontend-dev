<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath }/ejs/ejs.js" type="text/javascript"></script>
<script>
var render = function(vo){
	html = "<li data-no='"+ vo.no +"'>"+
				"<strong>" + vo.name + "</strong>" +
				"<p>"+ vo.message + "<br></p>" +
				"<strong></strong>" +
				"<a href='' data-no='"+ vo.no +"'>삭제</a>" + 
			"</li>";
// 			if(mode){
// 				$("#list-guestbook").append(html);
// 			} else {
// 				$("#list-guestbook").preppend(html);
// 			}
//			$("#list-guestbook")[mode ? "append" : "preppend"](html);  //속성 접근 연산자 
}

var listItemEJS = new EJS({
	url: "${pageContext.request.contextPath }/ejs/list-template.ejs"
});

var fetch = function() {
	$.ajax({
		url: "${pageContext.request.contextPath }/guestbook/api/list",
		dataType: "json",	// 받을 때 포맷
		type: "get", 		// 요청 method
		// 1. form data 포맷  default
		contentType: "application/json",	 
		success: function(response){
			var html = listItemEJS.render(response);
			$("#list-guestbook").append(html) //속성 접근 연산자 
		}
	});
}
$(function(){
	$("#btn-fetch").click(function(){
		fetch();
	});
	// 최초 데이터 가져오기
	fetch();
});
</script>
</head>
<body>
	
	
		<ul id="list-guestbook">


							
		</ul>
		
		<div style="margin:20px 0 0 0">
			<button id="btn-fetch">똥글 더 가져오기</button>
		</div>


</body>
</html>
