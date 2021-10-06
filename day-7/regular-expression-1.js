function regexVar_1() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^([aeiou]).+\1$/;
    return re;
}

// Invoking the function
const re = regexVar_1();
const string_1 = "bcd";
console.log(`${string_1} => ${re.test(string_1)}`);


const string_2 = "alia";
console.log(`${string_2} => ${re.test(string_2)}`);
