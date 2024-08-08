let displayValue = "0";

let storedNumber1 = 0;
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
const resultBtn = document.querySelector("#resultBtn").addEventListener("click", clearDisplay);


function add(number1, number2)
{
    return number1 + number2
}

function subtract(number1, number2)
{
    return number1 - number2
}

function multiply(number1, number2)
{
    return number1 * number2
}

function divide(number1, number2)
{
    return number1 / number2
}

function operate()
{
    let result = 0;
    switch (operator) {
        case "add":
            result = add(number1, number2);
            break;
        case "subtract":
            result = subtract(number1, number2);
            break;
        case "multiply":
            result = multiply(number1, number2);
            break;
        case "divide":
            result = divide(number1, number2);
            break;
        default:
            break;
    }
    return result;
}

function numberButton(number){
    if(displayValue == 0)
    {
        displayValue = "";
    }
    displayValue += number;
    result.value = displayValue;
}

function clearDisplay(){
    displayValue = "0";
    result.value = displayValue;
}