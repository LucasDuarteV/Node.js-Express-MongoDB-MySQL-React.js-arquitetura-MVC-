const express = require('express')
const { engine } = require('express-handlebars')

const app = express()
const port = 3000

// Configuração do Handlebars
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// Rota principal
app.get('/', (req, res) => {

    const user ={
        name: 'Lucas',
        surname: 'Duarte',
        age: 22
    }

    const palavra = 'Siiiiiiiiiu'

    res.render('home' , {user: user , palavra})
})

// Inicia servidor
app.listen(port, () => {
    console.log('App funcionando!')
})