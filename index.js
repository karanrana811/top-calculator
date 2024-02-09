const numList = document.querySelectorAll('button')
const display = document.querySelector('.display');
let displayContent = 0;
let firstNum;
let operator;
let operatorArr = [];
let secondNum;
let prevClick;
let isShort = true;

const fillDisp = () => {
    numList.forEach(num => {
        num.addEventListener('click', (event) => {
            if (prevClick !== 'add' && prevClick !== 'subtract' && prevClick !== 'multiply' && prevClick !== 'divide' && prevClick !== 'equal') {
                display.textContent.length > 20 ? isShort = false : isShort = true;
            }
            let id = event.target.id

            if (id === 'zero') {
                if (!isShort) {
                    event.preventDefault();
                } else {
                (prevClick === 'add' || prevClick === 'subtract' || prevClick === 'multiply' || prevClick === 'divide') ? display.textContent = 0: display.textContent += '0';
                prevClick = 'zero';}
            }
            if (id === 'one') {
                if (!isShort) {
                    event.preventDefault();
                } else {
                    if (prevClick === 'add' || prevClick === 'subtract' || prevClick === 'multiply' || prevClick === 'divide' || display.textContent === '0') {
                        display.textContent = 1;
                    } else {
                        display.textContent += '1'
                    }
                    prevClick = 'one'
                }
            }
            if (id === 'two') {
                if (!isShort) {
                    event.preventDefault();
                } else {
                    if (prevClick === 'add' || prevClick === 'subtract' || prevClick === 'multiply' || prevClick === 'divide' || display.textContent === '0') {
                        display.textContent = 2;
                    } else {
                        display.textContent += '2'
                    }
                    prevClick = 'two'
                }
            }
            if (id === 'three') {
                if (!isShort) {
                    event.preventDefault();
                } else {
                    if (prevClick === 'add' || prevClick === 'subtract' || prevClick === 'multiply' || prevClick === 'divide' || display.textContent === '0') {
                        display.textContent = 3;
                    } else {
                        display.textContent += '3'
                    }
                    prevClick = 'three'
                }
            }
            if (id === 'four') {
                if (!isShort) {
                    event.preventDefault();
                } else {
                    if (prevClick === 'add' || prevClick === 'subtract' || prevClick === 'multiply' || prevClick === 'divide' || display.textContent === '0') {
                        display.textContent = 4;
                    } else {
                        display.textContent += '4'
                    }
                    prevClick = 'four'
                }
            }
            if (id === 'five') {
                if (!isShort) {
                    event.preventDefault();
                } else {
                    if (prevClick === 'add' || prevClick === 'subtract' || prevClick === 'multiply' || prevClick === 'divide' || display.textContent === '0') {
                        display.textContent = 5;
                    } else {
                        display.textContent += '5'
                    }
                    prevClick = 'five'
                }
            }
            if (id === 'six') {
                if (!isShort) {
                    event.preventDefault();
                } else {
                    if (prevClick === 'add' || prevClick === 'subtract' || prevClick === 'multiply' || prevClick === 'divide' || display.textContent === '0') {
                        display.textContent = 6;
                    } else {
                        display.textContent += '6'
                    }
                    prevClick = 'six'
                }
            }
            if (id === 'seven') {
                if (!isShort) {
                    event.preventDefault();
                } else {
                    if (prevClick === 'add' || prevClick === 'subtract' || prevClick === 'multiply' || prevClick === 'divide' || display.textContent === '0') {
                        display.textContent = 7;
                    } else {
                        display.textContent += '7'
                    }
                    prevClick = 'seven'
                }
            }
            if (id === 'eight') {
                if (!isShort) {
                    event.preventDefault();
                } else {
                    if (prevClick === 'add' || prevClick === 'subtract' || prevClick === 'multiply' || prevClick === 'divide' || display.textContent === '0') {
                        display.textContent = 8;
                    } else {
                        display.textContent += '8'
                    }
                    prevClick = 'eight'
                }
            }
            if (id === 'nine') {
                if (!isShort) {
                    event.preventDefault();
                } else {
                    if (prevClick === 'add' || prevClick === 'subtract' || prevClick === 'multiply' || prevClick === 'divide' || display.textContent === '0') {
                        display.textContent = 9;
                    } else {
                        display.textContent += '9'
                    }
                    prevClick = 'nine'
                }
            }
            if (id === 'add') {
                isShort = true;
                if (prevClick !== 'add') {
                    operatorArr.push('+')
                }
                if (operatorArr.length > 1 &&
                    (prevClick !== 'add' || prevClick !== 'subtract' || prevClick !== 'multiply' || prevClick !== 'divide')
                ) {
                    secondNum = display.textContent;
                    firstNum = operate(operatorArr[operatorArr.length - 2], firstNum, secondNum);
                    display.textContent = firstNum;
                } else {
                    firstNum = display.textContent;
                }
                operator = '+';
                prevClick = 'add';
            }
            if (id === 'subtract') {
                isShort = true;

                if (prevClick !== 'subtract') {
                    operatorArr.push('-')
                };
                if (operatorArr.length > 1 && (prevClick !== 'add' || prevClick !== 'subtract' || prevClick !== 'multiply' || prevClick !== 'divide')) {
                    secondNum = display.textContent;
                    firstNum = operate(operatorArr[operatorArr.length - 2], firstNum, secondNum);
                    display.textContent = firstNum;

                } else {
                    firstNum = display.textContent;
                }
                operator = '-';
                prevClick = 'subtract';

            }
            if (id === 'multiply') {
                isShort = true;

                if (prevClick !== 'multiply') {
                    operatorArr.push('*')
                };
                if (operatorArr.length > 1 && (prevClick !== 'add' || prevClick !== 'subtract' || prevClick !== 'multiply' || prevClick !== 'divide')) {
                    secondNum = display.textContent;
                    firstNum = operate(operatorArr[operatorArr.length - 2], firstNum, secondNum);
                    display.textContent = firstNum;

                } else {
                    firstNum = display.textContent;
                }
                operator = '*';
                prevClick = 'multiply';
            }
            if (id === 'divide') {
                isShort = true;

                if (prevClick !== 'divide') {
                    operatorArr.push('/')
                }
                if (operatorArr.length > 1 && (prevClick !== 'add' || prevClick !== 'subtract' || prevClick !== 'multiply' || prevClick !== 'divide')) {
                    secondNum = display.textContent;
                    firstNum = operate(operatorArr[operatorArr.length - 2], firstNum, secondNum);
                    display.textContent = firstNum;

                } else {
                    firstNum = display.textContent;
                }
                operator = '/';
                prevClick = 'divide';
            }
            if (id === 'equal') {
                isShort = true;

                if (prevClick != 'equal') {
                    secondNum = display.textContent;
                    display.textContent = (firstNum && operator) ? operate(operator, firstNum, secondNum) : displayContent;
                }
                prevClick = 'equal';
                operatorArr = [];
            }
            if (id === 'clear') {
                display.textContent = 0;
                firstNum = '';
                secondNum = '';
                operator = '';
                prevClick = 'clear'
                operatorArr = [];
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

const subtract = (a, b) => +a - +b;

const multiply = (a, b) => +a * +b;

const divide = (a, b) => +a / +b;

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

/*
if displayContent.length > 20, prevent any more number input
*/