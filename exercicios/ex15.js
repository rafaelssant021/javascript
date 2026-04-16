function Pessoa(nome,idade){
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function() {
    console.log(`meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
}

const pessoa1 = new Pessoa('Rafael', 21)

pessoa1.falar();