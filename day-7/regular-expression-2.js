function regexVar_2() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    let re = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]+$/;
    return re;
}

// Invoking the function
const re = regexVar_2();
const string_1 = "Mr.Dr.";
console.log(`${string_1} => ${!!string_1.match(re)}`);


const string_2 = "Mr.X";
console.log(`${string_2} => ${!!string_2.match(re)}`);
