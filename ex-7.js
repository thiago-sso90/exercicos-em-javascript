//7. Escreva um algoritmo que leia dois vetores de 10 posições e faça a multiplicação dos elementos de mesmo índice,
//colocando o resultado em um terceiro vetor. Mostre o vetor resultante.

let a = [1,2,3,4,5,6,7,8,9,10]
let b = [11,12,13,14,15,16,17,18,19,20]
let c = []

for(let i = 0; i < a.length; i++){
    c[i] = a[i] * b[i]

}

console.log('a multiplicação de a e b é:',c);