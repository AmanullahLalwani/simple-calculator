function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];
    if ('+-*/'.includes(lastChar)) {
        display.value = display.value.slice(0, -1);
    }
    display.value += operator;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}