const {gets, print} = require('./ex-auxiliar');

const n = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++){
    const numero = gets();
    if (numero % 2 === 0){
        if (numero > maiorNumeroPar){
            maiorNumeroPar = numero;
        }
    } else {
        if (menorNumeroImpar === 0){
            menorNumeroImpar = numero;
        } else if (numero < menorNumeroImpar){
            menorNumeroImpar = numero;
        }
    }
}

print('maior numero par é ' + maiorNumeroPar);
print('menor numero impar é ' + menorNumeroImpar);