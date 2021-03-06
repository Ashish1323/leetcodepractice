/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var map=new Map()
    while(n!=1){
    n=sumOfDigits(n)    
    if(map.has(n)) return false
    map.set(n)    
    }
    return true
};

function sumOfDigits(n){
    let sum = 0;
    while(n>0){
        var x=n%10
        sum += Math.pow(x,2); 
        n = Math.floor(n/10);
    }
    return sum;
}