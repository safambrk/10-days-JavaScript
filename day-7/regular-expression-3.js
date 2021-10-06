function regexVar_3() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    let re = /\d+/g
    return re;
}

// Invoking the function
const re = regexVar_3();
const s = "102, 1948948 and 1.3 and 4.5";
const r = s.match(re);
for (const e of r) {
    console.log(e);
}