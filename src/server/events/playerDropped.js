on("playerDropped", (reason) => {
  log(chalk.bgRed(chalk.white(` [ ${player.getSteamId(global.source)} | ${player.getIp(global.source)} | ${moment().format('MMMM Do YYYY, h:mm:ss a')} ] disconnected `)))
});