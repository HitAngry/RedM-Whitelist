onNet('client:handcheck', () => {
  let profil = player.getProfil(global.source);
  emitNet("client:getProfil", global.source, profil);
});