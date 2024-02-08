let sorteio;

function Sorteio(de, ate, qtd) {

    for (i = 0; i < qtd; i++)
    {
        sorteio = Math.random() * (ate - de) +de
        console.log(sorteio)
    }
    
}

Sorteio(1, 5, 2)
