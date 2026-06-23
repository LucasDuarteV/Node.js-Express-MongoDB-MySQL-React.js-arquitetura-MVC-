const express = require('express')
const { engine } = require('express-handlebars')

const app = express()
const port = 3000

// Configuração do Handlebars
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/dashboard' , (req , res) =>{

    const items = ["Item a" , "Item b" , "Item c"]

    res.render('dashboard' , {items})
})

app.get('/post' , (req , res) =>{
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js',
        comments: 4
    }

    res.render('blogpost' , {post})
})

app.get('/', (req, res) => {

    const user ={
        name: 'Lucas',
        surname: 'Duarte',
        age: 22
    }

    const palavra = 'Siiiiiiiiiu'

    const auth = false

    const aproved = true

    res.render('home' , {user: user , palavra , auth, aproved})
})

// Inicia servidor
app.listen(port, () => {
    console.log('App funcionando!')
})