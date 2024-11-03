// Librarys 
const express = require('express')

// import Scripts 
const productsRouter = require('../routes/products.router')
const usersRouter = require('../routes/users.router')
const categoriesRouter = require('../routes/categories.router')

// Etablish routers 
function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1',router)
  router.use('/products',productsRouter)
  router.use('/users',usersRouter)
  router.use('/categories',categoriesRouter)
}

module.exports = { routerApi }
