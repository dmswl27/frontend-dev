/*
자바스크립트 객체 3
*/
var o = {
    name: "둘리",
    age: 10,
    isFemale: false
}
console.log(o);

var f = function(){
    console.log("Hello World");
}
f();

var i1 = 10;
var i2 = new Number(10);

console.log("===객체의 확장=====================");
o.another = {
    name: "마이콜",
    age: 3
};
console.log(o );

f.another = {
    name: "마이콜",
    age: 30,
    info: function(){
        console.log(this.name + ":" + this.age);
    }
};
console.log(f.another );
console.log("-----------------------")
f.another.info();

console.log("===기본 타입은 확장X=====================");
i2.another = {};
console.log(i2);

i1.another = {};
console.log(i1.another);