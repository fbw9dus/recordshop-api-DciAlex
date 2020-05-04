//bei spiel node js 
const validatorjs = require('validator')
const myEmail = "Fatben@googlemail.com"
const sanitizedEmail  = validatorjs.normalizeEmail(myEmail)

const name = " Fatimaz  "

const sanitizedName = validatotjs.trim(name)
console.log(sanitizedName)