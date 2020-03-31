const {check} = require('express-validator')

exports.userValidationRules = [
    //check email
    check('email').isEmail().normalizeEmail(),
    //check first name
    check('firstName').isLength({min:3}).trim(),
    check('password').isLength({min:10})

]
