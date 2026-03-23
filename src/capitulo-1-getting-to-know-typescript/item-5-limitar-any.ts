let age: number;
age = '12' as any; // ❌ Peligro: Silencias al compilador [cite: 607]

age += 1; 

console.log(age)
// En tiempo de ejecución, age será "121" (un string), no 13 [cite: 615]
// ¡TypeScript no te avisará porque usaste 'any'! [cite: 614]