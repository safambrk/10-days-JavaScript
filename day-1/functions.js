/*
 * Create the function factorial
 */
function factorial(n) {
    let factorial = n;
    for(let i=n-1; i>=1; i--) {
        factorial *=i;
    }
    return factorial;
}

// Invoking the factorial function
console.log(factorial(6));