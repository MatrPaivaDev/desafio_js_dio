//estruturas de laço de repetição
// FOR -> repetição com uma contagem

for(let contador = 0; contador < 4; contador++){
//condição para o laço seguir
    console.log(contador) // ennquanto o contador for < 4 vai realizar a ação
}

let pontosVida = 100

// se atentar ao contador

for(let i = 0; i < 5; i++){
    pontosVida -= 20
    if(pontosVida === 0){
        console.log("Você morreu!! sua vida é " + pontosVida)
        break
    }
    console.log("Sua vida está em " + pontosVida + "%")
}

// WHILE
// pode se transformar em um laço infinto caso não seja apresentando uma condição

i = 0 
while(i < 4){
    console.log("contando " + i)
    i++ // caso n coloque esse incrementador será um laço infinito
}

// DO WHILE (faça enquanto)
// fazer algo enquanto a condição for válida
// nesse caso a ação é executada pelo menos uma vez, mesmo se a condição já iniciar negativa
i = 4
do{
    console.log("olá")
    i++
} while(i < 4)