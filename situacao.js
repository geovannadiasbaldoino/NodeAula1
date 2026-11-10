// decidindo a situação de um aluno
const nota1 = 6.0
const nota2 = 7.0
const media = (nota1 + nota2) / 2

// estrutura de condição (if/else, else if)
let situacao
if(media >= 7){
    situacao = "Aprovado"
    console.log(`O aluno tem média ${media}! Ele está ${situacao}`)
} else if(media >= 5){
    situacao = "Recuperação"
    console.log(`O aluno tem média ${media}! Ele está de ${situacao}`)
} else {
    situacao = "Reprovado"
    console.log(`O aluno tem média ${media}! Ele está ${situacao}`)
}