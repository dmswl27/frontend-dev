/* 
자바스크립트 객체 2 -function 타입(함수)
*/

// 일반 함수(실행코드블록이 있는 함수)
var myFunction = function(){
    console.log("일반함수");
}

// 생성자 함수(관례대로 대문자 시작)
var MyObject = function(name, age){
    this.name = name;
    this.age = age;
}

var o1 = new MyObject("둘리",10);
var o2 = new MyObject("마이콜",20);

console.log(o1);
console.log(o2);
