function soma (n1, n2){
    return n1+n2
}
function multiplicacao (n1, n2){
    return n1*n2
}
function subtracao (n1, n2){
    return n1-n2
}
function divisao (n1, n2){
    return n1/n2
}

let resultadoFinal = subtracao(multiplicacao(soma(12, 8), 3), divisao(10,2))
console.log(`O resultado da expressão (12 + 8) * 3 - 10 / 2 é igual a: ${resultadoFinal.toFixed(1)}`)