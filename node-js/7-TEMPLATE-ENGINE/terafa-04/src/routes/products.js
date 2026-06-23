const express = require('express')
const router = express.Router()

const products = require('../data/products')

router.get('/', (req, res) => {
  res.render('home', { products })
})

router.get('/product/:id', (req, res) => {
  const id = req.params.id

  const product = products.find(p => p.id == id)

  if (!product) {
    return res.send("Produto não encontrado")
  }

  res.render('product', { product })
})

module.exports = router