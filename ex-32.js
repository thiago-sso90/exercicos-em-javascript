//32. Elaborar um algoritmo que lê uma matriz M(6,6) e um valor A e multiplica a matriz M pelo valor A e coloca os
//valores da matriz multiplicados por A em um vetor de V(36) e escreve no final o vetor V
let m = [[1,2,3,4,5,6],
         [7,8,9,10,11,12],
         [13,14,15,16,17,18],
        [19,20,21,22,23,24],
         [25,26,27,28,29,30],
         [31,32,33,34,35,36]
        ];
const a=10
let mat = new Array(36);

for(let i=0 ; i < m.length; i++){
        for(let j=0; j < m[i].length; j++){
        
          mat[i*6+j] = m[i][j]*a
        }
      }
      
       
          console.log("a multiplicação das matrizes por A são: " ,mat)
           
        
        


        
        
      


    