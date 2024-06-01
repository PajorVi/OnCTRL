const cards =  document.getElementById("itens_carrossel_container");
const totalCards = document.querySelectorAll(".itens_carrossel_container div")


let i = 0;

function btnDeslizarEsquerda() {
    i++;
    
    if(i > totalCards.length - 1) {
        i = 0;
    }

    cards.style.transform = `translateX(${i * 500}px)`;
}

function btnDeslizarDireita() {
    i++;
    
    if(i > totalCards.length - 1) {
        i = 0;
    }

    cards.style.transform = `translateX(${-i * 500}px)`;
}