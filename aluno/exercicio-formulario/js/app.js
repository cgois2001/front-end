//==Validação do nome==
let inputNome = document.querySelector('#inputNome')
inputNome.addEventListener('blur', function () {
    let regexTexto = /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/

    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.nome-erro').style.display = 'none'
        document.querySelector('.nome-certo').style.display = 'block'
        inputNome.style.backgroundColor = "rgba(0, 1000, 0, 0.5)"
    } else {
        document.querySelector('.nome-certo').style.display = 'none'
        document.querySelector('.nome-erro').style.display = 'block'
        inputNome.style.backgroundColor = "rgba(1000, 0, 0, 0.5)"
    }
})

//==Validação do CPF==

inputCpf.addEventListener('keyup', function () {
    let regexCpf = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/

    if (regexCpf.test(this.value.trim())) {
        document.querySelector('.cpf-erro').style.display = 'none'
        document.querySelector('.cpf-certo').style.display = 'block'
        inputCpf.style.backgroundColor = "rgba(0, 1000, 0, 0.5)"
    } else {
        document.querySelector('.cpf-certo').style.display = 'none'
        document.querySelector('.cpf-erro').style.display = 'block'
        inputCpf.style.backgroundColor = "rgba(1000, 0, 0, 0.5)"
    }

})

//==Validação Endereço
let inputEndereco = document.querySelector('#inputEndereco')
inputEndereco.addEventListener('blur', function(){
    let regexEndereco = /(\b[A-Za-z](?!\s))/ 

    if (regexEndereco.test(this.value.trim())) {
        document.querySelector('.endereco-erro').style.display = 'none'
        document.querySelector('.endereco-certo').style.display = 'block'
        inputEndereco.style.backgroundColor = "rgba(0, 1000, 0, 0.5)"
    } else {
        document.querySelector('.endereco-certo').style.display = 'none'
        document.querySelector('.endereco-erro').style.display = 'block'
        inputEndereco.style.backgroundColor = "rgba(1000, 0, 0, 0.5)"
    }
})

//==Validação Bairro

let inputBairro = document.querySelector('#inputBairro')
inputBairro.addEventListener('blur', function(){
    let regexBairro = /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/

    if (regexBairro.test(this.value.trim())) {
        document.querySelector('.bairro-erro').style.display = 'none'
        document.querySelector('.bairro-certo').style.display = 'block'
        inputBairro.style.backgroundColor = "rgba(0, 1000, 0, 0.5)"
    } else {
        document.querySelector('.bairro-certo').style.display = 'none'
        document.querySelector('.bairro-erro').style.display = 'block'
        inputBairro.style.backgroundColor = "rgba(1000, 0, 0, 0.5)"
    }
})

//==Validação CEP 
let inputCep = document.querySelector('#inputCep')
inputCep.addEventListener('blur', function(){
    let regexCep = /^\d{5}-\d{3}$/

    if (regexCep.test(this.value.trim())) {
        document.querySelector('.cep-erro').style.display = 'none'
        document.querySelector('.cep-certo').style.display = 'block'
        inputCep.style.backgroundColor = "rgba(0, 1000, 0, 0.5)"
    } else {
        document.querySelector('.cep-certo').style.display = 'none'
        document.querySelector('.cep-erro').style.display = 'block'
        inputCep.style.backgroundColor = "rgba(1000, 0, 0, 0.5)"
    }
})

//==Validação Município
let inputMunicipio = document.querySelector('#inputMunicipio')
inputMunicipio.addEventListener('blur', function(){
    let regexMunicipio = /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/

    if (regexMunicipio.test(this.value.trim())) {
        document.querySelector('.municipio-erro').style.display = 'none'
        document.querySelector('.municipio-certo').style.display = 'block'
        inputMunicipio.style.backgroundColor = "rgba(0, 1000, 0, 0.5)"
    } else {
        document.querySelector('.municipio-certo').style.display = 'none'
        document.querySelector('.municipio-erro').style.display = 'block'
        inputMunicipio.style.backgroundColor = "rgba(1000, 0, 0, 0.5)"
    }
})

//==Validação Telefone
let inputTelefone = document.querySelector('#inputTel')
inputTelefone.addEventListener('blur', function(){
    let regexTelefone = /^([0-9]{2}-[0-9]{4}-[0-9]{4})|([0-9]{10})$/

    if (regexTelefone.test(this.value.trim())) {
        document.querySelector('.tel-erro').style.display = 'none'
        document.querySelector('.tel-certo').style.display = 'block'
        inputTelefone.style.backgroundColor = "rgba(0, 1000, 0, 0.5)"
    } else {
        document.querySelector('.tel-certo').style.display = 'none'
        document.querySelector('.tel-erro').style.display = 'block'
        inputTelefone.style.backgroundColor = "rgba(1000, 0, 0, 0.5)"
    }
})

//==Validação Celular
let inputCelular = document.querySelector('#inputCel')
inputCelular.addEventListener('blur', function(){
    let regexCelular = /^([0-9]{2}-[9]{1}[0-9]{4}-[0-9]{4})|([0-9]{2}[9]{1}[0-9]{8})$/

    if (regexCelular.test(this.value.trim())) {
        document.querySelector('.cel-erro').style.display = 'none'
        document.querySelector('.cel-certo').style.display = 'block'
        inputCelular.style.backgroundColor = "rgba(0, 1000, 0, 0.5)"
    } else {
        document.querySelector('.cel-certo').style.display = 'none'
        document.querySelector('.cel-erro').style.display = 'block'
        inputCelular.style.backgroundColor = "rgba(1000, 0, 0, 0.5)"
    }
})

//==Validação Inscrição Estadual
let inputInscricao = document.querySelector('#inputInscricaoEst')
inputInscricao.addEventListener('blur', function(){
    let regexInscricao = /^[0-9]{3}.[0-9]{3}.[0-9]{3}.[0-9]{3}$/

    if (regexInscricao.test(this.value.trim())) {
        document.querySelector('.inscricao-est-erro').style.display = 'none'
        document.querySelector('.inscricao-est-certo').style.display = 'block'
        inputInscricao.style.backgroundColor = "rgba(0, 1000, 0, 0.5)"
    } else {
        document.querySelector('.inscricao-est-certo').style.display = 'none'
        document.querySelector('.inscricao-est-erro').style.display = 'block'
        inputInscricao.style.backgroundColor = "rgba(1000, 0, 0, 0.5)"
    }
})

//==Validação UF
let inputUf = document.querySelector('#inputUf')
inputUf.addEventListener('change', function(){
    if (inputUf.value == '') {
        document.querySelector('.uf-certo').style.display = 'none'
        document.querySelector('.uf-erro').style.display = 'block'
        inputUf.style.backgroundColor = "rgba(1000, 0, 0, 0.5)"
    }
    else {
        document.querySelector('.uf-certo').style.display = 'block'
        document.querySelector('.uf-erro').style.display = 'none'
        inputUf.style.backgroundColor = "rgba(0, 1000, 0, 0.5)"
    }
})
