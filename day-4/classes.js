/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {

    constructor(sideLengths) {
        this.sideLengths = sideLengths;
    }

    perimeter() { 
        let sum = 0;
        this.sideLengths.forEach(element => {
            sum += element;
        });
        return sum;
    };
    
}

// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5]);

// Print the perimeter
console.log(triangle.perimeter());