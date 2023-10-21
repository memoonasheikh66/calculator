let currentInput = '';
let operator = '';
let firstOperand = '';

const display = document.getElementById('display');

document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        display.textContent = currentInput;
    });
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput !== '') {
            if (firstOperand !== '') {
                currentInput = calculate(firstOperand, currentInput, operator);
                display.textContent = currentInput;
            }
            firstOperand = currentInput;
            operator = button.textContent;
            currentInput = '';
        }
    });
});

document.getElementById('clear').addEventListener('click', () => {
    currentInput = '';
    operator = '';
    firstOperand = '';
    display.textContent = '0';
});

document.getElementById('calculate').addEventListener('click', () => {
    if (firstOperand !== '' && currentInput !== '') {
        currentInput = calculate(firstOperand, currentInput, operator);
        display.textContent = currentInput;
        firstOperand = '';
        operator = '';
    }
});

document.getElementById('decimal').addEventListener('click', () => {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.textContent = currentInput;
    }
});

function calculate(firstOperand, secondOperand, operator) {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                alert('Error: Division by zero');
                return '';
            }
            return num1 / num2;
        default:
            return '';
    }
}
