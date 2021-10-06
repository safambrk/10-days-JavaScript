/**
 * 
 * The getLetter function has one parameter type string : s
 * It returns a single letter, depends on th first letter of s
 * 
 */

 function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
        case ('a' || 'e' || 'i' || 'o' || 'u'):
            letter = 'A';
            break;
        case ('b' || 'c' || 'd' || 'f' || 'g'):
            letter = 'B';
            break;
        case ('h' || 'j' || 'k' || 'l' || 'm'):
            letter = 'C';
            break;
        default:
            letter = 'D';
            break;
    }
    return letter;
}

// Invoking the getLetter function
console.log(`
    ${getLetter("coding")}
    ${getLetter("hackerrank")}
    ${getLetter("angular")}
    `);