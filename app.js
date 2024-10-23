const express = require('express')
const path = require('path')
const { faker } = require('@faker-js/faker')
const serverRouters = require('./server/index')
const { logErrors,errorHandler } = require('./middleware/error.handler')

const app = express()
const port = 3000

// Esto le dice a Express que sirva archivos estáticos desde el directorio public
app.use(express.static('public'));

// middleware de express para las peticiones
app.use(express.json())


app.get('/',(request,response) => {
  response.sendFile(path.join(__dirname,'public','index.html'))
})

app.get('/newRouts',(req,res) => {
  res.send("<button>new Routs</button>")
})

serverRouters(app)
app.use(logErrors)
app.use(errorHandler)

app.listen(port,() => {
  console.log("MY port is: " + port)
})
