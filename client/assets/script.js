const form = document.querySelector('form')

form.addEventListener('submit', getRandomQuote)

function getRandomQuote(e) {
    e.preventDefault()
    fetch('http://localhost:3000/quotes/random')
        .then(function(response) {
            return response.text()
        })
        .then( function(data) {
            const quote = document.getElementById("quote")
            const author = document.getElementById("author")
            quote.textContent= data.split("<br>")[0]  
            author.textContent= data.split("<br>")[1]
        })

}
