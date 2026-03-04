const {gets, print} = require("./ex-auxiliar");

const valorSalarioBruto = gets();
const valorAddBeneficio = gets();

function calcularPorcentagem(valor, percentual){
    return valor * (percentual /100);
}

function pegarAliquota(salario){
    if (salario >= 0 && salario <= 1100){
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500){
        return 10;
    } else {
        return 15;
    }
}
const aliquotaImposto = pegarAliquota(valorSalarioBruto)

const valorImposto = calcularPorcentagem(valorSalarioBruto, aliquotaImposto)

const valorATranferir = valorSalarioBruto - valorImposto + valorAddBeneficio;

print(valorATranferir);