// aprendendo Vetores e Matrizes em JS
// vetores = servem para armazenar uma quantidade maior de valores em uma
// variável sem precisar criar várias variáveis
// os vetores possuem métodos que ajudam a realizar funções

let nomePessoas = ["Matheus" , "Malu" , "Leo", "Gui"]

// se chamar a variável será apresentada ela por completo
console.log(nomePessoas)

// chamar somente um valor, lembrando que se inicia no 0
console.log(nomePessoas[1])

// Matrizes = estruturas bidimensionai que podem armazenar
// tipos diferentes de valores.
// também possuem metodos 

let definePessoa = [
    ["Matheus", "M", 25],
    ["Malu", "F", 23],
    ["Leo", "M", 11]
]

console.log("Eu sou " + definePessoa[2][0] + ", tenho " + definePessoa[2][2])

// metodos são ações que podem ser realizadas 
// propriedades são caracteristicas