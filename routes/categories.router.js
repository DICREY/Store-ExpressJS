// Librarys 
const express = require('express')
const router = express.Router()

// Routers 
router.get('/:catId/products/:prodId',(req,res) => {
  const {catId,prodId} = req.params

  res.json({
    categoryID: catId,
    ProductID: prodId
  })
})

module.exports = router
