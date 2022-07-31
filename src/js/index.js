/*
OBJETIVO 1 - Quando clicar em avançar o próximo cartão da pilha deverá aparecer.
    - passo 1 - dar um jeito de pegar o elemento HTMML da seta avançar.
    - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar.
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que está selecionado e esconder ele.

OBJETIVO 2 - Quando clicar em voltar o próximo cartão da pilha deverá aparecer.
    - passo 1 - dar um jeito de pegar o elemento HTMML da seta voltar.
    - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar.
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que está selecionado e esconder ele.    
*/

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}


btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});


btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});
