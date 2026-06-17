const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Qual é a sua linguagem preferida? ', (language) => {
    console.log(`A minha linguagem preferida é: ${language}`)
    rl.close()
})