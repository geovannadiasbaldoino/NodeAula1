//media-notas.js - calculando a média de um aluno
// um objeto guarda dados relacionados sobre uma coisa (aqui, o aluno)
const aluno = {
    nome: "Geovanna Dias",
    nota1: 6.5,
    nota2: 9.5,
    nota3: 4.0
}

//A função some duas notas e devolve a média
function media(n1, n2, n3){
    return (n1+n2+n3)/3
}

const mediaFinal = media(aluno.nota1, aluno.nota2, aluno.nota3)
console.log(mediaFinal)
console.log(`${aluno.nome}: média ${mediaFinal.toFixed(1)}`)