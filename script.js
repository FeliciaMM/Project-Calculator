let display = document.querySelector('.display');
let numberButtons = document.querySelectorAll('.numberButton');
let operatorButtons = document.querySelectorAll('.operatorButton');
let clearButton = document.querySelector('.clearButton');
let equalButton = document.querySelector('.equalButton');
let decimalButton = document.querySelector('.decimalButton');
let plusMinusButton = document.querySelector('.plusMinusButton');
let backSpaceButton = document.querySelector('.backSpaceButton');

let valueA = null;
let valueB = null;
let operator = null;
let result = null;

clearButton.addEventListener('click', () => {
    display.innerHTML = "0";
    valueA = null;
    valueB = null;
    operator = null;
    result = null;
});


numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (display.textContent === "0" || (operator && valueB === null)) {
            display.textContent = "";
        }
        display.textContent += button.textContent;
        if (operator) {
            valueB = parseFloat(display.textContent); 
        } 
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (valueA === null) {
            valueA = parseFloat(display.textContent);
        } else if (operator) {
            if (valueA === null) {
            valueB = parseFloat(display.textContent);
            }
            valueA = operate(valueA, valueB, operator);
            display.textContent = valueA; 
            valueB = null;
        }
        operator = button.textContent; 
    });
});

decimalButton.addEventListener('click',()=>{
    display.textContent+="." ;
    
})

plusMinusButton.addEventListener('click',()=>{
  display.innerHTML=display.textContent*(-1);
    
})

backSpaceButton.addEventListener('click',()=>{
    let last = display.textContent.slice(0, -1)
    display.innerHTML = last;
})

equalButton.addEventListener('click', () => {
    if (valueA !== null && operator !== null) {
        valueB = parseFloat(display.textContent);
        result = operate(valueA, valueB, operator); 
        display.textContent = result;
        valueA = result; 
        valueB = null; 
        operator = null; 
    }
});



function operate(a, b, op) {
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return substract(a, b);
        case "x":
            return multiply(a, b);
        case "%":
            return reminder(a, b)
        case "/":
            if(b!=0){
            return divide(a, b);
            }else{
             return display.innerHTML="Autodestruction initiated";
            }
        default:
            return "Error";
    }
}



function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return (a - b).toFixed(1);
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return (a / b).toFixed(3);
}

function reminder(a, b) {
    return (a % b);
}
