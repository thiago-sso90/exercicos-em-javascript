//1. Elaborar um algoritmo que lê um conjunto de 30 valores e os coloca em 2 vetores conforme estes valores forem pares
//ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura escrever
//o conteúdo dos dois vetores. Cada vetor pode ser preenchido tantas vezes quantas for necessário
a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
b=[]
c=[]
for(i=0;i<30;i++){
    if(a[i]%2==0){
        b.push(a[i])
    }
    else{
        c.push(a[i])
    }
}
console.log(b)
console.log(c)