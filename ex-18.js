//18. Escrever um algoritmo que lê um vetor K(15). Crie, a seguir, um vetor P, que contenha todos os números primos de
//K. Escreva o vetor P.

var k = 15;

function numerosprimos(k){
    
    var numprimos = [];

    for(var i = 0; i < k; i++){
        var divisores = 0;

        for( var b = 0; i < b; b++){
            if(i % i == 0){
                divisores++
            }
           
        }
        
        if(divisores % i == 0){
          numprimos.push(i)
        }
    }
  return numprimos

}

