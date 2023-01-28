//const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const array1 = [10, 20, 30, 40, 50];
const array2 = ["Ruan", "Heleno", "Maria", "Aparecida"]
const array3 = [20, 30, "Ruan", "Maria", true, false]

console.log(`Size of the array 1: ${array1.length}
Size of the array 2: ${array2.length}
Size of the array 3: ${array3.length}
`);

console.log(`First item of the array 1: ${array1[0]}
Second item of the array 2: ${array2[1]}
Third item of the array 3: ${array3[2]}
`);

console.log(`The value 20 it's included in Array 1 and Array 3? ${array1.includes(20) && array3.includes(20)}`);
console.log(`The value 20 it's included in Array 1 and Array 3? ${array1.includes(50) && array3.includes(50)}`);