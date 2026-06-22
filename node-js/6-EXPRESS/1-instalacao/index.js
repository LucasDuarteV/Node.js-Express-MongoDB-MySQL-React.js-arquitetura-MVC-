const express = require('express')
const app = express()
const port = 3000

const path = require('path')
const basePath = path.join(__dirname , 'templates')

const checkAuth = function(req , res , next){
    if(req.authStatus){
        console.log('Está logado, faça o login para continuar!')
        next()
    } else {
        console.log("Não está logado, fala login para continuar!")
    }
}

app.use(checkAuth)

app.get('/' , (req , res) =>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port , () => {
    console.log(`Rodando na porta: ${port}`)
})