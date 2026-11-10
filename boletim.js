const aluno1 = {
    nome: "Geovanna Dias",
    prova1: 7.0,
    prova2: 1.0,
    trabalho: 0.0
}
const aluno2 = {
    nome: "Gabriel Casusa",
    prova1: 3.0,
    prova2: 5.0,
    trabalho: 9.0
}
const aluno3 = {
    nome: "Matheus Lopes",
    prova1: 6.0,
    prova2: 10.0,
    trabalho: 3.0
}

function media(n1, n2, n3){
    return (n1 + n2 + n3) / 3
}
let r1 = media(aluno1.prova1, aluno1.prova2, aluno1.trabalho)
let r2 = media(aluno2.prova1, aluno2.prova2, aluno2.trabalho)
let r3 = media(aluno3.prova1, aluno3.prova2, aluno3.trabalho)

function situacao(media){
    if(media >= 6){
        return "Aprovado"
    } else if (media >=3) {
        return "Em recuperação"
    } else {
        return "Reprovado"
    }
}
console.log(`Aluno ${aluno1.nome} tem média ${r1.toFixed(2)}. Sua situação é: ${situacao(r1)}`)
console.log(`Aluno ${aluno2.nome} tem média ${r2.toFixed(2)}. Sua situação é: ${situacao(r2)}`)
console.log(`Aluno ${aluno3.nome} tem média ${r3.toFixed(2)}. Sua situação é: ${situacao(r3)}`)