//8. Escreva um algoritmo que leia e mostre um vetor de 20 números. A seguir, conte quantos valores pares existem no
//vetor.
const numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let cont=0
let posi=1
//const input = require("prompt-sync")({sigint:true})
for(i=0;i<20;i++){
//const numero=parseInt(input("digite um numero: "))
if(numeros %2 == 0){
    cont++
}
}
console.log("a quantidade de pares são: ",cont)
