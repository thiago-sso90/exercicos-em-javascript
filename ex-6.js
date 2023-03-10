//Faça um algoritmo que leia dois vetores: F[20] e G[20]. Calcule e mostre, a seguir, o produto dos valores de F por G.
let a=[2,3,4,5]
let b=[6,7,8,9]
let c=[]
for( let i = 0; i < a.length; i++){
    c[i] = a[i] * b[i]
}

console.log("o resultado é: ",c)