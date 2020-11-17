const axios = require('axios')
const URL = 'https://swapi.dev/api'

async function obterPessoas(nome) {
  const url = `${URL}/people/?search=${nome}`
  const response = await axios.get(url)
  return response.data
}

// Exemplo funcional
// obterPessoas('Han')
//   .then(function (result) {
//       console.log(result)
//   })
//   .catch(function (error) {
//     console.error('DEU RUIM: ', error)
//   })

module.exports = {
  obterPessoas
}