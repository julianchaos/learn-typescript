interface Person {
    first_name: string;
    last_name: String;
}

function greeter(person: Person) {
    return "Hello, " + person.first_name + " " + person.last_name;
}

let user = {first_name: "Julian", last_name: "Andrade"};
// let uset = { first_name: "Julian", surname: "Andrade" };
document.body.innerHTML = greeter(user);