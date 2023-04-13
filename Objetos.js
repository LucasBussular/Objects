// São estruturas de dados que permitem armazenar muitas infos organizadas em um só lugar e funcionam como uma array, portanto, operações
// de modificação de array podem ser aplicadas em um objeto
// O objeto é composto por:

const cliente = {
    nome: "André",
//  chaves ("nome") e seu valor atribuído ("André")
    idade: 36,
    cpf: "77777777777",
    email: "andre@email.com"
}

// Para acessar objetos (ou printar), usa-se a notação Objeto.chave:

console.log(cliente.nome); //André

// É possível, ainda, acessar alguns elementos de uma string dentro de uma chave:

console.log(cliente.cpf.substring(0,3));

// Além disso, é possível acessar chaves usando a notação de colchetes:

const chaves = ["nome", "idade", "cpf", "email"]

console.log(cliente[chaves[1]]); //acessa o item com índice 1 dentro do array chaves

// Para adicionar chaves, basta Objeto.chave = valor:

cliente.dependente = "Flávia", // chave "dependente" foi adicionado dentro do objeto com o valor atribuído

console.log(cliente)

// Para deletar alguma propriedade, usa-se o operador "delete":
// O retorno do operador delete é um booleano. No entanto, ao tentar remover uma propriedade inexistente, vai retornar "true"

delete cliente.dependente

console.log(cliente.dependente) // undefined

// É possível ter arrays como valores de chave:

cliente.telefone = ["88888888", "999999999"];

cliente.telefone.forEach( fone => {console.log(fone)});
console.log(cliente);

// cliente = {
//  nome: 'André',
//  idade: 26,
//  cpf: '77777777777',
//  email: 'andre@email.com',
//  telefone: [ '88888888', '999999999' ] }

// É possível adicionar um objeto dentro de um objeto, para o caso da chave conter informações mais complexas:

cliente.dependentes = [{
    nome: "Flávia",
    parentesco: "filha",
    dataNasc: "28/04/2008"
}]

console.log(cliente);

// Para alterar algum dado dentro deste objeto:

cliente.dependentes[0].nome = "Flávia Rodrigues"

console.log(cliente)

// Para adicionar um elemento em um objeto dentro de um objeto, pode-e usar o comando .push:

cliente.dependentes.push ({
    nome: "Caio André",
    parentesco: "filho",
    dataNasc: "21/05/2005"
})

console.log(cliente)

// Para selecionar um elemento de dentro do objeto, usa-se o filter:

const IrmaoMaisNovo = (cliente.dependentes.filter(dependente => dependente.dataNasc==="21/05/2005"));

console.log(IrmaoMaisNovo.nome);

// É possível colocar uma função dentro de um objeto:

cliente.saldo = 100;
cliente.deposito = function (valor) {
    this.saldo += valor;
}
cliente.deposito(50)
console.log(cliente)

// Para percorrer um objeto (considerando que é uma lista não ordenada, portanto índice não funciona), usa-se o método for-in:

let relatorio = ""

for (let info in cliente) {
//       info é o nome dado ao parâmetro correspondente a cada chave do objeto ("nome", "idade" etc)
    if (typeof cliente[info]==="object" || typeof cliente[info]==="function") {
//                                      operador para "OU" (atalho: shift + \)        
        continue
//      operador para continuar a função sem nenhuma ação 
        } else {
            relatorio += `
            ${info} ==> ${cliente[info]}
            `
//          para pular linha basta pular a linha sem nenhum marcador (br ou algo do tipo)
        }
}

console.log(relatorio)

// Métodos de Objetos:
// Objetc.keys = este método percorre um objeto e retorna para uma constante todas as chaves pertencentes a ele:

function OferecerSeguro (obj) {
    const propsClientes = Object.keys(obj)
    if (propsClientes.includes("dependentes")) {
        console.log(`Olá ${obj.nome}, temos uma oferta de seguro de vida para você!`)
    }
}
 OferecerSeguro(cliente)

// Outro método de percorrer objetos é o Object.value. Ele retorna uma lista com todos o valores dentro do objeto:

console.log(Object.values(cliente)) // [
                                    //     'André',
                                    //     36,
                                    //     '77777777777',
                                    //     'andre@email.com',
                                    //     [ '88888888', '999999999' ],
                                    //     [
                                    //     { nome: 'Flávia', parentesco: 'filha', dataNasc: '28/04/2008' 
                                    // },
                                    //     { nome: 'Caio André', parentesco: 'filho', dataNasc: '21/05/2005' },
                                    //     nome: 'Flávia Rodrigues'
                                    //     ],
                                    //     150,
                                    //     [Function (anonymous)]
                                    // ]

// Ainda temos o comando object.entries. Nele é retornado uma sequência de arrays onde o elemento com índice 0 corresponde
// à chave e os elementos do índice 1 a diante são os valores atribuídos às chaves.

console. log(Object.entries(cliente)); //[
                                    //     [ 'nome', 'André' ],
                                    //     [ 'idade', 36 ],
                                    //     [ 'cpf', '77777777777' ],
                                    //     [ 'email', 'andre@email.com' ],
                                    //     [ 'telefone', [ '88888888', '999999999' ] ],
                                    //     [ 'dependentes', [ [Object], [Object], nome: 'Flávia Rodrigues' 
                                    // ] ],
                                    //     [ 'saldo', 150 ],
                                    //     [ 'deposito', [Function (anonymous)] ]
                                    // ]

// Operador de espalhamento (spread operator: ...):
// criando uma lista com clientes:

const clientes = [
    {
    nome: 'André',
    idade: 36,
    cpf: '77777777777',
    email: 'andre@email.com',
    telefone: [ '88888888', '999999999' ],
    dependentes: [
        {
        nome: 'Flávia Rodrigues',
        parentesco: 'filha',
        dataNasc: '28/04/2008'
        },
        { nome: 'Caio André',
        parentesco: 'filho', 
        dataNasc: '21/05/2005' }
    ],
    saldo: 150,        
    },
    {
    nome: "Cecília",
    idade: 27,
    cpf: "888888888881",
    email: "cecilia@email.com",
    telefone: ["555555555", "444444444"],
    dependentes: [{
        nome: "Jorge",
        parentesco: "irmão",
        dataNasc: "05/09/1997"
    }]
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.table(listaDependentes);

// Para transformar um objeto JavaScript em uma string JSON:

const clienteJSON = JSON.stringify ({
    nome: "Cecília",
    idade: 27,
    cpf: "888888888881",
    email: "cecilia@email.com",
    telefone: ["555555555", "444444444"],
    dependentes: [{
        nome: "Jorge",
        parentesco: "irmão",
        dataNasc: "05/09/1997"
    }]
})

console.log (clienteJSON) // apresenta o objeto como uma sequência de strings

// Todas as operações que podem ser feitas no array estão armazenadas no JS. Para acessar as operações possíveis:
// array.__proto__ (no navegador)
// A mesma coisa acontece com os objetos. Para acessar as operações possíveis: obj.__proto__ (no navegador)

//Criando uma função para clientes genéricos:

function clienteGenerico (nome, cpf, email, saldo) {
    this.nome = nome,
    this.cpf = cpf,
    this.email = email,
    this.saldo = saldo,
    this.depositar = function (valor) {
        saldo += valor
    }
}

const guilherme = new clienteGenerico ("Guilherme Rocha", "66666666666", "guilherme@email.com", 540)
//                new é uma palavra reservada usada para criar uma nova constante a partir de uma função ja feita
console.log(guilherme)

function clientePoupanca (nome, cpf, email, saldo, saldoPoup) {
    clienteGenerico.call(this, nome, cpf, email, saldo)
//                  chama a função clienteGenerico e, dentro dos parâmetros, dizemos quais parâmetros queremos herdar
    this.saldoPoup = saldoPoup
}

const Marcos = new clientePoupanca ("Marcos", "11111111111", "marcos@email.com", 780, 3500);
// Cria um novo objeto ClientePoupanca com as informações relativas ao Marcos, herdando informações do clienteGenerico
console.log(Marcos);

// Objetos criados de forma literal (const obj = {a: 1}) utilizam Object.prototype como protótipo; 
// objetos criados com new a partir de um construtor herdam a propriedade prototype de sua função construtora; 
// Objetos criados com Object.create()recebem como prototype o primeiro parâmetro da função - que pode ser null.

console.log(Object.getOwnPropertyDescriptor(cliente, "nome")) //  value: 'André',
                                                              // writable: true, 
                                                              // enumerable: true,
                                                              // configurable: true

// Para adicionar propriedades no objeto protótipo, basta: 

clientePoupanca.prototype.saque = function (valor) {
    this.saldoPoup = this.saldoPoup - valor;
}

const joao = new clientePoupanca ("João", "11111111111", "marcos@email.com", 780, 3500)
console.log(joao);

// Orientação a Objeto (OO): é um paradigma de programação, uma maneira de se programar.
// sua principal ideia é trazer para o código ideias do "mundo real" 
// Exemplo de criação de classes:

class Cliente01{
//    Sempre começar o nome de uma classe com letras maiúsculas!

//  criação dos parâmetros da classe:

    constructor (nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }


//  criação dos métodos da classe: com classes não precisa escrever a palavra chave "function"

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const felipe = new Cliente01("Felipe", "felipe@email.com", "548765464167", 800)

felipe.exibirSaldo()

console.log(felipe);

// O método "this" representa o objeto que executa a função. Assim, é possível criar uma função fora de qualquer objeto 
// e aplicá-la dentro de um e funcionar, já que o "this" executará a função dentro do contexto pedido.
// É possível manipular os valores de "this" com três métodos:


// CALL(): Esse método permite que uma função seja chamada com parâmetros e valor de "this" específicos:

function imprimeNomeEmail(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
   }
   
   const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
}

// a função é executada passando como parâmetros o objeto e a string específica
imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com


// APPLY(): esse método funciona parecido com o call(), mas ao invés de argumentos separados, recebe um array:

function imprimeNomeEmail2(tipoCliente, agencia){
    console.log(`
      ${tipoCliente} da agência ${agencia}:
      - nome: ${this.nome}, email: ${this.email}
      `)
   }
   
   const cliente11 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente12 = {
    nome: "Fred",
    email: "f@email.com"
   }

// chamando a função imprimeNomeEmail2 com o aplly:

   const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
   const clienteEstudante = ["cliente estudante", "Fortaleza"]
   
   imprimeNomeEmail2.apply(cliente1, clienteEspecial)
   // cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com
   
   imprimeNomeEmail2.apply(cliente2, clienteEstudante)
   // cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com


// BIND(): o método bind() liga a função ao contexto de um objeto:

const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
   }

// se eu chamar essa função fora de um objeto na qual ela foi criado, não vai funcionar:

const personagemGenerico = personagem.apresentar
console.log(personagemGenerico()); // a personagem é undefined

// quando retiramos a função de dentro do contexto no qual ela foi criada, ela perde a referência do "this".
// isso é resolvido com o bind():

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())
//a personagem é Princesa Leia

// Métodos e Propriedades:


