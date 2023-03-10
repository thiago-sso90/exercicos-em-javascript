//. Faça um algoritmo que leia um vetor K[30]. Troque a seguir, todos os elementos de ordem ímpar do vetor com os
//elementos de ordem par imediatamente posteriores.

a=[1,12,13,18,20,72,80,90,101,103,41,50]
b=[]
c=[]
for(i=0; i < 12; i++){
    if(a[i] % 2 == 0){
        b.push(a[i])
    }
    else{
        c.push(a[i])
    }
}
//console.log(c + b)
console.log(c)
console.log(b);
