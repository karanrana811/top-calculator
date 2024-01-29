const zero = document.querySelector('#zero')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const numList = document.querySelectorAll('button')
const display = document.querySelector('.display');

const fillDisp = () => {
    numList.forEach(num => {
        num.addEventListener('click', (event) => {
            let id = event.target.id
            if (id === 'zero'){
                if(display.textContent !== '0') display.textContent += '0'
            } if (id === 'one'){
                display.textContent === '0' ? display.textContent = '1' : display.textContent += '1'
            }
            if (id === 'two'){
                display.textContent === '0' ? display.textContent = '2' : display.textContent += '2'
            }
            if (id === 'three'){
                display.textContent === '0' ? display.textContent = '3' : display.textContent += '3'
            }
            if (id === 'four'){
                display.textContent === '0' ? display.textContent = '4' : display.textContent += '4'
            }
            if (id === 'five'){
                display.textContent === '0' ? display.textContent = '5' : display.textContent += '5'
            }
            if (id === 'six'){
                display.textContent === '0' ? display.textContent = '6' : display.textContent += '6'
            }
            if (id === 'seven'){
                display.textContent === '0' ? display.textContent = '7' : display.textContent += '7'
            }
            if (id === 'eight'){
                display.textContent === '0' ? display.textContent = '8' : display.textContent += '8'
            }
            if (id === 'nine'){
                display.textContent === '0' ? display.textContent = '9' : display.textContent += '9'
            } 
        })
    })
}

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

fillDisp();