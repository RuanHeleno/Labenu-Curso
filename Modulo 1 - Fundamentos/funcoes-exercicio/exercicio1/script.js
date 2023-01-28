/* function hello(name) {
    return `Hello, ${name}!`;
}

console.log(hello('Ruan'));

function multiplicationTable() {
    for(let i = 1; i <= 10; i++) {
        console.log(6 * i);
    }
}

multiplicationTable(); */

const hello = (name) => {
  return `Hello, ${name}!`;
};

console.log(hello("Ruan"));

const multiplicationTable = () => {
    for(let i = 1; i <= 10; i++) {
        console.log(`Tabuada de 6x${i}: ${6 * i}`);
    }
}

multiplicationTable();