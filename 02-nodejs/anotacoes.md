# Trabalhando com callbacks

OBJETIVOS - Trabalhando com callbacks
* 0 Obter um usuário
* 1 Obter o numero de telefone de um usuario a partir de seu ID
* 2 Obter o endereco do usuario pelo ID/

## Sobre callbacks.
Segundo esse padrão o primeiro argumento sempre será o erro

* null - no caso é o erro

```
function obterUsuario(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: 'Goku',
      dataNascimento: new Date()
    })
  }, 1000);

}
```
Quando criamos um callback em uma função que já possui parâmetros o callback sempre será o último paramêtro a ser passado. Dessa forma mantemos uma organização e um padrão JS no código.

```
function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: '2156484',
      ddd: 21
    })
  }, 2000);
}

```
Precisamos utilizar esse padrão para mantermos o código síncrono para dessa forma conseguirmos trabalhar com JS.

## Simulando chamada assíncrona.
Estamos simulando uma chamada no banco de dados. Passamos
o callback como argumento.

```
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

function obeterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'dos bobos',
      numero: 0
    })
  }, 2000);
}
```