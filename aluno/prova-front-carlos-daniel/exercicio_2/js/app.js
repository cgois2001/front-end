let array = ['sem Prêmio', '1000,00', '800,00', '500,00']

let mostrarPremio = function(posicao) {
    if (array[posicao] == undefined) {
        console.log(array[0])
        return
    }
    else {
        console.log(array[posicao])
        return 
    }
}

mostrarPremio(1)
mostrarPremio(2)
mostrarPremio(3)
mostrarPremio(4)
mostrarPremio(0)
mostrarPremio(-1)
