let display = document.querySelector('.display');
let numberButtons = document.querySelectorAll('.numberButton');
let operatorButtons = document.querySelectorAll('.operatorButton')
let clearButton = document.querySelector('.clearButton');
let equalButton = document.querySelector('.equalButton');
let valueA=null;
let valueB=null;
let operator=null;
let result = null;

function resetDisplay(){
    display.innerHTML = " ";
}

function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

clearButton.addEventListener('click',()=>{
    display.innerHTML=" ";
    valueA=null;
    valueB=null;
    operator=null;
    result = null;
})

numberButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        display.innerHTML=" ";
        display.innerHTML+=button.textContent;
    })
})

operatorButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        valueA=parseFloat(display.textContent);
        display.innerHTML = button.textContent;
        operator = display.textContent;
    })
})

 
equalButton.addEventListener('click',()=>{
    valueB = parseFloat(display.textContent);
    result = operate(valueA,valueB,operator);
    display.innerHTML = result;
    valueA = result;
    valueB=null;
    operator=null;
    
    
});

function operate(a, b, op) {
    switch (op) {
        case "+":
            
            return add(a, b);
        case "-":
            return substract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "Error";
    }
}


