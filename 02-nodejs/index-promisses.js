/*
  OBJETIVOS - Trabalhando com callbacks
  0 Obter um usuário
  1 Obter o numero de telefone de um usuario a partir de seu ID
  2 Obter o endereco do usuario pelo ID
*/

// imporatando módulo interno do node com utils. Esse ajuda a converter
// funções no padrão callback para promisses.
// Como o promisiy segue um padrão. Caso o primeiro parâmetro num callback é o erro
// caso esse parâmetro não exista ou apresente um erro o código mostra esse erro.
// Para simular basta trocar null por qualquer outra coisa como por ex.: 132354;

const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

// Simulando chamdas assincronas
function obterUsuario() {
  // quando der algum problema -> reject
  // quando der sucesso -> resolve
  return new Promise(function resolvePromise(resolve, reject) {

    // return reject(new Error('DEU RUIM DENTRO DA PROMISSE !!!!'))

    setTimeout(() => {
      return resolve({
        id: 1,
        nome: 'Goku',
        dataNascimento: new Date()
      })
    }, 1000);
  })
}

function obterTelefone() {
  return new Promise(function resolvePromise (resolve, reject) {
    return setTimeout(() => {
      return resolve({
        numero: '2156484',
        ddd: 21
      })
    }, 2000);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0
    })
  }, 2000);
}


const usuarioPromisse = obterUsuario();
// para manipularmos o sucesso usamos a função .then
// para manipularmos erro, usamos .catch
// nesse caso o pipe é usuario -> telefone -> telefone (resultado atual para o próximo then)
usuarioPromisse
  .then(function (usuario) {
    return obterTelefone().then(function (result) {
      return {
          usuario: { ...usuario },
          telefone: result
      }
    })
  }).then(function (resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id);

    return endereco.then(function resolverEndereco(result) {
      return {
        ...resultado,
        endereco: { ...result }
      }
    })
  })
  .then(function (resultado) {
    const { usuario, telefone, endereco } = resultado
    console.log(`
      Nome: ${usuario.nome},
      Telefone: ${telefone.numero},
      Endereco: ${endereco.rua}
    `);
  }).catch(function (error) {
    console.error('DEU RUIM: ', error);
  })