/*
 * The Rectangle function
 */
function Rectangle(a, b) {
    let length = a;
    let width = b;
    let perimeter = (a*2) + (b*2);
    let area = a*b;
    return {
        length,
        width,
        perimeter,
        area
    }
}

// Declare the length and width
let length = 3;
let width = 7;

// Invoking the function
console.log(Rectangle(length, width));