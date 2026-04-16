function verificarAprovacao(n1,n2,n3){
    const media = (n1 + n2 + n3) / 3;
    return media >= 7 ? 'aprovado' : 'reprovado';
}

console.log(verificarAprovacao(8,8,8));