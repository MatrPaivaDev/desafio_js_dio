// Operadores Aritméticos

let idade = 30

console.log(idade)

idade = 30 + 6 // soma

console.log(idade)

idade = 30 - 6 // subtração 

console.log(idade)

//operadores de incremento

let contador = 1
contador ++
console.log(contador)

//operador de decremento

contador --
console.log(contador)

// operadores de atribuição

contador += 4 // contador = contador + 4
console.log(contador)

// operadores de comparação

let numero = "1"
let marca = "Apple"
//console.log(numero = 1) // = é atribuição
console.log(numero == 1) // == é para comparar o valor
console.log(numero === 1) // === é para comparar o valor e o formato
// forma mais segura de comparar é usando ===
console.log(marca !== "Apple")

// operadores lógicos

// && == AND -> as duas expressões devem ser vdd
let idadePessoa = 18
let vistoAprovado = true

console.log((idadePessoa >= 18) && (vistoAprovado === true))

// || == OR -> uma das expressões devem ser vdd
idadePessoa = 17
vistoAprovado = true

console.log((idadePessoa >= 18) || (vistoAprovado === true))

// ! == NOT -> nega a afirmativa
let tempo = "chuva"
let resultado = tempo === "chuva"
console.log("o resultado é " + !resultado)
// caso coloque !! ele nega oq havia negado 