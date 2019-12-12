onNet('client:getPing', () => {
  emitNet("client:getPong", global.source, GetPlayerPing(global.source));
});