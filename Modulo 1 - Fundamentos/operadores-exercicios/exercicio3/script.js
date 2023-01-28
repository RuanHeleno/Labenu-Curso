// ==========================================================PARTE 1===================================================
const a = 5 > 20 && 5 < 2;
const b = 5 === 5 || 5 === "5";
const c = !(20 > 50);
const d = !(20 > 50 || 50 > 60);

console.log(`
A: ${a}
B: ${b}
C: ${c}
D: ${d}
`);

// ========================================================PARTE 2=====================================================
const salary = 2000;
const auxiliaryMoney = 45.50 * 2;
const comission = 0.1;
const januarySales = 5784.5;
const februarySales = 3418.41;
const marchSales = 4124.1;
const aprilSales = 1874;
const maiSales = 7000;
const juneSales = 9450;
const INSS = 0.05;

const januaryTotal = (januarySales * comission) - (salary * INSS);
const februaryTotal = (februarySales * comission) - (salary * INSS);
const marchTotal = (marchSales * comission) - (salary * INSS);
const aprilTotal = (aprilSales * comission) - (salary * INSS);
const maiTotal = (maiSales * comission) - (salary * INSS);
const juneTotal = (juneSales * comission) - (salary * INSS);
const semesterTotal = januaryTotal + februaryTotal + marchTotal + aprilTotal + maiTotal + juneTotal;

console.log(`Fixed salary + auxiliary: R$${(salary + auxiliaryMoney).toFixed(2)}`);
console.log(`January comission: R$${(januarySales * comission).toFixed(2)}`);
console.log(`January INSS: R$${(januarySales * INSS).toFixed(2)}`);

console.log(`
January Total: R$${(salary + auxiliaryMoney + januaryTotal).toFixed(2)}
February Total: R$${(salary + auxiliaryMoney + februaryTotal).toFixed(2)}
March Total: R$${(salary + auxiliaryMoney + marchTotal).toFixed(2)}
April Total: R$${(salary + auxiliaryMoney + aprilTotal).toFixed(2)}
May Total: R$${(salary + auxiliaryMoney + maiTotal).toFixed(2)}
June Total: R$${(salary + auxiliaryMoney + juneTotal).toFixed(2)}
`)

console.log(`Total Salary (six months): R$${(semesterTotal).toFixed(2)}`);
console.log(`Media of Salary (six months): R$${(semesterTotal / 6).toFixed(2)}`);