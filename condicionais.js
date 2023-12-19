// condicional IF

let estaLigado = true

if(estaLigado){ // dentro do () coloca uma expressão V/F
    console.log("executou o comando")
}

// condicional ELSE

estaLigado = false

if(estaLigado){
    console.log("ligado")
}
else{
    console.log("desligado")
}

// condicional ELSE IF

let nivelFome = 1

if(nivelFome === 1){
    console.log("pouca fome!")
}else if(nivelFome === 2){
    console.log("Fome!")
}else{
    console.log("Muita fome!")
}