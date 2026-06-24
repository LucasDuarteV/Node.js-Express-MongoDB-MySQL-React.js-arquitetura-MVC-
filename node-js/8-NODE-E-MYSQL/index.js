const express = require('express')
const { engine } = require('express-handlebars')
const mysql = require('mysql')

const port = 3000
const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql2'
})

conn.connect(function(err){
    if(err){
        console.log(err)
    } else {
        console.log('Conectou ao MySql!')
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`)
        })
    }
})