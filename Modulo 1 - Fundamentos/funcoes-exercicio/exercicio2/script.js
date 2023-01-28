const sum = (a, b) => {
    return `The sum of ${a} + ${b} is equal to ${a + b}`;
}

console.log(sum(2, 3));

const greaterThanOrEqual = (a, b) => { 
    if(a >= b) return `The number ${a} is greater than or equal to ${b}`
    else `The number ${a} is less than ${b}`
}

console.log(greaterThanOrEqual(3, 2));

const pair = (a) => {
    if(a % 2 === 0) return `Number ${a} is pair`
    else return `Number ${a} is not pair`
}

console.log(pair(3));

const handleString = (text) => {
    console.log(`The length of ${text} is ${text.length}`);
    console.log(`Uppercase version of ${text} is ${text.toUpperCase()}`);
}

handleString("teste");