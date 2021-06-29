/*
function 타입의 객체(함수)
*/

// 함수를 생성하는 방법1
function f1(a,b){
    return a+b;
}
console.log(typeof(f1), f1(10,20));

// 함수를 생성하는 방법2: 리터럴
var f2 = function(a,b){
    return a+b;
}
console.log(typeof(f2), f2(10,20));

// 함수를 생성하는 방법3 : new 연산자와 함께 Function() 생성자 호출
var f3 = new Function("a", "b", "return a+b;");
console.log(typeof(f3), f3(10,20));

// 함수를 생성하는 방법4 : 익명(Anonymous) 함수
//callback
setTimeout(function(){
    console.log("time out!");
}, 4000);

console.log("!");

//즉시 실행하는 함수
var s = (function(a,b){
    return a + b;
})(10,20);

console.log(sum);

// 가변 파라미터 함수 
var sum = function(){
    var s = 0;
    // //arguments는 Array가 아니다. 유사 배열
    // console.log(arguments instanceof Array);

    // 구현 1
    // for(var i =0; i<arguments.length; i++){
    //     s += arguments[i];
    // }
    
    // 구현 2 (Array.prototype.forEach + caller 바꾸기)
    Array.prototype.forEach.call(arguments, function(e){
        s +=e;
    })
    return s;
}

console.log(sum(1,2));
console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5,6));
