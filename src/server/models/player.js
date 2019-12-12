class Player {
  constructor() {
    this.self = this;
  }

  getName(source) {
    return GetPlayerName(source);
  }

  getIp(source) {
    return GetPlayerIdentifier(source, 1).split(':')[1];
  }

  getSteamId(source) {
    return GetPlayerIdentifier(source, 0).split(':')[1];
  }

  getProfil(source) {
    let result = null;
    
    axios(`http://${apiUrl}:${apiPort}/users/${this.self.getSteamId(source)}`)
		.then(response => {
      if(response.status === 200) {
        result = response.data;
      }
    }).catch(err => {
      if(err) throw err;
    });
    
    return result;
  }
}