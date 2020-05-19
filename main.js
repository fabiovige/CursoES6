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

