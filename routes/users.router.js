const express = require('express')
const UserService = require('../services/users.services')

const router = express.Router()
const user = new UserService()

router.get('/',async (req,res) => {
  const service = await user.find()
  res.status(200).json(service)
})

router.get('/:data',async (req,res) => {
  const { data } = req.params
  const service = await user.findOne(data)
  res.status(200).json(service)
})

router.post('/',async (req,res) => {
  const data = req.body
  const service = await user.create(data)
  res.status(201).json(service)
})

router.patch('/:id',async (req,res) => {
  try {
    const { id } = req.params
    const body = req.body
    const service = await user.update(id,body)
    res.status(214).json(service)
  } catch(error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.delete('/:id',async (req,res) => {
  try {
    const { id } = req.params
    const product = await service.delete(id)
    res.status().json(product)
  } catch(error) {
    res.status(404).json({
      message: error.message
    })
  }
})

module.exports = router
