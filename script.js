let display = document.getElementById('display');
let buttons = document.querySelectorAll('.buttons');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.innerText;

        if (value === 'AC') {
            expression = '';
            display.value = '';
        } 
        else if (value === '=') {
            try {
                expression = expression.replace(/X/g, '*');
                expression = expression.replace(/√/g, 'Math.sqrt');
                expression = expression.replace(/\^/g, '**');
                
                if (expression.includes('Math.sqrt')) {
                    let num = eval(expression.replace('Math.sqrt', 'Math.sqrt'));
                    display.value = eval(num);
                } else {
                    display.value = eval(expression);
                }
                expression = display.value.toString();
            } catch {
                display.value = 'Error';
                expression = '';
            }
        } 
        else if (value === '√') {
            expression += '√(';
            display.value = expression;
        }
        else if (value === '%') {
            expression += '/100';
            display.value = expression;
        }
        else if (value === '^') {
            expression += '^';
            display.value = expression;
        }
        else {
            expression += value;
            display.value = expression;
        }
    });
});
