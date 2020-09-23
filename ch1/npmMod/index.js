
/* This is only for  make colorful your terminal */
const chalk = require('chalk');
/* validator use for validate the forms value */
const validator = require('validator');

console.log(chalk.bgRed.green("Hello chalk"));

console.log(chalk.green.inverse.underline(validator.isEmail('foo@bar.com')));