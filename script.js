const telefone = "5547999123456";
const catalogo = document.querySelector(".catalogo");
const botaoWhats = document.getElementById("whats");
const contador = document.getElementById("contador");
const botaoOrdenar = document.getElementById("ordenar");

let cards = Array.from(document.querySelectorAll(".card"));
let selecionados = new Set();
let ordemCrescente = true;

// ================================
// FUNÇÃO PARA PEGAR PREÇO NUMÉRICO
// ================================
function getPreco(card) {
  return parseFloat(
    card.dataset.preco.replace("R$", "").replace(".", "").replace(",", ".")
  );
}

// ================================
// ORDENAÇÃO
// ================================
function ordenarCards() {
  cards.sort((a, b) => {
    return ordemCrescente
      ? getPreco(a) - getPreco(b)
      : getPreco(b) - getPreco(a);
  });

  cards.forEach(card => catalogo.appendChild(card));

  botaoOrdenar.textContent = ordemCrescente
    ? "Ordenar por preço ↓"
    : "Ordenar por preço ↑";
}

botaoOrdenar.addEventListener("click", () => {
  ordemCrescente = !ordemCrescente;
  ordenarCards();
});

// ordena ao carregar (menor → maior)
ordenarCards();

// ================================
// SELEÇÃO MÚLTIPLA
// ================================
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

// ================================
// WHATSAPP
// ================================
botaoWhats.addEventListener("click", () => {
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

// ================================
// ANIMAÇÕES DE ENTRADA
// ================================
window.addEventListener("load", () => {
  document.querySelector(".topo").classList.add("mostrar");
  document.querySelector(".infos").classList.add("mostrar");
  document.querySelector("h2").classList.add("mostrar");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("mostrar");
    }, index * 120);
  });
});
