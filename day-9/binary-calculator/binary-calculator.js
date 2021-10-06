let elem = document.getElementById("res");
  
function checkExpression(){
    if(elem.innerHTML.endsWith('+') || elem.innerHTML.endsWith('-') || elem.innerHTML.endsWith('*') || elem.innerHTML.endsWith('/')){
        return true;
    }
}

document.getElementById("btn0").addEventListener("click", function() {
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + 0;
})

document.getElementById("btn1").addEventListener("click", function() {
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + 1;
})

document.getElementById("btnSum").addEventListener("click", function() {
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + '+';
})

document.getElementById("btnSub").addEventListener("click", function() {
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + '-';
})

document.getElementById("btnMul").addEventListener("click", function() {
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + '*';
})

document.getElementById("btnDiv").addEventListener("click", function() {
    document.getElementById("res").innerHTML = document.getElementById("res").innerHTML + '/';
})

document.getElementById("btnClr").addEventListener("click", function() {
    document.getElementById("res").innerHTML = '';
})

document.getElementById("btnEql").addEventListener("click", function() {
    if(!checkExpression()) {
      let r1 = /\d+/g
      let r2 = /[\+\-\*\/]+/g
      let numbers = elem.innerHTML.match(r1);
      let operations = elem.innerHTML.match(r2);
      while(operations.length>0) {
        if(operations.includes('*')) {
          let indexOfMul = operations.indexOf('*');
          let mul = ( indexOfMul!=0 ? parseInt(numbers[indexOfMul-1],2) : parseInt(numbers[indexOfMul],2) ) * parseInt(numbers[indexOfMul+1],2);
          numbers.splice(indexOfMul,2);
          numbers.splice(indexOfMul,0,mul.toString(2));
          operations.splice(indexOfMul,1);
        } else if (operations.includes('/')) {
          let indexOfDiv = operations.indexOf('/');
          let division = ( indexOfDiv!=0 ? parseInt(numbers[indexOfDiv-1],2) : parseInt(numbers[indexOfDiv],2) ) / parseInt(numbers[indexOfDiv+1],2);
          numbers.splice(indexOfDiv,2);
          numbers.splice(indexOfDiv,0,division.toString(2));
          operations.splice(indexOfDiv,1);
        } else if (operations.includes('+')) {
          let indexOfSum = operations.indexOf('+');
          let sum = ( indexOfSum!=0 ? parseInt(numbers[indexOfSum-1],2) : parseInt(numbers[indexOfSum],2) ) + parseInt(numbers[indexOfSum+1],2);
          numbers.splice(indexOfSum,2);
          numbers.splice(indexOfSum,0,sum.toString(2));
          operations.splice(indexOfSum,1);
        } else {
          let indexOfSub = operations.indexOf('-');
          let sub = ( indexOfSub!=0 ? parseInt(numbers[indexOfSub-1],2) : parseInt(numbers[indexOfSub],2) )- parseInt(numbers[indexOfSub+1],2);
          numbers.splice(indexOfSub,2);
          numbers.splice(indexOfSub,0,sub.toString(2));
          operations.splice(indexOfSub,1);
        }  
      }
      elem.innerHTML = numbers[0].toString(2);
    } else {
      alert("Expression doesn't end with a number!")
    }
})