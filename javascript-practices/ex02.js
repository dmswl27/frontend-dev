/*
변수와 데이터 타입
[기본타입(primitive type), 유사객체]
1. number
2. boolean
3. string
4. undefined
[객체1] - object type 
1. new 생성자함수() 사용해서 생성,
    Number()  -> object type 객체 생성
    Boolean() -> object type 객체 생성
    String()  -> object type 객체 생성
    Object()  -> object type 객체 생성
    Array()   -> object type 객체 생성
2. null
3. [](배열 리터럴)
4. {}(객체 리터럴, JSON)
 
[객체2] - function type 
1. new 생성자함수() 사용해서 생성,
   Function() -> function type 객체가 생성
2. funtion(....) { ..... } ( 함수 리터럴)
*/

/*
*/

console.log("==== 원시 타입 =====================")
var u = undefined; // var u; 와 동일 선언과 정의의 구분이 없다. 
var i = 10;
var b = true;
var s = "Hello World";

console.log("u :" + typeof(u));
console.log("i :" + typeof(i));
console.log("b :" + typeof(b));
console.log("s :" + typeof(s));

console.log("====[객체1]: object type =====================")
var i2 = new Number(10);
var b2 = new Boolean(true);
var s2 = new String("Hello World");
var o = new Object(true);
var a = new Array();

var n = null;
var a2 = [];
var o2 = {};

console.log("i2 :" + typeof(i2));
console.log("b2 :" + typeof(b2));
console.log("s2 :" + typeof(s2));
console.log("o :" + typeof(o));
console.log("a :" + typeof(a));
console.log("n :" + typeof(n));
console.log("a2 :" + typeof(a2));
console.log("o2 :" + typeof(o2));


console.log("====[객체2]: function type =====================")
var f = new Function("a", "b", "return a + b;");
var f2 = function(a, b) { return a + b; }

console.log("f: " + typeof(f));
console.log("f2: " + typeof(f2));


console.log("====원시타입과 원시타입을 Wrapper 객체는 구분없이 사용가능하다. =====================")
console.log(i + i2);
console.log(s + s2);

// 원시 타입에 메서드가 호출될 때,
// 임시 Wrapper객체가 만들어 져서 메서드 호출이 일어난 뒤 사라진다. 
console.log("====원시타입도 메소드 호출이 가능하다. =====================")
console.log(b.valueOf());
console.log(b2.valueOf());