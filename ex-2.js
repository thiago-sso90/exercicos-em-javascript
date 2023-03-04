//. Faça um algoritmo que leia um vetor N[20]. A seguir, encontre o menor elemento do vetor N e a sua posição dentro
//do vetor, mostrando: “O menor elemento de N é”, M, “e sua posição dentro do vetor é:”,P.
let valor=[200,60,4,1,8,6,5,10,11,1,0,15]
let menor
let posi

menor=valor[0]

for(i=0;i < valor.length; i++){
     if(valor[i] < menor){
        menor=valor[i]
        posi=[i]
      
    
    }
}
console.log("o menor valor é",menor)
console.log(" esta na posição: ",posi)