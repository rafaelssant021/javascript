class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor( marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    calcularGastodePercurso(distancia, precoCombustivel){
        return distancia * this.gastoMedioKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1/12)
console.log(uno.calcularGastodePercurso(70, 5));