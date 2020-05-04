
const { check} = require('express-validator');

exports.userValidationRules =[
    check('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Bitte prüf deine Email-Adresse'),
    check('firstName')
    .exists()
    .trim()
    .withMessage('Bitte Firstname ist ein Pflichtfeld'),
    check('password')
    .isLength({min: 10})
    .withMessage('Das Passwort soll mindestens 10 Zeichen lang sein')
    
]
 // username must be an email
 //check('username').isEmail(),
 // password must be at least 5 chars long
 //check('password').isLength({ min: 5 })