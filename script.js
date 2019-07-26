let quadrados = document.querySelectorAll ("div");
let botao = document.querySelector ("button");
let resposta = document.querySelector ("h3");
let jogador1 = "X";
let jogador2 = "O";
let i = 0;

function jogada (){

    if (this.innerHTML == ""){
        if(i %2 == 0){
            this.innerHTML = `<p> ${jogador1}</p>`;
            this.style.color = "white";
            this.style.fontSize = "25pt";
            i ++;
            ganhador();
            
        } else {

            this.innerHTML = `<p> ${jogador2}</p>`;
            this.style.color = "white";
            this.style.fontSize = "25pt";
            i ++;
            ganhador();
        }

    }
}


function ganhador(){

    if(quadrados[0].innerHTML != "" && quadrados[0].innerHTML == quadrados[1].innerHTML && quadrados[1].innerHTML == quadrados[2].innerHTML){
        resposta.innerHTML = "Você Ganhou!!!";
        quadrado.onclick = null;
    }

    else if(quadrados[3].innerHTML != "" && quadrados[3].innerHTML == quadrados[4].innerHTML && quadrados[4].innerHTML == quadrados[5].innerHTML){
        resposta.innerHTML = "Você Ganhou!!!";
        quadrado.onclick = null;
    }

    else if(quadrados[6].innerHTML != "" && quadrados[6].innerHTML == quadrados[7].innerHTML && quadrados[7].innerHTML == quadrados[8].innerHTML){
        resposta.innerHTML = "Você Ganhou!!!";
        quadrado.onclick = null;
    }

    else if(quadrados[0].innerHTML != "" && quadrados[0].innerHTML == quadrados[4].innerHTML && quadrados[4].innerHTML == quadrados[8].innerHTML){
        resposta.innerHTML = "Você Ganhou!!!";
        quadrado.onclick = null;
    }

    else if(quadrados[2].innerHTML != "" && quadrados[2].innerHTML == quadrados[4].innerHTML &&  quadrados[4].innerHTML == quadrados[6].innerHTML){
        resposta.innerHTML = "Você Ganhou!!!";
        quadrado.onclick = null;
    }

    else if(quadrados[0].innerHTML != "" && quadrados[0].innerHTML == quadrados[3].innerHTML && quadrados[3].innerHTML == quadrados[6].innerHTML){
        resposta.innerHTML = "Você Ganhou!!!";
        quadrado.onclick = null;
    }

    else if(quadrados[1].innerHTML != "" && quadrados[1].innerHTML == quadrados[4].innerHTML && quadrados[4].innerHTML == quadrados[7].innerHTML){
        resposta.innerHTML = "Você Ganhou!!!";
        quadrado.onclick = null;
    }

    else if(quadrados[2].innerHTML != "" && quadrados[2].innerHTML == quadrados[5].innerHTML && quadrados[8].innerHTML){
        resposta.innerHTML = "Você Ganhou!!!";
        quadrado.onclick = null;
    }


    else{
        resposta.innerHTML = "";
    }


}

for( let quadrado of quadrados){
    quadrado.onclick = jogada;
    
    
}

function resetar (){

    for( let quadrado of quadrados){
        quadrado.innerHTML = "";

    }
}

botao.onclick = resetar;