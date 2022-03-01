const form = document.querySelector('form')

form.addEventListener('submit', getRandomQuote)

function getRandomQuote(e) {
  e.preventDefault()
  fetch('http://localhost:3000/quotes/random')
    .then(function(response) {
        return response.text()
    })
    .then( function(data) {
        const h3 = document.getElementById("text")
        h3.innerHTML = data
    })
  
}
