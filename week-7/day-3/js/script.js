console.log('Hello Matrix')

const button = document.createElement('button')

button.id = 'dark-mode'

const body = document.getElementsByTagName('body')[0]

body.appendChild(button)

button.innerText = "Dark Mode"
let buttonClick = 0
button.addEventListener('click', () => {
  if (button.innerText === 'Dark Mode') {
    darkMode()
  } else {
    lightMode()
  }
})

function darkMode() {
  body.style.backgroundColor = 'black'
  body.style.color = 'white'
  button.innerText = 'Light Mode'
}

function lightMode() {
  body.style.backgroundColor = 'white'
  body.style.color = 'black'
  button.innerText = 'Dark Mode'
}

const subHeading = document.querySelector('#sub-heading')
// document.getElementById('sub-heading').innerText= 'Sean'

subHeading.innerText = 'Sean'

if (subHeading.innerText === 'Sean') {
  document.getElementsByClassName('main-heading')[0]
    .innerText = 'Matrix Dom Manipulations'
}

const studentArray = ['todd', 'ray', 'christopher', 'khoa', 'john', 'Karina']
const studentArray2 = ['ben', 'gian', 'vinh', 'david', 'md', 'alec']

const studentContainer = document.querySelector('#student-container')

const titleCase = (astring) => astring[0].toUpperCase() + astring.substring(1)

for (const [i, student] of studentArray.entries()) {
  const potatoes = document.createElement('li')
  potatoes.id = i + 1
  potatoes.innerText = titleCase(student)
  studentContainer.append(potatoes)
}


for (let [i, student] of studentArray2.entries()) {
  studentContainer.innerHTML += `<li id='${i + studentArray.length + 1}'>${titleCase(student)}</li>`
}

/* 
 Build a form
 add event listener to form
 take form data and call api 
 take api data and sent to html */

const pokemonApi = document.querySelector('#pokemon-api')
// const pokemonApi2 = document.getElementById('pokemon-api')

pokemonApi.addEventListener('submit', async (event) => {
  event.preventDefault()
  const pokeName = getPokeName()
  const data = await pokeApiCall(pokeName)
  handlePokeData(data)
})


function getPokeName() {
  const pokeName = document.querySelector('#pokemon').value
  return pokeName
}

async function pokeApiCall(pokemon) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  if (res.ok) {
    const data = await res.json()
    return data
  }
}

function handlePokeData({ name, sprites: { versions } }) {
  // create an html node div
  /* create a p tag
  put pokename in p tag innertext
  make img element for poke sprite
  add p tag & the img to div
  add div to our aside 
   */
  const div = document.createElement('div')
  const p = document.createElement('p')
  const img = document.createElement('img')
  p.innerHTML = `<strong>${titleCase(name)}</strong>`
  img.src = versions['generation-v']['black-white'].animated.front_shiny
  // div.appendChild(p)
  // div.appendChild(img)
  div.append(p,img)
  document.querySelector('.aside').appendChild(div)

  div.addEventListener('click', ()=> div.remove())
}

