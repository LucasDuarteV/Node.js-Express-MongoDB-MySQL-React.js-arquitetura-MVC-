const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

async function conectar() {
  try {
    await sequelize.authenticate()
    console.log('Conectamos ao MySQL.')
  } catch (erro) {
    console.log(`Não foi possível realizar a conexão: ${erro}`)
  }
}

conectar()

module.exports = sequelize