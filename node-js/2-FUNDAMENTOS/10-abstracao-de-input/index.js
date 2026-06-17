const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
  {
    name: 'p1',
    message: 'Qual a primeira nota? ',
  },
  {
    name: 'p2',
    message: 'Qual a segunda nota? ',
  }
])
.then((answers) => {

  const media =
    (parseInt(answers.p1) + parseInt(answers.p2)) / 2

  console.log(`Média: ${media}`)

  if (media >= 7) {
    console.log(chalk.green('Aprovado'))
  } else {
    console.log(chalk.red('Reprovado'))
  }
})
.catch((err) => console.log(err))