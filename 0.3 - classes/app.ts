class Student {
    protected full_name: string;

    // A declaração 'public' nos parâmetros do construtor é um atalho para a criação das propriedades da classe 
    constructor(public first_name: string, public surname: string, public last_name: string) {
        this.full_name = first_name + " " + surname + " " + last_name;
    }
}

interface Person {
    first_name: string;
    last_name: String;
}

//Definindo o parâmetro da função como a interface e abaixo passo a classe Student (que possui a estrutura da atributos compatíveis)
function greeter(person: Person) {
    return "Hello, " + person.first_name + " " + person.last_name;
}

let user = new Student("Julian", "A.", "Azevedo"); //{first_name: "Julian", last_name: "Andrade"};
document.body.innerHTML = greeter(user);