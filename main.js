document.addEventListener("DOMContentLoaded" , function(){
    let screen = document.querySelector(".screen");
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equals");
    let float = document.querySelector(".float");
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");
})
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

let a;
let b;
let operator = "";
let screen = document.querySelector(".screen");
let clear = document.querySelector(".clear");

