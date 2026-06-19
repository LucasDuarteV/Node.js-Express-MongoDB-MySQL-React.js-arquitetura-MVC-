const _ = require('lodash')

const arr = [1 , 2 , 3]

const arrX = [1 , 5 , 3]

const diff = _.difference(arr , arrX)

console.log(diff)