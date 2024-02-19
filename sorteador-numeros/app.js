let quantidade = 0;
let deNum = 0;
let ateNum= 0;
let numA = [];

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

    return quantidade, deNum, ateNum;
}

//Função para alterar HTML com os números sorteados
function InnerHTML(texto) {

    let query = document.querySelector("#resultado");
    return query.innerHTML = texto;
}

//Sorteia os números de acordo com os valores que o usuário deseja
function Sortear() {

    GetValues();
    
    if (deNum > ateNum) {
        InnerHTML("Número inicial deve ser menor que o final! Entrada inválida.");
    }
    else {
        let num;

        for (i = 0; i < quantidade; i++) {
            num = (Math.random() * (ateNum - deNum)) + 1.5;
            numA.push(parseInt(num));
        }
        InnerHTML(`Números sorteados: ${numA}`);
        document.getElementById("resultado").setAttribute("class", "texto__paragrafo");
        AtivaBotao("btn-reiniciar", "btn-sortear");
    }

    //     let num;

    // for (i = 0; i < quantidade; i++) {
    // num = (Math.random() * (ateNum - deNum)) + 1.5;
    // numA.push(parseInt(num));
    // }
    // InnerHTML(`Números sorteados: ${numA}`);
    // document.getElementById("resultado").setAttribute("class", "texto__paragrafo");
    // AtivaBotao("btn-reiniciar", "btn-sortear");

    // InnerHTML("Número inicial maior que o final, entrada inválida!");
    // setTimeout(5);
    // InicioGame();
    
}

function Reiniciar() {
    InicioGame();
}

function AtivaBotao(ativa, desativa) {
    document.getElementById(ativa).removeAttribute("disabled");
    document.getElementById(desativa).setAttribute("disabled", "");
    document.getElementById(desativa).setAttribute("class", "container__botao-desabilitado");
    document.getElementById(ativa).setAttribute("class", "container__botao");
}







