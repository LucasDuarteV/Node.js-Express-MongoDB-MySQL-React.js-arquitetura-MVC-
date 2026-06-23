const express = require('express')
const path = require('path')

const app = express()
const port = 5000

app.use(express.static(path.join(__dirname, 'public')))

const pagesRoutes = require('./routes/pages')

app.use(pagesRoutes)

app.listen(port , () =>{
    console.log(`Servidor rodando na porta: ${port}`)
})

