const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 3000

quotes = [
  '"PERFECT IS THE ENEMY OF GOOD." –VOLTAIRE',
  '"I’M STILL LEARNING." –MICHELANGELO',
  '"LIFE IS A JOURNEY, NOT A DESTINATION." –RALPH WALDO EMERSON',
  '"LEARNING IS NOT ATTAINED BY CHANCE, IT MUST BE SOUGHT FOR WITH ARDOR AND ATTENDED TO WITH DILIGENCE." –ABIGAIL ADAMS',
  '"YESTERDAY I WAS CLEVER, SO I CHANGED THE WORLD. TODAY I AM WISE, SO I AM CHANGING MYSELF." –RUMI',
  '"BE CURIOUS, NOT JUDGMENTAL." –WALT WHITMAN',
  '"YOU DON’T HAVE TO BE GREAT TO START, BUT YOU HAVE TO START TO BE GREAT." –ZIG ZIGLAR',
  '"BE STUBBORN ABOUT YOUR GOALS AND FLEXIBLE ABOUT YOUR METHODS." –UNKNOWN',
  '"NOTHING WILL WORK UNLESS YOU DO." –MAYA ANGELOU',
  '"NEVER GIVE UP ON A DREAM JUST BECAUSE OF THE TIME IT WILL TAKE TO ACCOMPLISH IT. THE TIME WILL PASS ANYWAY." –EARL NIGHTINGALE',
  '"ANYONE WHO STOPS LEARNING IS OLD, WHETHER AT TWENTY OR EIGHTY." –HENRY FORD',
  '"TELL ME AND I FORGET. TEACH ME AND I REMEMBER. INVOLVE ME AND I LEARN." –BENJAMIN FRANKLIN',
  '"CHANGE IS THE END RESULT OF ALL TRUE LEARNING." –LEO BUSCAGLIA',
  '"LIVE AS IF YOU WERE TO DIE TOMORROW. LEARN AS IF YOU WERE TO LIVE FOREVER." –MAHATMA GANDHI',
  '"A LEARNING CURVE IS ESSENTIAL TO GROWTH." –TAMMY BJELLAND'
]

// add "<br>" between every quote and its author
const newQuotes = []
for (quote of quotes) {
  newQuotes.push( quote.split('–')[0]+"<br> - "+quote.split('–')[1] )
}

function getRandomQuote () {
  return newQuotes[Math.floor(Math.random() * newQuotes.length)]
}

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/quotes/', (req, res) =>  res.send(newQuotes) )

app.get('/quotes/random/', (req, res) => res.send(getRandomQuote()))

app.get('/quotes/:id', (req, res) => {
  if (req.params.id >= newQuotes.length || req.params.id < 1) {
    res.send({"error":`ID out of range. Please try again with an ID between 1 and ${newQuotes.length}`})
  } else {
    res.send(newQuotes[req.params.id - 1])
  }
})

app.listen( PORT, () => {
  console.log(`\nExpress departing now from port ${PORT}!\n`)
} );
