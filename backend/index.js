const express = require('express')
const {readFileSync} = require("fs")
const path = require("path")
const app = express()
const port = 3000

const filepath =path.join(__dirname,"words.txt")
const wordlist = readFileSync(filepath,"utf8")
  .split("\n")
  .filter(word=> word.length>3)

app.get('/', (req, res) => {
  const numberOfWords = +req.query.n || 1
  const randomWords = []
  for (let i = 0; i < numberOfWords; i++) {
    const randomIndex =Math.floor(Math.random()*wordlist.length)
    const randomWord = wordlist[randomIndex];
    randomWords.push({word:randomWord,length:randomWord.length})
  }
  res.json({randomWords})
})

app.listen(port, () => {
  console.log(`⚡⚡⚡ Listening on http://localhost:${port}`)
})
