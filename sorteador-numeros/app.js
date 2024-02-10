let quantidade;
let deNum;
let ateNum;
let numA = [];

function InicioGame() {
    AtivaSorteio();
    InnerHTML("Números sorteados: nenhum até agora");
    numA = [];
    //document.getElementById("#resultado").className.replace("", "texto__paragrafo")
}

InicioGame();

//Busca a quantidade que o usuário deseja no input definido por id no parâmetro
function Quantidade(){
    valor = document.querySelector("#quantidade");
    quantidade = (valor.value);
    return quantidade;
}

//Busca o inicio que o usuário deseja no input definido por id no parâmetro
function DeNum() {
    valor = document.querySelector("#de");
    deNum = (valor.value);
}

//Busca o fim que o usuário deseja no input definido por id no parâmetro
function AteNum(){
    valor = document.querySelector("#ate");
    ateNum = (valor.value);
    return ateNum;
}

//Função para alterar HTML com os números sorteados
function InnerHTML(texto) {

    let query = document.querySelector("#resultado");
    return query.innerHTML = texto;
}

//Sortea os números de acordo com os valores que o usuário deseja
function Sortear() {

    Quantidade();
    DeNum();
    AteNum();

    let num;

    for (i = 0; i < quantidade; i++) {
    num = (Math.random() * (ateNum - deNum)) + 1.5;
    numA.push(parseInt(num));
    }
    InnerHTML(`Números sorteados: ${numA} `);
    AtivaReiniciar();
}

function Reiniciar() {
    InicioGame();
}

function AtivaReiniciar() {
    document.getElementById("btn-reiniciar").removeAttribute("disabled")
    document.getElementById("btn-sortear").setAttribute("disabled", "enabled")
}

function AtivaSorteio() {
        document.getElementById("btn-sortear").removeAttribute("disabled")
        document.getElementById("btn-reiniciar").setAttribute("disabled", "enabled")
        //document.getElementById("btn-reiniciar").setAttribute("class", ".container__botao-desabilitado")
}







