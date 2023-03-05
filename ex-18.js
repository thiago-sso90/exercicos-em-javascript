//18. Escrever um algoritmo que lê um vetor K(15). Crie, a seguir, um vetor P, que contenha todos os números primos de
//K. Escreva o vetor P.

let list4 = [];
let listP = [];
let numPrimo = 0;
for (let i = 0; i < 20; i++) {
   list4.push(i);
}
let numDivisores = 0;

for (numPrimo = 0; numPrimo <= list4.length; numPrimo++) {

   for (let i = 1; i <= numPrimo; i++) {

       if (numPrimo % i == 0) {

           numDivisores++;
       }
   }
   if (numDivisores == 2) {

       listP.push(numPrimo);
   }
   numDivisores = 0;
}
console.log(listP);

