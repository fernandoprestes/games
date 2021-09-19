const projects = [
  {
    title: 'Sanek Game',
    src: './snake-game/index.html',
    img: './snake-game/snake-game-screenshot.png',
    alt: 'image project'
  },
  {
    title: 'Memory Game',
    src: './memory-game/index.html',
    img: './memory-game/memory-game-screenshot.png',
    alt: 'image project'
  },
  {
    title: 'Genius Game',
    src: './genius-game/index.html',
    img: './genius-game/genius-game-screenshot.png',
    alt: 'image project'
  },
  {
    title: 'Dino Game',
    src: './dino-game/index.html',
    img: './dino-game/dino-game-screenshot.png',
    alt: 'image project'
  },
  {
    title: 'Aerogun Game',
    src: './aerogun-game/index.html',
    img: './aerogun-game/aerogun-game-screenshot.png',
    alt: 'image project'
  },
  {
    title: 'Hash Game',
    src: './hash-game/index.html',
    img: './hash-game/hash-game-screenshot.png',
    alt: 'image project'
  },
  {
    title: 'SpaceShooter Game',
    src: './spaceshooter-game/index.html',
    img: './spaceshooter-game/spaceshooter-game-screenshot.png',
    alt: 'image project'
  }
]

const section = document.querySelector('.cards')

window.addEventListener('DOMContentLoaded', () => {
  Render(projects)
})

function Render(items) {
  let cards = items.map(item => {
    return `
    <div class="card__item">
      <a href="${item.src}">
        <img src="${item.img}" alt="${item.alt}">
      </a>
      <h2 class="card__title">${item.title}</h2>
    </div>
    `
  })
  cards = cards.join('')
  section.innerHTML = cards
}
