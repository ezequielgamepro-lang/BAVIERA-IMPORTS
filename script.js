const telefone = "5547992184182";

const cards = document.querySelectorAll(".card");
const botao = document.getElementById("whats");
const contador = document.getElementById("contador");

let selecionados = new Set();

function toggleCard(card) {
  card.classList.add("afundado");
  setTimeout(() => card.classList.remove("afundado"), 120);

  if (card.classList.contains("selecionado")) {
    card.classList.remove("selecionado");
    selecionados.delete(card);
  } else {
    card.classList.add("selecionado");
    selecionados.add(card);
  }

  contador.textContent = selecionados.size > 0 ? selecionados.size : "";
}

cards.forEach(card => {
  card.addEventListener("pointerdown", e => {
    e.preventDefault();
    toggleCard(card);
  });
});

botao.addEventListener("click", () => {
  if (selecionados.size === 0) {
    alert("Selecione pelo menos um modelo");
    return;
  }

  let mensagem = "Olá! Tenho interesse nos seguintes modelos:\n";
  selecionados.forEach(card => {
    mensagem += `- ${card.dataset.modelo} pelo valor de ${card.dataset.preco}\n`;
  });

  window.open(
    `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`,
    "_blank"
  );
});

window.addEventListener("load", () => {
  document.querySelector(".topo").classList.add("mostrar");
  document.querySelector(".infos").classList.add("mostrar");
  document.querySelector("h2").classList.add("mostrar");

  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add("mostrar"), i * 120);
  });
});
