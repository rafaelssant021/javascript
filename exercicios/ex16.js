function classificarNumero(numero){
    if (numero > 0){
        return "positivo";
    } else if (numero < 0){
        return "negativo";
    } else {
        return "zero";
    }
}

classificarNumero(8)
classificarNumero(-4)
classificarNumero(0)