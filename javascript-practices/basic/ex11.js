var colors = ['black', 'white' , 'red']
var fruits = ['apple', 'banana', 'mango']

// Array 메서드 - concat
var a1 = fruits.concat(colors);
console.log(a1);

// Array 메서드 - join
var str = fruits.join(":");
console.log(str);

// Array 메서드 - pop, push : stack 지원
var color = colors.pop();
console.log(color, colors);

colors.push('red');
console.log(colors);

// Array 메서드 - reverse
console.log(fruits);
fruits.reverse();
console.log(fruits);


// Array 메서드 - shift
var numbers = [4000, 8000, 3000, 5000, 1000];
console.log(numbers);
var a = numbers.shift();
console.log(a, numbers);

// Array 메서드 - slice
console.log(numbers);
var numbers2 = numbers.slice(1,3);
console.log(numbers2);


// Array 메서드 - sort(오름차순 정렬) 
console.log(numbers);
numbers.sort();
console.log(numbers);


// Array 메서드 - splice
// index부터 count 개를 삭제 후 삭제된 요소를 배열로 반환한다.
console.log(fruits);
var fruits2 = fruits.splice(0/*index */, 2/*count */);
console.log(fruits, fruits2);

var a1 = [0,1,2,3,4];
var a2 = a1.splice(1,3,10);
console.log(a2, a1);

var a3 = [0,1,2,3,4];
var a4 = a3.splice(1,1,10);
console.log(a3, a4);

var a5 = [0,1,2,3,4];
var a6 = a5.splice(1,0,10);
console.log(a5, a6);




