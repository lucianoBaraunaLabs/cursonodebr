const service = require("./service")

Array.prototype.meuMap = function (callback) {
  const novoArrayMapeado = []

  for( let indice = 0; indice <= this.length - 1; indice++) {
    const resultado = callback(this[indice], indice)
    novoArrayMapeado.push(resultado)
  }

  return novoArrayMapeado;
}

async function main () {
  try {
    const results = await service.obterPessoas('a');
    // const names = []
    // results.results.forEach(pessoas => names.push(pessoas.name) );

    // const names = results.results.map(pessoas => pessoas.name)
    // console.log(names);

    const names = results.results.meuMap((pessoa, indice) => `[${indice}]: ${pessoa.name}` )

    console.log(names);
  } catch(error) {

  }
}

main();
