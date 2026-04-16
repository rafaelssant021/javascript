function checarVel (vel){
    const velLimit = 60;
    const kmPorPontos = 5;

    if (vel <= velLimit + kmPorPontos)
        console.log(vel);
    
    else {
        let pontos = Math.floor((vel - velLimit) / kmPorPontos - 0.1);
        if(pontos > 5)
            console.log('carteira suspensa');
        else
            console.log('pontos: ', pontos)
    }
}

checarVel(66);