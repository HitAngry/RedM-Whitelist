const axios = require('axios');
const chalk = require('chalk');
const moment = require('moment');

const version = "0.0.2";
const log = console.log;
const player = new Player();

log(chalk.bgGreen(chalk.black(`WhiteList : ${version} - ${moment().format('MMMM Do YYYY, h:mm:ss a')}`)));