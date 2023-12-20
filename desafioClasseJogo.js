// criando a classe de um jogo

class hero{
    constructor(name, age, tipo, ataque, force){
        this.name = name
        this.age = age
        this.tipo = tipo
        this.ataque = ataque
        this.force = force
    }
    attack(){
        console.log(`o ${this.tipo} atacou o inimigo
usando ${this.ataque}`)
    }
    presentationHero(){
        console.log(`Olá ${this.name} você possui ${this.age} anos é um
execelente ${this.tipo} com um poder de ${this.force}`)
    }
    battle(adversary, otherForce){
        if(this.force > otherForce){
            console.log(`Em uma luta entre ${this.name} e ${adversary}
quem ganha é o ${this.name}`)
        }else{
            console.log(`Em uma luta entre ${this.name} e ${adversary}
quem ganha é o ${adversary}`)
        }
    }
}

let treinandoMago = new hero("Mestre dos Magos", 1567, "mago", "magia", 5000)
let treinandoNinja = new hero("Samuninja", 26, "ninja", "shuriken", 1600)
let treinandoGuerreiro = new hero("Bob esponja Espada quadrada", 
45, "guerreiro", "espada", 3000)
let treinandoMonge = new hero("Han", 5000, 
"monge", "artes marciais", 700)


treinandoMago.presentationHero()
console.log("-----------------")
treinandoNinja.presentationHero()
console.log("-----------------")
treinandoGuerreiro.presentationHero()
console.log("-----------------")
treinandoMonge.presentationHero()
console.log("-----------------")
treinandoGuerreiro.attack()
console.log("-----------------")
treinandoGuerreiro.battle("Samuninja", 1600)
