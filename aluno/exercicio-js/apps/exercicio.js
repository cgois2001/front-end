let positivo = 10
let negativo = -12
let decimal = 2.4
let string = "sei lá"
let booleano = true
console.log(positivo, negativo, decimal, string, booleano)


let nome1 = "Carlos"
let sobrenome1 = "Daniel"
console.log(nome1 + " " + sobrenome1)


//não imprime nada, da erro de referência devido à caixa alta
//var nome = "Clara";
//console.log(Nome);

//erro de referência, sobrenome não foi definido
//var nome = "Clara";
//console.log(nome, sobrenome);

let texto = "o que acontece se eu \n pular a linha?"
console.log(texto)

let valorNulo = false
let naodefinido = undefined
console.log(valorNulo, naodefinido)

let frutas = ["banana", "abacate", "tomate", "morango", "maçã"]
console.log(frutas)

let texto2 = "RD está aqui agora!"
console.log(texto2)

var nota = 10
switch(nota) {
    case(10) :
    case(9) :
    console.log("melhores alunos!")
    break
    case(8) :
    case(7) :
    console.log("muito bom!")
    break
    case(6) :
    case(5) :
    console.log("ufa, você passou!")
    break
    case(4) :
    console.log("recuperação")
    break
    case(3) :
    case(2) :
    case(1) :
    case(0) :
    console.log("reprovado!") 
    break
    default :
    console.log("nota inválida")
}

