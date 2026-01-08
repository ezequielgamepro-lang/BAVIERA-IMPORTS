const telefone = "5547999123456"; // número correto (formato internacional)

const cards = document.querySelectorAll(".card");
const botao = document.getElementById("whats");

let modeloSelecionado = "";
let precoSelecionado = "";

// CARDS: toque, clique e seleção
cards.forEach(card => {

  // MOBILE: efeito de afundar
  card.addEventListener("touchstart", () => {
    card.classList.add("afundado");
  }, { passive: true });

  card.addEventListener("touchend", () => {
    card.classList.remove("afundado");
  });

  card.addEventListener("touchcancel", () => {
    card.classList.remove("afundado");
  });

  // SELEÇÃO / DESSELEÇÃO
  card.addEventListener("click", () => {
    const jaSelecionado = card.classList.contains("selecionado");

    // remove seleção de todos
    cards.forEach(c => c.classList.remove("selecionado"));

    if (jaSelecionado) {
      // desmarca
      modeloSelecionado = "";
      precoSelecionado = "";
    } else {
      // seleciona novo
      card.classList.add("selecionado");
      modeloSelecionado = card.dataset.modelo;
      precoSelecionado = card.dataset.preco;
    }
  });
});

// BOTÃO WHATSAPP
botao.addEventListener("click", () => {
  if (!modeloSelecionado) {
    alert("Selecione um modelo primeiro");
    return;
  }

  const mensagem = `Olá! Tenho interesse no ${modeloSelecionado} pelo valor de ${precoSelecionado}.`;
  const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
});
