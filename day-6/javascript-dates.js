// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const date = new Date(dateString)

    dayName = weekDays[date.getDay()]
    
    return dayName;
}

// Store a date in a string variable
let date = "02/02/1998";

// Invoking function
console.log(`The Name of date '${date}' is : ${getDayName(date)}`);
