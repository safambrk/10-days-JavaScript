/**
 * 
 * Declare the vowelsAndConsonants function.
 * It prints each vowel of 's' in order on a new line
 * Then print each consonant in order on a new line
 * Return nothing!
 * 
 */
function vowelsAndConsonants(s) {
    let englishVowels = ['a','o','e','i','u'];
    let vowels = [];
    let consonants = [];

    let array = s.split('');
    array.forEach((letter) => {
        if(englishVowels.indexOf(letter)>-1) {
            vowels.push(letter)
        } else {
            consonants.push(letter)
        }
    })

    let results = [...vowels, ...consonants];


    results.forEach((elem)=> {
        console.log(elem);
    })
}

// Declare a string;
let s = "javascriptloops";

// Invoking the vowelsAndConsonants function 
vowelsAndConsonants(s);