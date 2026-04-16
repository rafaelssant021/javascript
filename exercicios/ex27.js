function iddMaiorEMenor(lista){
    if (lista.length ===0){
        console.log('lista vazia');
        return;
    }

    let maiorElemento = lista[0];
    let menorElemento = lista[0];

    for (let i = 0; i <  lista.length; i += 1) {
        if(lista[i] < menorElemento){
            menorElemento = lista[i];
        }
        if(lista[i] > maiorElemento){
            maiorElemento = lista[i];
        }
    }

    console.log(`O menor elemento da lista é: ${menorElemento}`);
    console.log(`O maior elemento da lista é: ${maiorElemento}`);
}

iddMaiorEMenor([56, 23, 67, 2, 50, 37, 95.5,12, 95, 52.1, 78, 44.4]);