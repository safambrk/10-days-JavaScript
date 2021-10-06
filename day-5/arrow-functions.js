/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    let modify = element => element%2==0 ? element*=2 : element*=3
    return nums.map(modify)
}

// Declare an array
let array = [1, 2, 3, 4, 5];

// Invoking the function
console.log(modifyArray(array));