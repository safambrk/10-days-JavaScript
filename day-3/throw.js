/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if ( a>0 ) {
        return 'YES';
    } else if ( a<0 ) {
        throw new Error('Negative Error');
    } else {
        throw new Error('Zero Error');
    }
}


// Invoking the function
console.log(isPositive(10));

// incomment to see the result
//console.log(isPositive(-10));
//console.log(isPositive(0));
