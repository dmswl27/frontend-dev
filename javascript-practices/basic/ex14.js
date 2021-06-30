// URL 문자열 다루기

var url1 = "http://www.mysite.com/user?name=둘리&no=10";

// 1. escape : URL르 ㄹ전부 encoding , (X), deprecated
var url2 = escape(url1);
console.log(url2);

//2. encodeURI : parameter 만 encoding, (O)
var url3 = encodeURI(url1);
console.log(url3);

//3. encodeURIConponent : value만 encoding 해야 하는 경우
var url4 = encodeURIComponent(url1);  // 안좋은 사용 예
console.log(url4);

console.log("==============================================");

// 만들어야 할 URL
// http://mysite.com/user?name=둘리&no=10

var toQueryString = function(o){
    var qs =[];
    for(prop in o){
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }
    return qs.join("&");
}

var url = "http://mysite.com/user";

var param = {
    no:10,
    name:"한은지",
    email:"dmswl@qqq"
}

var url5 = url + "?" + toQueryString(param);
console.log(url5);