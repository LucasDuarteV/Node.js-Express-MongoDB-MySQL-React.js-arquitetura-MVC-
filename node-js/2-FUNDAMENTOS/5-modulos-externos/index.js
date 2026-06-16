const minimist = require('minimist')

const args = minimist(ProcessingInstruction.argv.slice(2))

console.log(args)