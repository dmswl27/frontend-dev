
console.log("=======global=======");

var email = "dooly@gmail.com"
globalThis.name = "dooly";  // var name = "dooly"; 
console.log(name, global.email, global.name, email);



console.log("====== function 객체 메서드 aplly =======");

var f1 =function(){
    console.log(this);
}

f1();

//this 바꾸기
var o = {
    name:"마이콜"
}

f1.apply(o);

console.log("====== function 객체 메서드 call =======");

var f2 =function(s){
    console.log(s + " " + this.name);
}
f2.call(o, "hi");