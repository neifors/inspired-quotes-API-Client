const form = document.querySelector('form')

form.addEventListener('submit', getRandomQuote())

function getRandomQuote(e) {
  e.preventDefault()
  fetch('http://localhost:3000/quotes')
    .then(resp => resp.text)
    .then(document.getElementById('text').innerHTML = quote)
}
