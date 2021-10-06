/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let largest = nums[0];
    let secondLargest = nums[0];

    nums.forEach(element => {
        if(element>largest) largest=element;
    });

    nums.forEach(element => {
        if(element<largest && element>secondLargest) secondLargest = element;
    });
    
    return secondLargest;
}

// Declare myArray
let myArray = [2, 3, 6, 6, 5];

// Invoking the getSecondLargest function
console.log(getSecondLargest(myArray));