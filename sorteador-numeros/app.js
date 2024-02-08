let quantidade;
let deNum;
let ateNum;

function InicioGame() {

    document.getElementById("btn-reiniciar").removeAttribute("disabled")
    document.getElementById("btn-sortear").removeAttribute("disabled")

}

//Busca a quantidade que o usuário deseja no input definido por id no parâmetro
function Quantidade(){
    valor = document.querySelector("#quantidade");
    quantidade = (valor.value);
    return quantidade;
}

function DeNum() {
    valor = document.querySelector("#de");
    deNum = (valor.value);
}

function AteNum(){
    valor = document.querySelector("#ate");
    ateNum = (valor.value);
    return ateNum;
}

function Sortear() {
    let numA 

    Quantidade();
    DeNum();
    AteNum();

    for (i = 0; i < quantidade; i++) {
    numA = (Math.random() * (ateNum - deNum)) + 1;
    console.log(numA);
    }

}

//Função para alterar HTML com os números sorteados
function InnerHTML() {
    document.InnerHTML("#resultado", "teste")
}

InicioGame();