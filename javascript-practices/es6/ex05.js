/**
 * 5. Arrow Function
 */

const power = function(x){
    return x*x;
}

let numbers = [1,2,3,4,5];
numbers.forEach(function(number){
    process.stdout.write(`${number}:${power(number)}\t`);
});

//ex1
console.log("\n--------");
numbers.forEach(function(number){
    // let result = (function(x){
    //     return x*x;
    // })(number);

    // let result = (x=>{
    //     return x*x;
    // })(number);
    
    // let result = (x=>x*x)(number);
    // process.stdout.write(`${number}:${result}\t`);

    process.stdout.write(`${number}:${(x => x*x)(number)}\t`);
   

});

// ex3
console.log("\n--------");
numbers.forEach(number => {
    process.stdout.write(`${number} : ${(x => x * x)(number)} ๐ด๐ฅฑ๐ด\t`);
    // process.stdout.write(`${number} : ${(x => x * x)(number)} ๐ด๐ฅฑ๐ด\t`);
});

//ex4
console.log("\n--------");
[5,3,15,46,874,11,45].forEach( e => {
    if(e % 5 == 0){
        process.stdout.write(`${e}\t`);
    }
});

//ex5 - this๋ฅผ ์ดํ์ ์ผ๋ก ๋ฐ์ธ๋ฉ(Lexical binding)
console.log("\n--------");
const dooly = {
    name : "dooly",
    friends : ["๋์น", "๋ง์ด์ฝ", "๋์ฐ๋", "๊ธธ๋", "ํฌ๋์ด"],
    printFriends:function(){
        this.friends.forEach(friend => {
            console.log(`${this.name}์ ์น๊ตฌ ${friend}`);
        });
    }
}
dooly.printFriends();