const httpp = require("http")

const port = 3000

const server = httpp.createServer((req,res) =>{
    res.statusCode = 200
    res.setHeader('Contenty-Type' , 'text/html')
    res.end('<h1> Olá, este é meu primeiro server em html</h1>')
})

server.listen(port , () =>{
    console.log(`Servidor rodando na porta ${port}`)
})