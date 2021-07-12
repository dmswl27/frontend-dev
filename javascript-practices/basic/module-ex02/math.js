module.exports = {
    PI : 3.14,
    min: function(){
        let min = Number.MAX_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e) {
            min = e < min? e : min;
        });
        return min;
    },
    max : function(){
        let max = Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e) {
            max = e > max ? e: max;
        });
        return max;
    }
}
