const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
{
    type: 'input',
    name: 'idade',
    message: 'Qual é sua idade?: '
},

{
    type: 'input',
    name: 'usuario',
    message: 'Qual é seu nome?: '
}
]).then(ansewrs => {

    console.log(chalk.bgYellow(ansewrs.idade))

    console.log(chalk.black(ansewrs.usuario))

}).catch((error) => console.log(error))