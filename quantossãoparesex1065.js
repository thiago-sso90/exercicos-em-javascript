const numeros=[]
let cont=0
let posi=1
const input = require("prompt-sync")({sigint:true})
for(i=0;i<6;i++){
const numero=parseInt(input("digite um numero: "))
if(numero%2==0){
    cont++
}
}
console.log("a quantidade de pares são: ",cont)
