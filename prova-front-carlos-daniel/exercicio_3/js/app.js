$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        autoWidth: true,
        nav: true
    });
  });

let listaMenu = document.querySelectorAll('.lista-menu')

let alteraConteudo = function(lista){
    let text = 'Item Nav '
    for (let i = 0; i < lista.length; i++) {
        listaMenu[i].textContent = (text + (i+1))
        console.log(listaMenu[i])
    }
}

alteraConteudo(listaMenu)


