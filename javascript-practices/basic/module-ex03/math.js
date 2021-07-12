/**
 * exports 뒤에 꼭 이름을 사용해서 export해야 한다.
 * named export
 */

exports.PI = 3.14;
exports.min = function(){
    let min = Number.MAX_SAFE_INTEGER;
    Array.from(arguments).forEach(e => min = e < min? e : min)
    return min;
}
exports.max = function(){
    let max = Number.MIN_SAFE_INTEGER;
    Array.from(arguments).forEach(e => max = e > max ? e: max);
    return max;
}
        


