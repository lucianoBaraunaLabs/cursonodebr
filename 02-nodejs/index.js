/*
  OBJETIVOS - Trabalhando com callbacks
  0 Obter um usuário
  1 Obter o numero de telefone de um usuario a partir de seu ID
  2 Obter o endereco do usuario pelo ID
*/

// Simulando chamdas assincronas
function obterUsuario(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: 'Goku',
      dataNascimento: new Date()
    })
  }, 1000);

}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: '2156484',
      ddd: 21
    })
  }, 2000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0
    })
  }, 2000);
}

// Obtendo valores de forma sincrona.
// Quando obterusuario terminar a sua execução ele executa resolverUsuario.
obterUsuario(function resolverUsuario (erro, usuario) {
  if( erro ) {
    console.error('Deu ruim no usuário', erro);
    return;
  }

  obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
    if( erro1 ) {
      console.error('Deu ruim no telefone', erro);
      return;
    }

    obterEndereco(usuario.id, function resolverEndereco(erro2, endereco){
      if( erro2 ) {
        console.error('Deu ruim no telefone', erro);
        return;
      }

      console.log(`
        Nome: ${usuario.nome}.
        Endereço: ${endereco.rua}, ${endereco.numero}.
        Telefone: ${telefone.ddd}, ${telefone.telefone}
      `);
    })
  })


});

