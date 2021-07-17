let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
document.addEventListener('keydown', moviment)

//tamanho do pixel
let box = 25
//area = 500 (tamanho do canvas) / 20(tamanho do pixel) = 25
let area = canvas.width / box
//eixos das coordenadas do canvas
let eixoX = 0
let eixoY = 0
//posição em que a cobrinha vai nascer (aleatorio)
let positionX = Math.floor(Math.random() * area)
let positionY = Math.floor(Math.random() * area)
//posição em que a maça vai nascer (aleatorio)
let appleX = Math.floor(Math.random() * area)
let appleY = Math.floor(Math.random() * area)
//pontuação
let score = 0
//la cobrinha
let snake = []
var body = 1

function game() {
  //sem bordas,
  //quando atinge a borda retorna no eixo contrario

  positionX += eixoX
  positionY += eixoY

  if (positionX < 0) {
    positionX = area - 1
  }
  if (positionX > area - 1) {
    positionX = 0
  }
  if (positionY < 0) {
    positionY = area - 1
  }
  if (positionY > area - 1) {
    positionY = 0
  }

  creatCanvas()
  creatApple()
  creatSnake()

  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x == positionX && snake[i].y == positionY) {
      eixoX = eixoY = 0
      body = 1
      score = 0
      alert('Game Over!')
    }
  }

  snake.push({
    x: positionX,
    y: positionY
  })
  while (snake.length > body) {
    snake.shift()
  }
  if (appleX == positionX && appleY == positionY) {
    body++
    score++
    appleX = Math.floor(Math.random() * area)
    appleY = Math.floor(Math.random() * area)
  }
}

function moviment(e) {
  switch (e.keyCode) {
    case 37: // esquerda
      eixoX = -1
      eixoY = 0
      break
    case 38: // cima
      eixoX = 0
      eixoY = -1
      break
    case 39: // direita
      eixoX = 1
      eixoY = 0
      break
    case 40: // baixo
      eixoX = 0
      eixoY = 1
      break
    default:
      break
  }
}

function creatCanvas() {
  context.fillStyle = '#1A112A'
  context.fillRect(0, 0, canvas.width, canvas.height)
}

function creatApple() {
  context.fillStyle = '#F20530'
  context.fillRect(appleX * box, appleY * box, box, box)
}

function creatSnake() {
  for (let i = 0; i < snake.length; i++) {
    context.fillStyle = '#0BD904'
    context.fillRect(snake[i].x * box, snake[i].y * box, box, box)
  }
}

setInterval(game, 100)
