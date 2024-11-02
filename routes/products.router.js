// Librarys 
const express = require('express')

// Import Scripts 
const ProductsService = require('../services/products.services')
const { validatorHandler } = require('../middleware/validator.handler')
const { createProductSchema,updateProductSchema,getProductSchema } = require('../schemas/product.schema')

const router = express.Router()
const service = new ProductsService()

router.get('/',async (req,res) => {
  const products = await service.find()
  res.json(products)
})

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req,res,next) => {
  try {
    const { id } = req.params
    const products = await service.findOne(id)
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
})

router.post('/',
  validatorHandler(createProductSchema,'body'),
  async (req,res) => {
  const data = req.body
  const product = await service.create(data)
  res.status(201).json(product)
})

router.patch('/:id',
  validatorHandler(getProductSchema,'params'),
  validatorHandler(updateProductSchema,'body'),
  async (req,res,next) => {
  try {
    const { id } = req.params
    const body = req.body
    const product = await service.update(id,body)
    res.status(214).json(product)
  } catch(error){
    next(error)
  }
})

router.delete('/:id',
  validatorHandler(getProductSchema,'params'),
  async (req,res,next) => {
  try {
    const { id } = req.params
    const product = await service.deleteOne(id)
    res.status(200).json(product)
  } catch(error) {
    next(error)
  }
})

module.exports = router
