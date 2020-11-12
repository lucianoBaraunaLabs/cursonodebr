function testeCall(callback) {
  return callback({
    name: "ola",
  });
}

testeCall(function qualquer(arg) {
  console.log("dentro de qualquer", arg);
});
