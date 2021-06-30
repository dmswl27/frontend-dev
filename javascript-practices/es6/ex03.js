/*
3. Template Literal
*/
let no =10;
let name = "dooly";
let email = "dooly@eeee";

// ex1
console.log("no:" + no + ", name:" + name + ", email:" + email);
console.log(`no:${no}, name:${name}, email:${email}`);   // ``를 사용하면 출력 가능

//ex2
console.log(`no:${no}
name:${name}
email:${email}`);  // `` 다중행도 지원 가능