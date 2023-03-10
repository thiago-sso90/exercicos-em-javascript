//17. Escrever um algoritmo que lê 2 vetores X(10) e Y(10) . Crie, a seguir, um vetor Z que seja
//a) a diferença entre X e Y;
//b) a soma entre X e Y;
//c) o produto entre X e Y;
//Escreva o vetor Z a cada cálculo.
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let y = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let z = []

for (i = 0; i < x.length; i++) {
    z[i] = y[i] - x[i]
}
console.log("o resultado de z na subtração:", z)

for (i = 0; i < x.length; i++) {
    z[i] = x[i] + y[i]
}
console.log("o resultado de z na adição", z)
for (i = 0; i < x.length; i++) {
    z[i] = x[i] * y[i]
}
console.log("o resultado de z na multiplicação", z)