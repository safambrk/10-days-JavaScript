/**
 * 
 * Create a function names getMaxLessThanK
 * Has two params n and k
 * Return the maximum possible value of a & b < k for any a < b in sequence S.
 * S is a list from 1 to n
 * k < n
 */

 function getMaxLessThanK(n, k) {
    let maxLessThanK = 0;
    for(let a=1; a<=n; a++) {
        for(let b=a+1; b<=n; b++) {
            if(a!=b) {
                let betwiseAnd = a&b;
                if(betwiseAnd < k && betwiseAnd > maxLessThanK)
                    maxLessThanK = betwiseAnd;
            }
        }
    }
    return maxLessThanK;
}

// Invoking the function
console.log(" for n = 100, k = 25 => " , getMaxLessThanK(n = 100, k = 25));
