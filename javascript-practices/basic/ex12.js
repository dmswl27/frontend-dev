// Array 확장 : List 메서드 추가(prototype 확장)

Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        // for(var i =0; i < value.length; i++){
        //     this.splice(index, 0, value[i]);
        //     index ++;
        var that =this;
        value.forEach(function(e){
            console.log(this);
            that.splice(index++ , 0 , e);
        });
    } else {
        this.splice(index, 0, value);
    }
}

Array.prototype.remove = function(index){
    this.splice(index, 1);
}


//리스트로 사용하기
var a = [1,2,4];
console.log(a);
a.insert (2,3);
console.log(a);

a.remove(3);
console.log(a);

a.insert(2, ['a','b','c']); 
console.log(a);

var f = function(){
    console.log(this);
}

// f();

o = {name : "me!"};
/* 
call , apply 차이점
call 바인딩 해주고 파라미터를 넘겨주고 
aplly는 파라미터가 없을떄 매개변수를 배열 형태로 넣어준다.
*/
f.call(o);
