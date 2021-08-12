//2
let cumprimento = document.querySelector(".cumprimento")
cumprimento.addEventListener('click', function (){
    alert('olá')
})

//3
let mudaFundo = document.querySelector('.muda-fundo')
let meuSite = document.querySelector('body')
mudaFundo.onclick = function() {
    meuSite.style.backgroundColor = 'green'
}

//4
let image = document.querySelector ('.foto')
image.onmouseover = function() {
    console.log('estou vendo a imagem')
}

//5
let image2 = document.querySelector('.foto-2')
image2.addEventListener('click', function() {
    console.log('estou clicando na imagem')
    //9
    image2.addEventListener('mousemove', function(event){
        let posX = event.clientX,
            posY = event.clientY;
            console.log(posX, posY)
    })
})  

//6
let funcao = function(){
    this.style.backgroundColor = "red"
}
meuSite.addEventListener('click', funcao)

//7
meuSite.removeEventListener('click', funcao)

//8
let form = document.querySelector('.formulario')
let botaoForm = document.querySelector('.botao-form')

botaoForm.onclick = function(){
    alert('Não foi possível enviar!')
    form.removeAttribute('action')
}

//Timers
//1
setTimeout(function(){
    alert('Tempo esgotado!')
}, 10000)

//2
setInterval(function() {
    alert('Hora do intervalo')
}, 5000);