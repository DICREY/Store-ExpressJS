const express = require('express')
const UserService = require('../services/users.services')

const router = express.Router()
let user = new UserService()

router.get('/',(req,res) => {
  const service = user.find()
  res.status(200).json(service)
})

router.get('/:data',(req,res) => {
  const { data } = req.params
  let service = user.findOne(data)
  res.status(200).json(service)
})

router.post('/',(req,res) => {
  const data = req.body
  const service = user.create(data)
  res.status(201).json(service)
})

router.patch('/:data',(req,res) => {
  const { data } = req.params
  const body = req.body
  const service = user.update(data,body)
  res.status(214).json(service)
})

// router.get('/',(req,res) => {
//   const { limit, offset} = req.query
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset
//     })
//   } else {
//     res.send("no hay parametros")
//   }
// })

module.exports = router