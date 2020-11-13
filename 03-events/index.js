const EventMitter = require('events');

class MeuEmissor extends EventMitter {}

// Criamos nosso próprio evento e ficamos executando ele.
// const meuEmissor = new MeuEmissor()
// const nomeEvento = 'usuario:click'

// Criando a função que liga o evento que precisamos.
// meuEmissor.on(nomeEvento, function (click) {
//   console.log('USUARIO CLICOU', click)
// })

// .emit() = Executa o evento
// meuEmissor.emit(nomeEvento, 'na barra');

// Exemplo para execução de evento de tempos em tempos.
// let count = 0;
// setInterval(() => {
//   meuEmissor.emit(nomeEvento, `clicou ${count++}`)
// }, 1000);

// Exemplo de criar um evento para ficar ouvindo o que usuário digita.
const stdin = process.openStdin()

stdin.addListener("data", (value) => console.log(`Voce digitou: ${value.toString().trim()}` ))
