let inputNomeCRM = document.querySelector('#inputNomeCRM')
inputNomeCRM.addEventListener('blur', function () {
    let regexTexto = /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/

    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.nome-crm-erro').style.display = 'none'
        inputNomeCRM.style.backgroundColor = "rgba(0, 1000, 0, 0.5)"
    } else {
        document.querySelector('.nome-crm-erro').style.display = 'block'
        inputNomeCRM.style.backgroundColor = "rgba(1000, 0, 0, 0.5)"
    }
})

let inputCRM = document.querySelector('#inputCRM')
inputCRM.addEventListener('blur', function () {
    let regexTexto = /[0-9]-[A-Z]{2}/
    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.crm-erro').style.display = 'none'
        inputCRM.style.backgroundColor = "rgba(0, 1000, 0, 0.5)"
    } else {
        document.querySelector('.crm-erro').style.display = 'block'
        inputCRM.style.backgroundColor = "rgba(1000, 0, 0, 0.5)"
    }
})

let inputQtd = document.querySelector('#inputQtd')
inputQtd.addEventListener('change', function () {
    if (inputQtd.value < 1) {
        document.querySelector('.qtd-erro').style.display = 'block'
        inputQtd.style.backgroundColor = "rgba(1000, 0, 0, 0.5)"
    } else {
        document.querySelector('.qtd-erro').style.display = 'none'
        inputQtd.style.backgroundColor = "rgba(0, 1000, 0, 0.5)"
    }
})

let inputNome = document.querySelector('#inputNome')
inputNome.addEventListener('blur', function () {
    let regexTexto = /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/

    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.nome-erro').style.display = 'none'
        inputNome.style.backgroundColor = "rgba(0, 1000, 0, 0.5)"
    } else {
        document.querySelector('.nome-erro').style.display = 'block'
        inputNome.style.backgroundColor = "rgba(1000, 0, 0, 0.5)"
    }
})

inputCpf = document.querySelector('#inputCpf')
inputCpf.addEventListener('keyup', function () {
    let regexCpf = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/

    if (regexCpf.test(this.value.trim())) {
        document.querySelector('.cpf-erro').style.display = 'none'
        inputCpf.style.backgroundColor = "rgba(0, 1000, 0, 0.5)"
    } else {
        document.querySelector('.cpf-erro').style.display = 'block'
        inputCpf.style.backgroundColor = "rgba(1000, 0, 0, 0.5)"
    }
})

let inputSexo = document.querySelector('#inputSexo')
inputSexo.addEventListener('change', function(){
    if (inputSexo.value == '') {
        inputSexo.style.backgroundColor = "rgba(1000, 0, 0, 0.5)"
    }
    else {
        inputSexo.style.backgroundColor = "rgba(0, 1000, 0, 0.5)"
    }
})
