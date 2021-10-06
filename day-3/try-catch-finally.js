/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        console.log(s.split('').reverse().join(''));
    } catch (error) {
        console.log(error.message + "\n" + s);
    }
}

// Invoking the reverseString function
// String Param -> Success
reverseString('JavaScript');

// Number Param -> Error
reverseString(+1234);