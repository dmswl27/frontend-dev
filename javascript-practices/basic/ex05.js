/*
구문(Statement)
1. 자바스크립트의 실행 단위
2. 구성 요소
   값, 연산자 : 표현식
   주석       : 구문을 구성해도 실행되지 않는다.
   예약어     : if, else, for, ...
3. 구문의 예
   if, if~else, if~elseif~else
   while, do-while, for
   switch
   for~in
   with(deprecated)
   변수 정의(함수 정의)
4. 공백: 토큰 구분, 무시   
5. 세미콜론:
   원칙적으로 구문을 분리하는 역할 
6. 개행(line breaker)   
*/

// ;는 
// 표현식 var s = "hello World" 를 
// 표현식 구문(Expression Statement)으로 만들어
// 표현식을 실행하게끔 한다.
var s = "hello World"; console.log(s)

// 1. 개행은 ;으로 대체된다.
var s = "hello World"
console.log(s)

// 2.
// 하지만
// 상황에 따라서는 토큰을 분리하는 역할도 하고
// ; 역할도 한다.
a
=
2
+
2
console.log(a)