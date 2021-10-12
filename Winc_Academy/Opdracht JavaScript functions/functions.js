// Function declaration
function numberSquare1 (number1, number2) {
    const squareNumber1 = number1 * number1;
    const squareNumber2 = number2 * number2;
    const sum1 = (squareNumber1 + squareNumber2) * (squareNumber1 + squareNumber2);
    return sum1;
}

//Function expression
const numberSquare2 = function(number1, number2) {
    const squareNumber1 = number1 * number1;
    const squareNumber2 = number2 * number2;
    const sum2 = (squareNumber1 + squareNumber2) * (squareNumber1 + squareNumber2);
    return sum2;
};

//Arrow function
const numberSquare3 = (number1, number2) => {
    const squareNumber1 = number1 * number1;
    const squareNumber2 = number2 * number2;
    const sum1 = (squareNumber1 + squareNumber2) * (squareNumber1 + squareNumber2);
    return sum1;
};

console.log(numberSquare1(2,1));
console.log(numberSquare2(2,1));
console.log(numberSquare3(2,1));
