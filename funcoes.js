// conhecendo funções em JavaScript

torrar() // como a 2º função foi anexada a 1º só basta chamar a 1º
function torrar(){
    console.log("Torrando pão")
    injetarPao()
}

function injetarPao(){
    console.log("preparando para injetar pão")
    console.log("finalizado")
}

function main(){
    getData()
    checkValues()
    sendToDatabase()
    console.log("usuário cadastrado!")
}

//função p pegar os dados
function getData(){
    console.log("pegando os dados do usuário")
}

//função p verificar os dados
function checkValues(){
    console.log("validando os dados ...")
    console.log("validando os dados ...")
    console.log("validando os dados ...")
}

function sendToDatabase(){
    console.log("cadastrando dados")
}

main()

saudacao("dia", "Matheus", "fria")

function saudacao(hora, nome, temperatura = "boa"){
    console.log("Bom " + hora)
    console.log("Olá " + nome)
    console.log("hoje a temperatura está " + temperatura)
}

// como usar a interpolação em JS
createStringConnection("db_products", "Matheus", "1234")

function createStringConnection(databaseName, user, pass){
	console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}
`) // tudo que está dentro do ${} é uma váriavel e subst. "" por crasé ``
}

// função padrão:
function nomeDaFuncao(a, b, c = 0){
    // escopo da função
    return 
}

console.log("___________________")
// função com retorno
soma(6, 5)
function soma(numA, numB){
    let somatorio = numA + numB
    console.log(somatorio) // aparece na tela
}
console.log("___________________")
let resultado = soma(5, 5)
console.log(resultado)
function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio // apenas guarda a resposta
}

// exemplo .split:
let userName = getFirstName("Matheus Rocha Paiva", " ")
console.log("Seja bem vindo " + userName)
function getFirstName(name, splitChar = " "){
    let firstName = name.split(splitChar)[0]
    return firstName
}