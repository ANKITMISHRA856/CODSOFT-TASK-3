let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let result = 0;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput !== '') {
        operator = op;
        currentInput += ' ' + op + ' ';
        display.value = currentInput;
    }
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    operator = '';
}

function calculate() {
    let expression = currentInput.split(' ');

    if (expression.length !== 3) {
        display.value = 'Error';
        return;
    }

    let num1 = parseFloat(expression[0]);
    let op = expression[1];
    let num2 = parseFloat(expression[2]);

    if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Error';
        return;
    }

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                display.value = 'Error';
                return;
            }
            result = num1 / num2;
            break;
        default:
            display.value = 'Error';
            return;
    }

    display.value = result;
    currentInput = result.toString();
    operator = '';
}