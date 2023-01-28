const numbers = [10, 20, 30, 40, 50];
const numbersCopy = numbers.slice();

const strings = ["Ruan", "Heleno", "Maria", "Aparecida"];
const stringsCopy = strings.slice();

const mixed = [1, 2, 3, 4, "Ruan", "Heleno"];
const mixedCopy = mixed.slice();

numbersCopy.unshift(5);
console.log(`Original Array: ${numbers}
Modified Array: ${numbersCopy}
`)

stringsCopy.pop();
console.log(`Original Array: ${strings}
Modified Array: ${stringsCopy}
`)

mixedCopy.splice(1, 1);
console.log(`Original Array: ${mixed}
Modified Array: ${mixedCopy}
`)