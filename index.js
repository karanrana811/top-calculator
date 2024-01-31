const numList = document.querySelectorAll('button')
const display = document.querySelector('.display');
let displayContent = 0;
let firstNum;
let operator;
let secondNum;
let prevClick;


const fillDisp = () => {
    numList.forEach(num => {
        num.addEventListener('click', (event) => {
            let id = event.target.id
            if (id === 'zero') {
                prevClick === 'add' ? display.textContent = 0 : display.textContent += '0';
                prevClick = 'zero';
            }
            if (id === 'one') {
                if (prevClick === 'add' || display.textContent === '0') {
                    display.textContent = 1;
                } else {
                    display.textContent += '1'
                }
                prevClick = 'one'
            }
            if (id === 'two') {
                if (prevClick === 'add' || display.textContent === '0') {
                    display.textContent = 2;
                } else {
                    display.textContent += '2'
                }
                prevClick = 'two'
            }
            if (id === 'three') {
                if (prevClick === 'add' || display.textContent === '0') {
                    display.textContent = 3;
                } else {
                    display.textContent += '3'
                }
                prevClick = 'three'
            }
            if (id === 'four') {
                if (prevClick === 'add' || display.textContent === '0') {
                    display.textContent = 4;
                } else {
                    display.textContent += '4'
                }
                prevClick = 'four'
            }
            if (id === 'five') {
                if (prevClick === 'add' || display.textContent === '0') {
                    display.textContent = 5;
                } else {
                    display.textContent += '5'
                }
                prevClick = 'five'
            }
            if (id === 'six') {
                if (prevClick === 'add' || display.textContent === '0') {
                    display.textContent = 6;
                } else {
                    display.textContent += '6'
                }
                prevClick = 'six'
            }
            if (id === 'seven') {
                if (prevClick === 'add' || display.textContent === '0') {
                    display.textContent = 7;
                } else {
                    display.textContent += '7'
                }
                prevClick = 'seven'
            }
            if (id === 'eight') {
                if (prevClick === 'add' || display.textContent === '0') {
                    display.textContent = 8;
                } else {
                    display.textContent += '8'
                }
                prevClick = 'eight'
            }
            if (id === 'nine') {
                if (prevClick === 'add' || display.textContent === '0') {
                    display.textContent = 9;
                } else {
                    display.textContent += '9'
                }
                prevClick = 'nine'
            }
            if (id === 'add') {
                firstNum = display.textContent;
                operator = '+';
                prevClick = 'add';
            }
            if (id === 'equal') {
                if (prevClick != 'equal') {
                    secondNum = display.textContent;
                    display.textContent = (firstNum && operator) ? operate(operator, firstNum, secondNum) : 0;
                }
                prevClick = 'equal'
            }
            if (id === 'clear') {
                display.textContent = 0;
                firstNum = '';
                secondNum = '';
                operator = '';
                prevClick = 'clear'
            }
            if (prevClick === 'equal') {
                firstNum = '';
                secondNum = '';
                operator = '';
            }

            displayContent = display.textContent;
        })
    })
}

const add = (a, b) => +a + +b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (op, numOne, numTwo) => {
    let returnVal;
    if (op === '+') {
        returnVal = add(numOne, numTwo)
    } else if (op === '-') {
        returnVal = subtract(numOne, numTwo)
    } else if (op === '*') {
        returnVal = multiply(numOne, numTwo)
    } else if (op === '/') {
        returnVal = divide(numOne, numTwo)
    }
    return returnVal;
}

fillDisp();