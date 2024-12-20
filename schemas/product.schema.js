// Librarys 
const Joi = require('joi')

// Vars 
const id = Joi.string().uuid()
const name = Joi.string().min(3).max(50)
const price = Joi.number().integer().min(100)
const image = Joi.string().uri()

// Schemas 
const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    image: image.required()
})

const updateProductSchema = Joi.object({
    name: name,
    price: price,
    image: image
})

const getProductSchema = Joi.object({
    id: id.required()
})

module.exports = { createProductSchema,updateProductSchema,getProductSchema }