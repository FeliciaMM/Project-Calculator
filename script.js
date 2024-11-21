let display = document.querySelector('.display');
let numberButtons = document.querySelectorAll('.numberButton');
let operatorButtons = document.querySelectorAll('.operatorButton')
let clearButton = document.querySelector('.clearButton');
let equalButton = document.querySelector('.equalButton');
let valueA=null;
let valueB=null;
let operator=null;
let result = null;




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
})


numberButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        display.innerHTML+=button.textContent;
    })
})


operatorButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        valueA=parseFloat(display.textContent);
        display.innerHTML=" ";
        operator = display.innerHTML = button.textContent;
    })
})



function operate(a,b,op){
    switch(op){
        case 0: 
            op ="+";
            return add(a,b);        
        case 1:
            op="-";
            return (substract(a,b));
        case 2:
            op="*";
            return multiply(a,b);
        case 3:
            op="/";
            return divide(a,b);      
    
    }
}

equalButton.addEventListener('click',()=>{
    valueB = parseFloat(display.textContent);
    result = operate(valueA,valueB,operator);
    console.log(valueA)
    console.log(valueB)
    console.log(operator)
    display.innerHTML = result;
    console.log(result)

    
});


