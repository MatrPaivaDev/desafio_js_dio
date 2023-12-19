// Calculadora de partidas Rankeadas

//declarando variáveis:
let rankingFinal = saldoRankeada(120, 40)
let niveisRankeada = ["Ferro" , "Bronze" , "Prata" , 
"Ouro" , "Diamante" , "Lendário" , "Imortal"]
let nomeRanking = nomeRankeada(rankingFinal)

//declarando função:
function saldoRankeada(win, lose){
    return win - lose
}
function nomeRankeada(saldoRankeada){
    if(saldoRankeada <= 10){
        return niveisRankeada[0]
}else if(saldoRankeada <= 20){
    return niveisRankeada[1]
}else if(saldoRankeada <= 50){
    return niveisRankeada[2]
}else if(saldoRankeada <= 80){
    return niveisRankeada[3]
}else if(saldoRankeada <= 90){
    return niveisRankeada[4]
}else if(saldoRankeada <= 100){
    return niveisRankeada[5]
}else{
    return niveisRankeada[6]
}
}
console.log(`O Herói tem saldo de ${rankingFinal} e está
no nível de ${nomeRanking}`)