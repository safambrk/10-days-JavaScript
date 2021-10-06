/**
 * 
 * The getGrade function has one parameter score
 * It returns the grade appropriately to the score
 *
 */

function getGrade(score) {
    let grade;
    
    if(score>25 && score <=30) {
        grade = 'A';
    } else if(score>20 && score <=25)  {
        grade = 'B';
    } else if(score>15 && score <=20) {
        grade = 'C';
    } else if(score>10 && score <=15)  {
        grade = 'D';
    } else if(score>5 && score <=10) {
        grade = 'E';
    } else if(score>=0 && score <=5)  {
        grade = 'F';
    }
    
    return grade;
}

// Declare the score variable
let score1 = 11;
let score2 = 22;

// Invoking the getGrade function
console.log(`Score = ${score1} => Grade = ${getGrade(score1)}`);
console.log(`Score = ${score2} => Grade = ${getGrade(score2)}`);