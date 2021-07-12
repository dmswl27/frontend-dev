/**
 * 6. Destructuring(구조분해)
 */

//ex1 - basic
let firstName;
let lastName;

const user = {
    firstName : "둘",
    lastName : "리",
    email : "dooly@rrr"
};

({firstName,lastName} = user);
console.log(firstName, lastName);

//ex2 - Default Value
const goods = {
    name: "TV",
    price : 100000,
    stockCount : 30
}

let {name, price, soldCount = 0, stockCount = 0} = goods;
console.log(name, price, soldCount, stockCount);

// ex3 - 구조 분해해야 할 객체의 속성과 변수 이름이 다를 때
const person = {
    name : "한은지",
    country : "korea"
}

let {name: fullName, country: place} = person;
console.log(fullName, place);

// ex4 - 내부 객체(Nested Object)의 구조 분해
const student = {
    name: '둘리',
    age: 10,
    scores: {
        maths: 90,
        korean: 70,
        science: 100
    }        
}

const {
    name: studentName, 
    scores: {
        maths = 0,
        korean = 0,
        science = 0,
        music = 0
    } 
} = student;
console.log(`${studentName}의 성적\n수학:${maths}, 국어:${korean}, 과학:${science}, 음악:${music}`)

// ex5 - 함수의 파라미터
var averageScore = function({
    name, 
    scores: {
        maths = 0,
        korean = 0,
        science = 0,
        music = 0
    } 
}){
    console.log(`${name}의 평균은 ${(maths + korean + science + music)/4}점 입니다.`);
}

averageScore(student); //출력: 둘리의 평균은 90 점입니다.

// ex7 - 배열의 구조분해 기본
const color = [155, 200, 87];

[red, green, blue] = color;
console.log(red, green, blue);

// ex7 - 배열의 구조분해 디폴트 값
[red=0, green=0, blue=0, alpha=0] = color;
console.log(red, green, blue, alpha);

// ex8 - skip values
let [,,colorOfBlue=0] = color;
console.log(colorOfBlue);

// ex8 - swap values
let x = 10;
let y = 20;
console.log(x, y);
let temp = x;
x = y;
y = temp;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

// ex9 - ... array spread operator
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let [firstColor, secondColor, ...otherColors] = rainbow;
console.log(firstColor, secondColor, otherColors);

console.log("Colors of Rainbow:", rainbow);
console.log("Colors of Rainbow:", ...rainbow);

// "red:orange:yellow"
// var f = function(...colors){
//     return colors.join(":");
// }
// s = f('red', 'orange', 'yellow');
s = ((...colors) => colors.join(":"))('red', 'orange', 'yellow');
console.log(s);