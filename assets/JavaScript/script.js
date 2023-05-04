// Criação da categoria
const cores = ['dourado', 'azul marinho', 'esmeralda', 'marsala', 'magenta'];
const palavraSecreta =  cores[Math.floor(Math.random() * cores.length)];




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

function atualizarForca() {
  if (erros == 1) {
      forcaDiv.style.backgroundImage = "url('../imagens/imagem-2.png')";
  } else if (erros == 2) {
      forcaDiv.style.backgroundImage = "url('../imagens/imagem-3.png')";
  } else if (erros == 3) {
      forcaDiv.style.backgroundImage = "url('../imagens/imagem-4.png')";
  } else if (erros == 4) {
      forcaDiv.style.backgroundImage = "url('../imagens/imagem-5.png')";
  } else if (erros == 5) {
      forcaDiv.style.backgroundImage = "url('../imagens/imagem-6.png')";
  } else if (erros == 6) {
      forcaDiv.style.backgroundImage = "url('../imagens/imagem-7.png')";
      alert('Você perdeu!');
  }else {
      erros++;
      atualizarForca();
  }
} 	

letraDiv.classList.add('selecionada');
letrasDiv.appendChild(letraDiv);

if (letrasSelecionadas.length == palavraSorteada.length) {
  alert('Você ganhou!');
}

letrasDiv.appendChild(letraDiv);

exibirPalavra();
exibirLetras();

if (palavraSorteada.includes(letras[i])) {
  for (let j = 0; j < palavraSorteada.length; j++) {
    if (palavraSorteada[j] === letras[i]) {
      palavraEscondida[j] = letras[i];
    }
  }
  palavraDiv.innerHTML = '';
  for (let k = 0; k < palavraEscondida.length; k++) {
    let letraDiv = document.createElement('div');
    letraDiv.classList.add('letra');
    letraDiv.innerHTML = palavraEscondida[k];
    palavraDiv.appendChild(letraDiv);
  }
} else {
  erros++;
  atualizarForca();
}*/