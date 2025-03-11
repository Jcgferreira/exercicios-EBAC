const carroDoJao = {
    marca: 'Ford',
    modelo: 'Fiesta',
    color: 'Azul',
    anoModelo: 2019,
    anoFabricacao: 2018,
    acelerar: function() {
        console.log('Vrum Vrum');
    }
}

const carroDaMari = {
    marca: 'Ford',
    modelo: 'KA',
    color: 'Vermelho',
    anoModelo: 2019,
    anoFabricacao: 2018,
    acelerar: function() {
        console.log('Vrum Vrum');
    }
}

function Carro(marca, modelo, color, anoModelo, anoFabricacao) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log('Vrum Vrum');
    }
}

const carroDoJao2 = new Carro('Ford', 'Fiesta', 'Azul', 2019, 2018);
const carroDaMari2 = new Carro('Ford', 'KA', 'Vermelho', 2019, 2018);

console.log(carroDoJao2);
console.log(carroDaMari2);

const nome = 'Jose';
const idade = 20
const maiorDeIdade = true;
const escolaridade = ['Ensino Médio', 'Ensino Superior'];

const pessoa = {
    nome: nome,
    idade: idade,
    maiorDeIdade: maiorDeIdade,
    escolaridade: escolaridade,
}

console.log(pessoa.nome);
console.log(pessoa['nome']);

function exibeAtributos(atributos) {
    console.log(atributos.nome);
}

exibeAtributos(pessoa);