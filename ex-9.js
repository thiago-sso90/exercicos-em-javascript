//9.Escreva um algoritmo que leia um vetor de 100 posições e mostre-o ordenado em ordem crescente

let vetor = [10,20,5,6,7,8,2,3,4,9,12,13,15,17,19,1,18,11,14,16];

function sortVetor(vetor) {
    return vetor.sort((a, b) => a - b);
   
  }
  
  
  console.log(vetor);
  console.log(sortVetor(vetor));
 