const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

// Configuração do Handlebars
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(express.static('public'))

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

app.get('/blog' , (req , res) =>{
    const posts =[
        {
            title: 'Aprender node.js',
            category: 'JavaScript',
            body: 'Teste',
            comments: 4
        },
          {
            title: 'Aprender Python',
            category: 'Python',
            body: 'Teste',
            comments: 4
        },
        
          {
            title: 'Aprender .NET',
            category: 'C#',
            body: 'Teste',
            comments: 4
        }
    ]

    res.render('blog' , {posts})
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