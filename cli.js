#!/usr/bin/env node

const grammer = require('./App')
const chalk = require('chalk');
(async () => {
(await grammer('this is aawesome')).matches.forEach(err => console.log(chalk.redBright.bold(err.message)))
})()
