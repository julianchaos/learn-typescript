function teste(my_var: string) {
    return "O valor da variável é: " + my_var;
}

let my_var = "1234";
//let my_var = 1234; // Gera erro na execução da função teste(my_var). A variável esperada deve ser do tipo string
document.body.innerHTML = teste(my_var);
