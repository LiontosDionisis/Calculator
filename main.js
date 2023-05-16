let screen = document.querySelector(".screen");
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equals");
let float = document.querySelector(".float");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let firstNumber= "";
let secondNumber = "";
let operator = "+";


function add(a,b){
    return a+b;
}


function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}


clear.addEventListener("click", function(){
    screen.textContent = "";
})

function operate(operator , firstNumber , secondNumber){
    if(operator == "+"){
        add(firstNumber,secondNumber)
    }else if(operator == "-"){
        subtract(firstNumber , secondNumber)
    }else if (operator == "x"){
        multiply(firstNumber , secondNumber)
    }else if (operator == "/"){
        divide(firstNumber,secondNumber)
    }
}

