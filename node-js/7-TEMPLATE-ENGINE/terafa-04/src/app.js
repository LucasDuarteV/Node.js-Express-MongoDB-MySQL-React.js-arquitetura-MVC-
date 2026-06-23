const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')

const app = express()
const PORT = 3000

app.engine('handlebars', engine({
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, '../public')))


const productRoutes = require('./routes/products')
app.use('/', productRoutes)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})