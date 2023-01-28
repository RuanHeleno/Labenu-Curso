let question = prompt("Dou you want to eat more coxinhas? (S or N)").toLowerCase();
let value = 0;

while(question === "s") {
    value += 2.5;
    question = prompt("Dou you want to eat more coxinhas? (S or N)").toLowerCase();
}

console.log(`R$: ${value.toFixed(2)}`);