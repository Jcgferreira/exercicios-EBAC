// Classe base
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        console.log(`${this.nome} está emitindo um som.`);
    }
}

// Classe herdeira 1
class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    emitirSom() {
        console.log(`${this.nome} está latindo.`);
    }
}

// Classe herdeira 2
class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    emitirSom() {
        console.log(`${this.nome} está miando.`);
    }
}

// Instâncias de objetos
const cachorro1 = new Cachorro('Rex', 5, 'Labrador');
const gato1 = new Gato('Mimi', 3, 'Branco');
const animal1 = new Animal('Animal Genérico', 2);

cachorro1.emitirSom(); // Rex está latindo.
gato1.emitirSom(); // Mimi está miando.
animal1.emitirSom(); // Animal Genérico está emitindo um som.