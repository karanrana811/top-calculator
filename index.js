let firstNum;
let operator;
let secondNum;

const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a*b;

const divide = (a,b) => a/b;

const operate = (op, numOne, numTwo) => {
    let returnVal;
    if(op === '+'){
        returnVal = add(numOne, numTwo)
    } else if(op === '-') {
        returnVal = subtract(numOne, numTwo)
    } else if(op === '*') {
        returnVal = multiply(numOne, numTwo)
    } else if(op === '/') {
        returnVal = divide(numOne, numTwo)
    }
    return returnVal;
}

