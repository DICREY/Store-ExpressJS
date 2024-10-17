const express = require('express')
const ProductsService = require('../services/products.services')

const router = express.Router()
const service = new ProductsService()

router.get('/',(req,res) => {
  const products = service.find()
  res.json(products)
})

router.get('/filter',(req,res) => {
  res.send("yo soy un filter")
})

router.get('/:id',(req,res) => {
  const { id } = req.params
  const products = service.findOne(id)
  res.status(200).json(products)
})

router.post('/',(req,res) => {
  const data = req.body
  const product = service.create(data)
  res.status(201).json(product)
})

router.patch('/:id',(req,res) => {
  const { id } = req.params
  const body = req.body
  res.status(214).json({
    message: "Update",
    data: body,
    id,
  })
})

router.delete('/:id',(req,res) => {
  const { id } = req.params
  res.json({
    message: "delete",
    id,
  })
})

module.exports = router
