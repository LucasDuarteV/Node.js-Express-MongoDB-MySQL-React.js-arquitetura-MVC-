const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {

    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name

    if (!name) {

        fs.readFile('index.html', function (err, data) {

            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' })
                return res.end('Erro ao carregar o arquivo HTML.')
            }

            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })

    } else {

        fs.appendFile('arquivo.txt', `${name}\n`, function (err) {

            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' })
                return res.end('Erro ao salvar o nome.')
            }

            res.writeHead(302, {
                Location: '/',
            })

            return res.end()
        })
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})