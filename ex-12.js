//12. Escreva um algoritmo que leia um vetor inteiro de 30 posições e crie um segundo vetor, substituindo os valores
//nulos por 1. Mostre os 2 vetores.

let vet1 = [1,2,3,4,5,6,7,8,9,4,0,0,0,0,0,0,0,0,0,0];
let vet2 = []

for(let i=0; i < 20; i++){
   
}

for(let i=0; i < vet1.length; i++){
    if(vet1[i] == 0){
        vet2[i] = 1
        
    }else{
        vet2[i] = vet1[i]
    }

}
console.log(vet1)
console.log(vet2);