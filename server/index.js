const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const bC = require('./controllers/books_controller')

app.use(bodyParser)

app.get('/api/books', bC.read)
app.post('/api/books', bC.create)
app.put('/api/books', bC.update)
app.delete('api/books/:id', bC.delete)

const Port = 5000
app.listen(Port, () => console.log(`listening on ${Port}`))