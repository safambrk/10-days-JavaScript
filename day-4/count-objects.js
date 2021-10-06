/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let count = 0;
    objects.forEach(element => {
        if(element.x == element.y) count++;
    });

    return count;
}

// Declare an array of objects with integer properties 'x' and 'y'
let myObjects = [{x:1, y:1}, {x:1, y:7}, {x:2, y:1}, {x:3, y:3}, {x:3, y:4}, {x:5, y:5}];

// Invoking the function 
console.log(getCount(myObjects));
