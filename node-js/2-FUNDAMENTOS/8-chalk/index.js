const chalk = require('chalk')

const nota = 4



if(nota >= 7)
    {
        console.log(chalk.green("Parabéns você está aprovado!!"))
    }else{
        console.log(chalk.red("Você foi reprovado!"))
    }