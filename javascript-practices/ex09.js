/* 
prototype 기반의 상속, 오버라이딩(객체스크립트)
*/

var MyObject = function(name, age){
    this.name = name;
    this.age = age;
}
MyObject.prototype.school = "bit";
MyObject.prototype.course = "douzone";
MyObject.prototype.info = function(){
    console.log(this.name + ":" + this.age + ":" + this.school + ":" + this.course );
}

// MyObject 객체 생성1
var o1 =new MyObject("둘리",10);
o1.school = "multicampus";

// MyObject 객체 생성2
var o2 =new MyObject("마이콜",20);+

o2.info();


//오버라이딩
o2.info = function(){
    console.log("비밀");
}

o2.info();