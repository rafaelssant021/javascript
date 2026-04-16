function validarCPF(cpf){
    cpf = cpf.replace(/\D/g, '');

    if(cpf.length !== 11)
        return false;

    if (/^(\d)\1{10}$/.test(cpf))
        return false;

    const digitos = cpf.split('').map(el => +el);

    const calcularDigito = (count) => {
        let soma = 0;
        for (let i = 0; i < count; i++) {
            soma += digitos[i] * ((count + 1) - i);
            
        }
        let resto = (soma * 10) % 11;
        return resto === 10 || resto === 11 ? 0 : resto;
    };

    const dg1 = calcularDigito(9);
    const dg2 = calcularDigito(10);

    return dg1 === digitos[9] && dg2 === digitos[10];
}

console.log(validarCPF('1990356482'));