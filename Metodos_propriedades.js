class Cliente {
//  No constructor são colocados todos os parâmetros que ser]ao usados na classe:
    constructor(nome, email, cpf, saldo) {
        this.nome = nome,
        this.email = email,
        this.cpf = cpf, 
        this.saldo = saldo
    }

//  Além dos parâmetros são colocados, também, os métodos de cada classe
    depositar (valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

//                    O "EXTANDS" é usado para criar uma classe a partir de uma pré-existente:
class ClientePoupanca extends Cliente {
//  No constuctor são colocados os parâmetros usados na classe
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
//      o comando "SUPER" é usado para colocar todos os parâmetros que serão herdados da classe usada no "EXTAND"
        super(nome, email, cpf, saldo)
//      além dos parâmetros usados da classe anterior, são colocados os novos aqui também:
        this.saldoPoupanca = saldoPoupanca    
    }
//  Além dos parâmetros, são colocados os métodos da classe:
    depositarPoupanca (valor) {
        this.saldoPoupanca += valor
    }
}

const Lucas = new ClientePoupanca ("Lucas", "lucas@email.com", "2154873246", 800, 60);

console.log(Lucas)

Lucas.depositarPoupanca(40);

console.log(Lucas);
