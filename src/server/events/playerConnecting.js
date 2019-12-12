on('playerConnecting', (playerName, setKickReason, deferrals) => { // When people try to connect
  deferrals.defer();
  deferrals.update(`Checking Statement...`); // define default client message

  const ip = player.getIp(global.source);
  const name = player.getName(global.source);
  const steamId = player.getSteamId(global.source);

  // check on api if steamId is whitelisted
  if(player.getSteamId(global.source)) {
    axios(`http://${apiUrl}:${apiPort}/whitelist/${player.getSteamId(global.source)}`)
      .then(response => {
        if(response.status === 200) { // if status code is 200 "Ok"
          log(chalk.bgGreen(chalk.black(` [ ${steamId} | ${ip} | ${moment().format('MMMM Do YYYY, h:mm:ss a')} ] Connected `)));
          deferrals.done(); // let client enter on the server
        }
      }).catch(err => {
        if(err.response.status === 404) {
          deferrals.done(`Hey ${name}, tu n'es pas whitelist! Passe sur le discord pour devenir un vrai cow-boy 💬 https://discord.gg/cUu4esH`);
        }
    });
  } else {
    deferrals.done("You should be connected on Steam");
  }
});