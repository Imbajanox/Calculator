let displayValue = "0";

let storedNumber1 = 0;
let enteredFirstNumber = false;
let operationDone = true;
let storedNumber2 = 0;
let storedOperation = "";

const result = document.querySelector(".result-input");

const oneBtn = document.querySelector("#oneBtn").addEventListener("click", function() {numberButton(1);});
const twoBtn = document.querySelector("#twoBtn").addEventListener("click", function() {numberButton(2);});
const threeBtn = document.querySelector("#threeBtn").addEventListener("click", function() {numberButton(3);});
const fourBtn = document.querySelector("#fourBtn").addEventListener("click", function() {numberButton(4);});
const fiveBtn = document.querySelector("#fiveBtn").addEventListener("click", function() {numberButton(5);});
const sixBtn = document.querySelector("#sixBtn").addEventListener("click", function() {numberButton(6);});
const sevenBtn = document.querySelector("#sevenBtn").addEventListener("click", function() {numberButton(7);});
const eightBtn = document.querySelector("#eightBtn").addEventListener("click", function() {numberButton(8);});
const nineBtn = document.querySelector("#nineBtn").addEventListener("click", function() {numberButton(9);});
const zeroBtn = document.querySelector("#zeroBtn").addEventListener("click", function() {numberButton(0);});

const clearBtn = document.querySelector("#clearBtn").addEventListener("click", clearDisplay);
const resultBtn = document.querySelector("#resultBtn").addEventListener("click", operate);

const addBtn = document.querySelector("#addBtn").addEventListener("click", function() {operatorButton("add");});
const subBtn = document.querySelector("#subBtn").addEventListener("click", function() {operatorButton("subtract");});
const multBtn = document.querySelector("#multBtn").addEventListener("click", function() {operatorButton("multiply");});
const divBtn = document.querySelector("#divBtn").addEventListener("click", function() {operatorButton("divide");});


function add(number1, number2)
{
    return +number1 + +number2
}

function subtract(number1, number2)
{
    return +number1 - +number2
}

function multiply(number1, number2)
{
    return +number1 * +number2
}

function divide(number1, number2)
{
    return +number1 / +number2
}

function operate()
{
    let operationResult = 0;
    storedNumber2 = displayValue;
    switch (storedOperation) {
        case "add":
            operationResult = add(storedNumber1, storedNumber2);
            break;
        case "subtract":
            operationResult = subtract(storedNumber1, storedNumber2);
            break;
        case "multiply":
            operationResult = multiply(storedNumber1, storedNumber2);
            break;
        case "divide":
            operationResult = divide(storedNumber1, storedNumber2);
            break;
        default:
            break;
    }
    displayValue = operationResult;
    result.value = displayValue;
    storedNumber1 = operationResult;
    storedNumber2 = 0;
    storedOperation = "";
    operationDone = true;
}

function numberButton(number){
    if(operationDone)
    {
        displayValue = "";
        operationDone = false;
    }
    displayValue += number;
    result.value = displayValue;
}

function clearDisplay(){
    displayValue = "0";
    result.value = displayValue;

    enteredFirstNumber = false;
    operationDone = true;

    storedNumber1 = 0;
    storedNumber2 = 0;
    storedOperation = "";
}

function operatorButton(operator){
    
    storedOperation = operator;

    if(enteredFirstNumber === false)
    {
        storedNumber1 = displayValue;
        enteredFirstNumber = true;

        operationDone = true;
    }
    else if(enteredFirstNumber === true)
    {
        operate();
        storedOperation = operator;
    }

    

    

}