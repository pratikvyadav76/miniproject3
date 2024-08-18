const calculatorScreen = document.querySelector('.calculator-screen');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'DEL') {
      currentInput = currentInput.slice(0, -1);
    } else if (value === 'RESET') {
      currentInput = '';
      operator = '';
    } else if (value === '+' || value === '-' || value === '/' || value === 'x') {
      operator = value;
      currentInput += value;
    } else if (value === '=') {
      calculate();
    } else {
      currentInput += value;
    }

    calculatorScreen.value = currentInput;
  });
});

function calculate() {
  const numbers = currentInput.split(/[-+x/]/);
  const operators = currentInput.match(/[-+x/]/g);

  let result = parseFloat(numbers[0]);

  for (let i = 0; i < operators.length; i++) {
    const num2 = parseFloat(numbers[i + 1]);
    switch (operators[i]) {
      case '+':
        result += num2;
        break;
      case '-':
        result -= num2;
        break;
      case '/':
        result /= num2;
        break;
      case 'x':
        result *= num2;
        break;
    }
  }

  currentInput = result.toString();
  calculatorScreen.value = result;
}