// index.js - seu primeir script executado no node
//1) Guarde o nome do curso em uma constante
const curso = "Node.js e APIs"

//2) Crie uma função que monta a saudação
function saudacao(nome){
    return `Boas-vindas ao curso de ${curso}, ${nome}!`
}

//3) Mostre o resultado
console.log(saudacao("Turma"));