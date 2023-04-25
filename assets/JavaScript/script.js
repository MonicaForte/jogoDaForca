// Criação das categorias
const frutas = ['bergamota', 'maracujá', 'laranja', 'fruta-do-conde', 'abacaxi'];
const animais = ['baleia', 'rinoceronte', 'tigre-de-bengala', 'dragão de komodo', 'papagaio'];
const lugares = ['cataratas do iguaçu', 'curitiba', 'são paulo', 'arraial do cabo', 'lisboa'];
const cores = ['dourado', 'azul marinho', 'esmeralda', 'marsala', 'magenta'];
const objetos = ['caneta', 'marca-texto', 'escada', 'cadeira', 'garfo'];

// Função para gerar uma palavra aleatória da categoria escolhida
function gerarPalavraAleatoria(categoria) {
  let palavras;
  
  // Para selecionar o array de palavras de acordo com a categoria
  switch(categoria) {
    case 'frutas':
      palavras = frutas;
      break;

    case 'animais':
        palavras = animais;
        break;

    case 'lugares':
        palavras = lugares;
        break;

    case 'cores':
        palavras = cores;
        break;

    case 'objetos':
        palavras = objetos;
        break;
  }
}

let palavra = gerarPalavraAleatoria[Math.floor(Math.random() * palavras.length)];

let palavraEscondida = "_ ".repeat(palavra.length);

let palavraParaMostrar = document.getElementById("painel");
palavraParaMostrar.innerHTML = palavraEscondida;


// Obtém o elemento de categoria
const categoriaDica = document.getElementById('categoriaDica');

// Define o valor da categoria
const categorias = ['Frutas', 'Animais', 'lugares', 'Cores', 'objetos'];
const categoria = categorias[Math.floor(Math.random() * categorias.length)];
categoriaDica.textContent = `${categoria}`;


// Definindo o número de tentativas
let tentativas = 6;
let letrasEscolhidas = [];

function verificarTentativa(letra) {
  if (letrasEscolhidas.includes(letra)) {
    alert("Você já escolheu essa letra!");
    return;
  }
  letrasEscolhidas.push(letra);
  let letraCorreta = false;
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === letra) {
      palavraEscondida = palavraEscondida.substring(0, i) + letra + palavraEscondida.substring(i+1);
      letraCorreta = true;
    }
  }
  if (!letraCorreta) {
    tentativas--;
  }
}


// Definição do teclado e verificação para que cada letra seja inserida apenas uma vez
const painel = document.getElementById('painel');

let letrasInseridas = '';

function insert(letra) {
 
  if (!letrasInseridas.includes(letra)) {
    painel.textContent += letra;
    letrasInseridas += letra;
  }
}

// botões inativos após o click
const botoes = document.querySelectorAll('.botoes');

botoes.forEach(botao => {
  botao.onclick = () => {
    const letra = botao.textContent;
    insert(letra);
  };
  
});

function insert(letra) {
    var painel = document.getElementById("painel");
    var botao = event.target;
    if (!painel.innerHTML.includes(letra)) {
      painel.innerHTML += letra;
      botao.classList.add("ativo");
      botao.setAttribute("disabled", true);
    }
}