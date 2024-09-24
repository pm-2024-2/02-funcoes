console.log('ok')

// declaração de função
// function nomeDaFuncao(parametros) {
//    lógica
// }

// num -> input -> parâmetro
function absoluto(num) { // num = -8
    console.log('num', typeof(num))

    if (typeof(num) != 'number') {
        return undefined
        // throw 'entrada inválida: ' + num // exceção para rejeitar a entrada
    }

    var resp

    if (num < 0) {
        resp = num * -1
    } else {
        resp = num
    }

    return resp
}


// como modularizar este algoritmo? seja reusável
var num1 = []
var num2 = absoluto(num1)
console.log(num2)

// executa uma função, chamar função (function call), invoke a function (invocar a função)
// console.log(absoluto(-3437))
// console.log(absoluto(12312))
// console.log(absoluto(-9569))

function potencia(base, expoente = 1) { // potencia(2, 8) // a ordem importa
    console.log(base, expoente)
    // pré-condições
    if (typeof(expoente) != 'number') return null
    if (expoente % 1 > 0) return null
    if (typeof(base) != 'number') return null

    var resultado = 1
    for (var i = 0; i < expoente; i++) {
        // resultado = resultado * base
        resultado *= base
    }
    return resultado
} // ESCOPO DA FUNÇÃO: variáveis que só existem dentro da função


// tudo que é repetível é modularizável
var base = 2
var exp = 8
// 2 * 2 * 2 ...
var resp = potencia(base, exp)
// undefined, null, Not a Number (NaN)
console.log(resp) // NaN: Not a Number (Não um Número)

console.log(potencia(5))