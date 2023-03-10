//. Faça um algoritmo que leia um vetor N[20]. A seguir, encontre o menor elemento do vetor N e a sua posição dentro
//do vetor, mostrando: “O menor elemento de N é”, M, “e sua posição dentro do vetor é:”,P.
let valor=[200,60,4,1,8,6,5,10,11,1,0,15]
let menor //,11,10,5,6,8,1,4,60,200
let posi //0,1,2,3,4,5,6,7,8,9,10

menor=valor[0]

for( let i = 0; i < valor.length; i++){
     if(valor[i] < menor){
        menor=valor[i]
        posi=[i]
      
    
    }
}
console.log("o menor valor é",menor)
console.log(" esta na posição: ",posi)