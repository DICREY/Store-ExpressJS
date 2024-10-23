const express = require('express')
const ProductsService = require('../services/products.services')

const router = express.Router()
const service = new ProductsService()

router.get('/',async (req,res) => {
  const products = await service.find()
  res.json(products)
})

router.get('/:id',async (req,res,next) => {
  try {
    const { id } = req.params
    const products = await service.findOne(id)
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
})

router.post('/',async (req,res) => {
  const data = req.body
  const product = await service.create(data)
  res.status(201).json(product)
})

router.patch('/:id',async (req,res) => {
  try {
    const { id } = req.params
    const body = req.body
    const product = await service.update(id,body)
    res.status(214).json(product)
  } catch(error){
    res.status(404).json({
      message: error.message
    })
  }
})

router.delete('/:id',async (req,res) => {
  try {
    const { id } = req.params
    const product = await service.deleteOne(id)
    res.status(200).json(product)
  } catch(error) {
    res.status(404).json({
      message: error.message
    })
  }
})

module.exports = router
