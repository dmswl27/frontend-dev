<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>  
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script>
// DOM load Event 
// 1. load : 모두 다 (DOM, CSSom, Image) 완료
// 2. DOMContentLoaded : DOM만 다 완성(CSSom x, Image x)
window.addEventListener("DOMContentLoaded", function(){
	document.getElementsByTagName("button")[0].addEventListener("click", function(){
		let xhr = null;
		if(window.ActiveXObject){ // <=IE6
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		} else if(window.XMLHttpRequest){			// Other Stantards and IE7 +
			xhr = new XMLHttpRequest();
		} else{
			console.log("AJAX 기능을 사용할 수 없습니다.");
			return ;
		}
		
		xhr.addEventListener("readystatechange", function(){
			if(this.readyState == XMLHttpRequest.UNSET){  //readyState : 1
				// request 초기화 되기 전
				console.log("State:UNSET" );
			} else if(this.readyState == XMLHttpRequest.OPENED){ //readyState : 2
				// 서버와 연결이 성공
				console.log("State:OPENED");
			} else if(this.readyState == XMLHttpRequest.HEADER_RECEIVED){  //readyState : 3
				// 서버가 request를 받음
				console.log("State:HEADER_RECEIVED");
			} else if(this.readyState == XMLHttpRequest.LOADING){  //readyState : 4
				// response 처리 중
				console.log("State:LOADING");
			} else if(this.readyState == XMLHttpRequest.DONE){  //readyState : 5
				// response 처리 완료
				console.log("State:DONE");
			
				if(this.status !=200){
					console.error(this.status);
					return;
				} 
				const response = JSON.parse(this.responseText);
				console.log(response);
				let html="";
				html += "<h4>" + response.data.no + "</h4>" 
				html += "<h5>" + response.data.name + "</h5>" 
				html += "<p>" + response.data.message + "</p>" 
				
				document.getElementById("data").innerHTML = html;
			}
			
		});
		xhr.open("get", "${pageContext.request.contextPath }/api/json", true);
		xhr.send();
	});
}); 
</script>
</head>
<body>
	<h1>AJAX Test - XMLHttpRequest</h1>
	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>