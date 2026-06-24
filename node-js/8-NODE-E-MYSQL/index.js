const express = require('express')
const { engine } = require('express-handlebars')
const mysql = require('mysql')

const port = 3000
const app = express()

// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// Handlebars
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// Banco
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql2'
})

conn.connect(function(err){
    if(err){
        console.log(err)
        return
    }

    console.log('Conectou ao MySql!')

    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`)
    })
})


// ROTAS
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/books', (req, res) => {
    const query = "SELECT * FROM books"

    conn.query(query, function(err, data) {
        if (err) {
            console.log(err)
            return
        }

        res.render('books', { books: data })
    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id

    const query = "SELECT * FROM books WHERE id = ?"

    conn.query(query, [id], function(err, data) {
        if (err) {
            console.log(err)
            return
        }

        const book = data[0]

        res.render('book', { book })
    })
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty

    const query = "INSERT INTO books (title, pageqty) VALUES (?, ?)"

    conn.query(query, [title, pageqty], function(err) {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})