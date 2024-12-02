// librarys
const express = require('express')
const path = require('path')
const { faker } = require('@faker-js/faker')

// import Scripts 
const { routerApi } = require('./server/index')
const { logErrors,errorHandler,boomErrorHandler } = require('./middleware/error.handler')

// vars 
const app = express()
const port = 4000

// desactivar header extra 
app.disable('x-powered-by')

// Esto le dice a Express que sirva archivos estáticos desde el directorio public
app.use(express.static('public'));

// middleware de express para las peticiones
app.use(express.json())

// deploy main website
app.get('/',(request,response) => {
  response.sendFile(path.join(__dirname,'public','index.html'))
})

// use routers 
routerApi(app)

// middleware 
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

// define port 
app.listen(port,() => {
  console.log("MY port is: " + port)
})
