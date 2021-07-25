const $cards = document.querySelectorAll('.card-front-back')

let hasFlippedCard = false
let firstCard, secondCard
let lockBoard = false

function flipCard() {
  if (lockBoard) return
  if (this === firstCard) return
  this.classList.add('-active')
  if (!hasFlippedCard) {
    hasFlippedCard = true
    firstCard = this
    return
  }
  secondCard = this
  hasFlippedCard = false
  checkForMatch()
}

function checkForMatch() {
  if (firstCard.dataset.card === secondCard.dataset.card) {
    disableCards()
    return
  }
  unFlipCards()
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
  resetBoard()
}

function unFlipCards() {
  lockBoard = true
  setTimeout(() => {
    firstCard.classList.remove('-active')
    secondCard.classList.remove('-active')
    resetBoard()
  }, 1350)
}

function resetBoard() {
  ;[hasFlippedCard, lockBoard] = [false, false][(firstCard, secondCard)] = [
    null,
    null
  ]
}

;(function shuffle() {
  $cards.forEach(card => {
    let randomPosition = Math.floor(Math.random() * 12)
    card.style.order = randomPosition
  })
})()

$cards.forEach(card => {
  card.addEventListener('click', flipCard)
})
