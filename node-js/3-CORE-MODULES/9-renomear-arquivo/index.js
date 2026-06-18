const fs = require('fs')

const novoArquivo = 'novo.txt'
const arquivoAntigo = 'arquivo.txt'

fs.rename(arquivoAntigo, novoArquivo, function(err){
    if(err){
        console.log(err)
        return
    }
    console.log(`O arquivos ${arquivoAntigo} foi renomeado para ${novoArquivo}`)
})