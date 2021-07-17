let order = []
let clickedOrder = []
let score = 0

const green = document.querySelector('.green')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const blue = document.querySelector('.blue')

function shuffleOrder() {
  let colorOrder = Math.floor(Math.random() * 4)
  order[order.length] = colorOrder
  clickedOrder = []
  for (let i in order) {
    let elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i) + 1)
  }
}

function lightColor(element, time) {
  time *= 500
  setTimeout(() => {
    element.classList.add('selected')
  }, time - 100)
  setTimeout(() => {
    element.classList.remove('selected')
  }, time + 400)
}

function checkOrder() {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      gameover()
      break
    }
  }
  if (clickedOrder.length == order.length) {
    alert(`Pontos: ${score}`)
    setTimeout(() => {
      nextLevel()
    }, 1000);

   
  }
}

function click(color) {
  clickedOrder[clickedOrder.length] = color
  createColorElement(color).classList.add('selected')
  setTimeout(() => {
    createColorElement(color).classList.remove('selected')
    checkOrder()
  }, 250)
}

function createColorElement(color) {
  if (color == 0) {
    return green
  } else if (color == 1) {
    return red
  } else if ((color = 2)) {
    return yellow
  } else {
    return blue
  }
}

function nextLevel() {
  score++
  shuffleOrder()
}

function gameover() {
  alert(`Game over - Pontuação: ${score}`)
  order = []
  clickedOrder = []
  playGame()
}

function playGame() {
  score = 0
  nextLevel()
}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()
