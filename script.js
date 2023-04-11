const botao = document.querySelector('#buttonAdd');
const lista = document.querySelector('#lista');

const form = document.querySelector('#form');
const total = document.querySelector('#total');

let valorTotal = 0;
total.innerText = `Total: R$ ${valorTotal.toFixed(2)}`;
botao.addEventListener('click', function(event) {
  event.preventDefault();

  const produto = document.querySelector('#produto').value.toUpperCase();
  const valor = +document.querySelector('#valor').value;

  if (produto !== '' && valor !== '') {
    const novoItem = document.createElement('li');
    novoItem.innerText = `${produto} - R$ ${valor}`;
    lista.appendChild(novoItem);
    form.reset();

    const botaoRemover = document.createElement('button');
    botaoRemover.innerText = 'Remover';
    botaoRemover.addEventListener('click', function(event) {
      valorTotal -= valor;
      total.innerText = `Total: R$ ${valorTotal.toFixed(2)}`;
      novoItem.remove();
    });

    novoItem.appendChild(botaoRemover);

  } else {
    alert('Por favor, preencha os campos de produto e valor.');
  }

  valorTotal += valor
  total.innerText = `Total: R$ ${valorTotal.toFixed(2)}`;
});
const botaoLimpar = document.querySelector('#limp')
botaoLimpar.addEventListener('click', function(event) {
    lista.innerHTML = "";
    valorTotal = 0;
    total.innerText = `Total: R$ ${valorTotal.toFixed(2)}`;
  });

