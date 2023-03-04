//3. Escreva um algoritmo que leia dois vetores de 10 posições e faça a multiplicação dos elementos de mesmo índice,
//colocando o resultado em um terceiro vetor. Mostre o vetor resultante.

let a=[5,6,7,9]
let b=[1,2,3,4]
let c=[]
for(let i=0; i < a.length; i++){

c[i]= a[i] * b[i];
}
console.log(c)
