/*
1. 자바스크립트 객체는 function 타입과 object 타입
   2가지가 있다.
2. 보통 function 타입 객체는 "함수"라고 부른다.
3. 따라서! 자바스크립트 객체라 부르는 것은
   object 타입의 객체를 가리킨다.
*/
// 생성 방법1
// 생성자 함수를 사용하는 방법
// Number(),
// Boolean(),
// String(), Object(), Array().... 내장 객체(생성자 함수)
// 그리고 사용자 정의 생성자 함수
var o1 = new Object();
o1.name = "둘리";
o1.age = 10;
o1.another = new Object();
o1.another.name = "마이콜";
o1.another.age = 30;

console.log(o1);
console.log("===============================");

// 생성 방법2
// {} listeral 사용하는 방법
o2 = {};
o2.name = "둘리";
o2.age = 10;
o2.another = new Object();
o2.another.name = "마이콜";
o2.another.age = 30;

console.log(o2);

console.log("===============================");

// 생성 방법3 = (J)ave(S)cript (O)bject (N)otation
o3 = {
    name: "둘리",
    age: 10,
    another: {
        name: "마이콜",
        age:30
    }
};

console.log(o3);

console.log("===============================");

/* XmlHttpRequest 호스트 객체(부라우저)를 사용해서 통신 */
var response = '{name: "둘리", age:10, email:"dooly@nqver.com"}'
var userVo = eval("(" + response + ")");
console.log(userVo.name + ":" + userVo.email);

console.log("===============================");