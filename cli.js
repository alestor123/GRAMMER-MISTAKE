#!/usr/bin/env node

const grammer = require('./App')
const {readFileSync} = require('fs')
const chalk = require('chalk');
(async () => {
(await grammer(readFileSync(process.argv[2]).toString())).matches.forEach(err => console.log(chalk.redBright.bold(err.message)))
})()
