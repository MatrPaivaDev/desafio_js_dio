// estrutura de decisão
// switch/ case/ break/ default

let fruta = "laranja"

switch(fruta){ // compara a variável com o case
    case "laranja":
        console.log("suco de laranja")
        console.log("adoro esse suco") // pode ter mais de uma ação
        break

    case "banana": // caso n tenha o BREAK quando uma cond for V tds abaixo serão executadas tb
    case "uva": // pode ter mais de um case só pasta colocar dessa forma
        console.log("vitamina de " + fruta)
        break

    case "maça":
        console.log("suco de maça")
        break // só executa a primeira que for vdd

    default: // caso na atenda nenhum case entra nesse caso
        console.log("suco genérico")
}