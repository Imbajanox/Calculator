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

function operate(number1, number2, operator)
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