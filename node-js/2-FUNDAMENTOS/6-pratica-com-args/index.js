//const minimist = require('minimist')

//const args = minimist(ProcessingInstruction.argv.slice(2))
// externo

// interno

const soma = require('./soma').soma

//soma(5,5)

const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a , b)