// WINDOW OBJECT

console.log(window) // Window es el entorno de programación global o contexto en el que siempre nos movemos en en navegador
// window nos da acceso a múltiples propiedades como window.document
// El document es la representación basada en OOP (Programación orientada a objetos) de nuestros documentos HTML

// DOCUMENT AND NODES

// Podemos acceder a distintos elementos explorando los children de nuestro documento
// Esta representación jerárquica de nuestros documentos es lo que se conoce como DOM (Document Object Model)
const title = document.children[0].children[1].children[0]

// NODE ACCESS METHODS

// Pero evidentemente hay otros métodos que nos permiten acceder a nuestros elementos:
const header = document.querySelector("#title") // querySelector() es el método más usado
const allTitles = document.querySelectorAll("h1") // => nos daría acceso a la totalidad de elementos h1 en nuestro documento como array
const headerById = document.getElementById("title") // => también podemos acceder a elementos por su id

// NODE TRAVERSAL
const buttonContainer = document.querySelector(".button-container") // querySelector nos permite buscar elementos por tag, clase o id
const firstButton = buttonContainer.firstElementChild // Los nodos guardan entre sí relaciones jerárquicas de padres, hijos y hermanos
const secondButton = firstButton.nextElementSibling
// MODIFY TEXT

// Podemos modificar los textos de nuestros nodos:
header.innerText = "El css es plastilina"
header.textContent = "El css es plastilina"
// Esta es una forma poca segura de modificar contenidos ya que podemos dar acceso no intencional a que un usuario introduzca código
// header.innerHTML = `<h1 style="font-size: 1.5em"><a style="color:black;" href="https://forocoches.com/" target="_blank">El css es plastilina</a></h1>`

// MODIFY STYLES

// También podemos modificar estilos accediendo a la propiedad style de nuestros nodos => también podemos jugar con clases...
header.style.color = "red"

// NODE CREATION

const list = document.querySelector(".list")
const catFavoriteFoods = ["tuna", "diaHam", "catBars", "turkey", "fish"]
for (const food of catFavoriteFoods) {
  const listElement = document.createElement("li") // el método createElement nos permite CREAR nodos
  listElement.innerText = food
  //list.appendChild(listElement) // Después de crear un nodo es necesario adjuntarlo al dom si queremos renderizarlo
}

// BEHAVIOR / EVENTS

// Podemos vigilar eventos de click en relación a cualquier nodo
firstButton.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("ESTOY SIENDO CLICKADO")
})

// KEYDOWN/KEYUP

const mario = {
  velX: 0,
  velY: 0,
}

// Estos dos tipos de eventos (keydown,keyup) nos permiten vigilar los eventos de presión de teclas de nuestros usuarios
// Podríamos utilizarlos para crear un videojuego en el navegador, por ejemplo
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    mario.velY += 10
  }
  if (event.key === "ArrowRight") {
    mario.velX += 10
  }
  console.log("Mario al pulsar teclas ==>", mario)
})

document.addEventListener("keyup", ({ key }) => {
  if (key === "ArrowUp") console.log("Has dejado de saltar!")
})

// CHANGE
// 1 ==> seleccionar el input
const input = document.querySelector(".input-block")
const addButton = document.querySelector(".add-button")
addButton.addEventListener("click", (e) => {
  e.preventDefault()
  const inputValue = input.value
  const newListItem = document.createElement("li")
  newListItem.innerText = inputValue
  list.appendChild(newListItem)
  input.value = ""
})

// El evento change nos permite vigilar eventos de cambio de valor en inputs
// En un futuro utilizaréis este tipo de evento para crear formularios en REACT !!! :D
input.addEventListener("change", (event) => {
  console.log("QUIEN ES EL EVENTO ==>", event.target.value)
})
