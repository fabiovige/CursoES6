import { somaTeste } from './funcoes';

console.log(somaTeste(1,4));

/** classes */
class List {

    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Fabio Vige';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    minhaLista.add('novo todos');
};

minhaLista.mostraUsuario();


class Matematica {
    static soma(a, b) {
        return a + b;
    }
}


console.log(Matematica.soma(1, 2));


/** Const & let */
const a = 1;


const usuario = { nome: 'Gustavo' };
usuario.nome = 'Fabio';
console.log(usuario.nome);

function teste(x) {
    let y = 2;
    if (x > 5) {
        let y = 4;
        console.log(x, y);
    }
}

teste(10);

/** Operações em Array */

const arr = [1, 3, 4, 5, 8, 9];

// map
const newArr = arr.map(function(item){
    return item * 2;
});
console.log(newArr);

// reduce
const sum = arr.reduce(function(total, next){
    return total + next;
});
console.log(sum);

// filter
const filter = arr.filter(function(item){
    return item % 2 === 0;
});
console.log(filter);

// find
const find = arr.find(function(item){
    return item === 4;
});
console.log(find);

/** Arrow functions */
const newArr2 = arr.map(item =>  item * 4);
console.log(newArr2);


const teste2 = () => ({nome: 'Fabio'});
console.log(teste2());

/** Valores padrão */
const soma = (a=1, b=3) => a + b;

console.log(soma(3));
console.log(soma());

/** Desestruturação */
const cliente = {
    nome: 'Fabio',
    idade: 44,
    endereco: {
        logradouro: 'Rua Ipiranga',
        cidade: 'Barueri',
        uf: 'SP'
    }
}

console.log(cliente);

const { nome, idade, endereco: { cidade }} = cliente;

console.log(nome, idade, cidade);


function mostraCidade({endereco: {cidade}}) {
    console.log(cidade);
}

mostraCidade(cliente);


/** Operadores rest/spread */

// REST = pega o resto das propriedades

const usuario2 = {
    produto: 'teclado mecanico',
    preco: 44,
    destino: 'Barueri'
}

const {destino, ...resto} = usuario2;
console.log(destino, resto);

const estoque = [1,2,3,4,5,6,7,8];

const [b, ...c] = estoque;
console.log(b,c);

function multiplica(...params) {
    return params.reduce((total, next) => total * next);
}

function multiplica2(a,b,...params) {
    return a * b;
}

console.log(multiplica(2,4,6,8));
console.log(multiplica2(2,4,6,8));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const produto1 = {
    nome: 'teclado',
    valor: 50,
    estoque: 100
};

const produto2 = { ...produto1, estoque: 98};

console.log(produto2);


/** Templates literals */

console.log(`Hoje o produto em promoção é ${produto2.nome} e o estoque esta em ${produto2.estoque}`);

/** Object Short Syntax */

const produto4 = 'notebook'
const preco4 = 1500;

const novoProduto = {
    produto4,
    preco4,
    estoque: 27
};

console.log(novoProduto);


