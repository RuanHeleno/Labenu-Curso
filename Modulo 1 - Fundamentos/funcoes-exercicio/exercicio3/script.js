const sum = (a, b) => {
    return `The sum of ${a} and ${b} is ${a + b}`;
}

const subtraction = (a, b) => {
    return `The subtraction of ${a} and ${b} is ${a - b}`;
}

const multiplication = (a, b) => {
    return `The multiplication of ${a} and ${b} is ${a * b}`;
}

const division = (a, b) => {
    return `The division of ${a} and ${b} is ${a / b}`;
}

const number1 = Number(prompt("First number"));
const number2 = Number(prompt("Second number"));

console.log(sum(number1, number2));
console.log(subtraction(number1, number2));
console.log(multiplication(number1, number2));
console.log(division(number1, number2));