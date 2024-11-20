let display = document.querySelector('.display');
let numberButtons = document.querySelectorAll('.numberButton');
let operatorButtons = document.querySelectorAll('.operatorButton')
let clearButton = document.querySelector('.clearButton');
let equalButton = document.querySelector('.equalButton');
let a;
let b;
let op;

clearButton.addEventListener('click',()=>{
    display.innerHTML=" ";
})


operatorButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        display.innerHTML=" ";
        display.innerHTML = button.textContent;
    })
})

numberButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        display.innerHTML+=button.textContent;
        getValueA();
    })
})


function getValueA(){
    let valueA = display.textContent;
    console.log(valueA);
    return valueA;
}

function getValueB(){
    let valueB = display.textContent;
    console.log(valueB);
    return valueB;
}


function getOperand(){
    let operand = display.textContent;
    return operand;
}

operatorButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        display.innerHTML=" ";
        let operand = display.innerHTML = button.textContent;
        console.log(operand);
        getOperand();
        getValueB();
    })
}) 

a = getValueA();
 b=getValueB();
 op=getOperand();
 console.log(a)
 console.log(b)
 console.log(op)


function findOperand(a,b,op){
    switch(op){
        case 1: 
            op ="+";
            return add(a,b);
            break;
        case 2:
            op="-";
            return (substract(a,b));
            break;
        case 3:
            op="*";
            return multiply(a,b);
            break;
        case 4:
            op="/";
            return divide(a,b);
            break;
        case 5:
            op="%";
            return reminder(a,b);
            break;
        
        default:
            return a;
    }
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

function reminder(a,b){
    return a%b;
}

equalButton.addEventListener('click',()=>{
    let result = findOperand(a,b,op);
    console.log(result);
})