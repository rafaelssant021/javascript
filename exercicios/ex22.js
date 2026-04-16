function verificarNum(num){
    if (num < 0) return 'negativo';
    if (num > 0) return 'positivo';
    return 'zero';    
}

console.log(verificarNum(10));
console.log(verificarNum(-10));
console.log(verificarNum(0));