let quantidade;
let deNum;
let ateNum;
let numA = [];


//Função que define as condições iniciais do MiniGame
function InicioGame() {
    AtivaBotao("btn-sortear", "btn-reiniciar");
    InnerHTML("Números sorteados: nenhum até agora");
    document.getElementById("resultado").setAttribute("class", "texto__paragrafo")
    numA = [];
}

InicioGame();

//Busca a quantidade que o usuário deseja no input definido por id no parâmetro
function GetValues(){
    quantidade = document.querySelector("#quantidade").value;
    deNum = document.querySelector("#de").value;
    ateNum = document.querySelector("#ate").value;

    console.log(quantidade,deNum, ateNum);
    return quantidade, deNum, ateNum;
}

function NumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + 1;
}

//Função para alterar a tag HTML com os números sorteados
function InnerHTML(texto) {

    let query = document.querySelector("#resultado");
    return query.innerHTML = texto;
}

//Sorteia os números de acordo com os valores que o usuário deseja verificando se a entrada é viável
function Sortear() {

    GetValues();
    
    if (deNum > ateNum) {
        InnerHTML("Número inicial deve ser menor que o final! Entrada inválida.");
    }
    else {

        for (i = 0; i < quantidade; i++) {

            num = NumeroAleatorio(deNum, ateNum);
            numA.push(num);
            console.log(num);
            
        }
        console.log(numA);
        InnerHTML(`Números sorteados: ${numA}`);
        document.getElementById("resultado").setAttribute("class", "texto__paragrafo");
        AtivaBotao("btn-reiniciar", "btn-sortear");
    }
}

//Redefine as condições iniciais do MiniGame
function Reiniciar() {
    InicioGame();
}

//Função para alterar a classe e atributo dos botões
function AtivaBotao(ativa, desativa) {
    document.getElementById(ativa).removeAttribute("disabled");
    document.getElementById(desativa).setAttribute("disabled", "");
    document.getElementById(desativa).setAttribute("class", "container__botao-desabilitado");
    document.getElementById(ativa).setAttribute("class", "container__botao");
}







