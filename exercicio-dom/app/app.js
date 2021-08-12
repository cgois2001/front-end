let texto = document.getElementById('demo')
console.log(texto)
texto.textContent = "jão"

let nomeElement = document.getElementsByTagName('p')
console.log(nomeElement)
nomeElement[0].textContent = "Olá"
nomeElement[1].textContent = "Alterei o conteúdo através da tag!"

let nomeClass = document.querySelector(".test")
console.log(nomeClass)
nomeClass.textContent = "Salve jão"

let tagImg = document.getElementsByTagName('img')
console.log(tagImg)
console.log(tagImg[0].getAttribute("src"))
tagImg[0].setAttribute("src", "super-smiley.gif")
console.log(tagImg[0].getAttribute("src"))

let elementInput = document.getElementById("myText")
console.log(elementInput)
console.log(elementInput.getAttribute("value"))
elementInput.setAttribute("value", "Esse é o novo valor")
console.log(elementInput.getAttribute("value"))

let colorRed = document.querySelectorAll('p')
console.log(colorRed)
colorRed.forEach(function(value, index) {
    colorRed[index].style.color = "red";
})

let fontSize = document.querySelectorAll('p')
console.log(fontSize)
fontSize.forEach(function(value, index) {
    fontSize[index].style.fontSize = "40px";
})

let displayNone = document.querySelectorAll('p')
console.log(displayNone)
displayNone.forEach(function (value,index){
    displayNone[index].style.display = "none";
})


