function gerarTabuada(num){
    console.log(
        `${num * 1} - ${num * 2} - ${num * 3} - ${num * 4} - ${num * 5} - ${num * 6} - ${num * 7} - ${num * 8} - ${num * 9} - ${num * 10}`
    );
}

let numeroInicial = 1;

while(numeroInicial <= 10) {
    gerarTabuada(numeroInicial)
    numeroInicial++;
}