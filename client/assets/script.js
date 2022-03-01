const form = document.querySelector('form')

form.addEventListener('submit', getRandomQuote)

function getRandomQuote(e) {
  e.preventDefault()
  fetch('http://localhost:3000/quotes/random')
    .then(function(response) {
        return response.text()
    })
    .then( function(data) {
        const h1 = document.getElementById("text")
        h1.textContent = data
        console.log(data)
    })
  
}
