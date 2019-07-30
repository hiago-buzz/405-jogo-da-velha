let quadrados = document.querySelectorAll ("div");
let botao = document.querySelector ("button");
let resposta = document.querySelector ("h3");
let jogador1 = "X";
let jogador2 = "O";
let i = 0;


function jogada (){
   
    if (this.innerHTML == ""){
        if(i %2 == 0){
            this.innerHTML = `${jogador1}`;
            this.style.color = "white";
            this.style.fontSize = "30pt";
            i ++;
            ganhador();
            
        
            
        } else {

            this.innerHTML = `${jogador2}`;
            this.style.color = "black";
            this.style.fontSize = "30pt";
            i ++;
            ganhador();
            
            
        }

    }
}

for( let quadrado of quadrados){
    quadrado.onclick = jogada;
    
}

function ganhador(){


    if(quadrados[0].innerHTML != "" && quadrados[0].innerHTML == quadrados[1].innerHTML && quadrados[1].innerHTML == quadrados[2].innerHTML){
        resposta.innerHTML = "Você Ganhou!!!";
        resposta.style.color = 'limegreen';
        block();
        
    }

    else if(quadrados[3].innerHTML != "" && quadrados[3].innerHTML == quadrados[4].innerHTML && quadrados[4].innerHTML == quadrados[5].innerHTML){
        resposta.innerHTML = "Você Ganhou!!!";
        resposta.style.color = 'limegreen';
        block();
    }

    else if(quadrados[6].innerHTML != "" && quadrados[6].innerHTML == quadrados[7].innerHTML && quadrados[7].innerHTML == quadrados[8].innerHTML){
        resposta.innerHTML = "Você Ganhou!!!";
        resposta.style.color = 'limegreen';
        block();
    }

    else if(quadrados[0].innerHTML != "" && quadrados[0].innerHTML == quadrados[4].innerHTML && quadrados[4].innerHTML == quadrados[8].innerHTML){
        resposta.innerHTML = "Você Ganhou!!!";
        resposta.style.color = 'limegreen';
        block();
    }

    else if(quadrados[2].innerHTML != "" && quadrados[2].innerHTML == quadrados[4].innerHTML &&  quadrados[4].innerHTML == quadrados[6].innerHTML){
        resposta.innerHTML = "Você Ganhou!!!";
        resposta.style.color = 'limegreen';
        block();
    }

    else if(quadrados[0].innerHTML != "" && quadrados[0].innerHTML == quadrados[3].innerHTML && quadrados[3].innerHTML == quadrados[6].innerHTML){
        resposta.innerHTML = "Você Ganhou!!!";
        resposta.style.color = 'limegreen';
        block();
    }

    else if(quadrados[1].innerHTML != "" && quadrados[1].innerHTML == quadrados[4].innerHTML && quadrados[4].innerHTML == quadrados[7].innerHTML){
        resposta.innerHTML = "Você Ganhou!!!";
        resposta.style.color = 'limegreen';
        block();
    }

    else if(quadrados[2].innerHTML != "" && quadrados[2].innerHTML == quadrados[5].innerHTML && quadrados[5].innerHTML == quadrados[8].innerHTML){
        resposta.innerHTML = "Você Ganhou!!!";
        resposta.style.color = 'limegreen';
        block();
    }

    else if (i === 9){
        resposta.innerHTML = "#velha";
        resposta.style.color = 'red';
    }

    else{
        resposta.innerHTML = "";
        
    }  
}

function block(){
    if(jogada)
    for(quadrado of quadrados){
        quadrado.onclick = null;
    }
}

function resetar (){

    for( let quadrado of quadrados){
        quadrado.innerHTML = "";
        quadrado.onclick = jogada;
    }
    i = 0;
    resposta.innerHTML = "";
    
}

botao.onclick = resetar;