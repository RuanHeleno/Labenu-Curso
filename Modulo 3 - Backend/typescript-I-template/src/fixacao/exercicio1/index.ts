/* 
A função abaixo recebe como parâmetro os tamanhos dos três lados de um triângulo: a, b, c. 
Com essa informação, a função retorna se o triângulo é equilátero, isósceles ou escaleno.
Refatore a função para o Typescript.
*/

//DESCOMENTE ESTA FUNÇÃO
function checaTriangulo(a: number, b: number, c: number) {
  let result;

  if ((a !== b) && (b !== c) && (a !== c)) {
    result = 'Escaleno'
  } else if (a === b && b === c) {
    result = 'Equilátero'
  } else {
    result = 'Isósceles'
  }

  return result;
}

console.log(checaTriangulo(7, 7, 7))
console.log(checaTriangulo(7, 7, 9))
console.log(checaTriangulo(7, 8, 9))