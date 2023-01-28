/* const arrayString = ["banana", "mamão", "amora"];
const arrayNumber = [7, 2 , 4];
const arraySortido = ["banana", 12, true]; 
const arrayNum = [20];
const arrayvazio = [];

/* console.log(arrayString.length);
console.log(arrayString);

const nome = "Ruan";

/* console.log(`Size: ${nome.length}`);
console.log(`Position 2: ${nome[1]}`);

//posição de cada elemento
console.log(arrayString[3]) //Não tem elemento = undefined

console.log(arraySortido.includes(12));
console.log(arraySortido.includes("banana"));
console.log(arraySortido.includes("maçã"));
console.log(arraySortido.includes(false));

console.log(arrayNum);
console.log(arrayNum[0]);
console.log(arrayNum.length);

console.log(arrayvazio);
console.log(arrayvazio.length);

/**************** 

const copiaArrayString = arrayString.slice();

console.log(`Original: ${arrayString}`);
console.log(`Cópia: ${copiaArrayString}`);

copiaArrayString.push("novaString");
console.log(`Original: ${arrayString}`);
console.log(`Cópia: ${copiaArrayString}`);
copiaArrayString.splice(0,1);
console.log(copiaArrayString);

*/

const numbers = [2, 10, 14, 17, 26, 35];
const numbersCopy = numbers.slice();

numbersCopy.pop();
numbersCopy.push(6);
numbersCopy.splice(2, 1);

console.log(`Original: ${numbers}`);
console.log(`Cópia: ${numbersCopy}`);