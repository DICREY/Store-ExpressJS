const express = require('express')
const path = require('path')
const { faker } = require('@faker-js/faker')

const app = express()
const port = 3000

// Esto le dice a Express que sirva archivos estáticos desde el directorio public
app.use(express.static('public'));

app.use(express.json())

app.get('/',(request,response) => {
  response.send("Hello World")
})

app.get('/html',(req,res) => {
  res.sendFile(path.join(__dirname,'public','index.html'))
})

app.get('/newRouts',(req,res) => {
  res.send("<button>new Routs</button>")
})

app.get('/products',(req,res) => {
  const products = []
  const { size } = req.query
  const limit = size || 10
  for (let i = 0;i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      img: faker.image.url()
    })
  }
  res.json(products)
})

app.get('/products/:id',(req,res) => {
  const {id} = req.params
  res.json(
    {
      id: id,
      name: "Cookies",
      price: 2000
    }
  )
})

app.get('/categories/:catId/products/:prodId',(req,res) => {
  const {catId,prodId} = req.params

  res.json({
    categoryID: catId,
    ProductID: prodId
  })
})

app.get('/users',(req,res) => {
  const { limit, offset} = req.query
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send("no hay parametros")
  }
})
app.listen(port,() => {
  console.log("Mi port is: " + port)
})
