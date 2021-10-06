/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let [area, perimeter] = expressions;

    let root = Math.sqrt(Math.pow(perimeter, 2) - 16 * area);

    let s1 = (perimeter - root)/4;

    let s2 = (perimeter + root)/4;

    return [s1, s2];
}

let s1 = +2;
let s2 = +3;

[s1, s2] = [s1, s2].sort();

const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
// literals = [ 'The area is: ', '.\nThe perimeter is: ', '.' ]
// expressions = [${s1 * s2}, ${2 * (s1 + s2)}]
// In our case  expressions = [ 6, 10 ]

console.log((s1 === x) ? s1 : -1);
console.log((s2 === y) ? s2 : -1);