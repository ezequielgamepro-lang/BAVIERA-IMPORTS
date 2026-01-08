const telefone = "5547999123456"; // número correto (Brasil)
const cards = document.querySelectorAll(".card");
const botao = document.getElementById("whats");
const contador = document.getElementById("contador");

let modeloSelecionado = "";
let precoSelecionado = "";

cards.forEach(card => {
  card.addEventListener("pointerdown", (e) => {
    e.preventDefault(); // evita clique fantasma no mobile

    const jaSelecionado = card.classList.contains("selecionado");

    // efeito de afundar
    card.classList.add("afundado");
    setTimeout(() => card.classList.remove("afundado"), 120);

    // limpa seleção
    cards.forEach(c => c.classList.remove("selecionado"));

    if (jaSelecionado) {
      modeloSelecionado = "";
      precoSelecionado = "";
    } else {
      card.classList.add("selecionado");
      modeloSelecionado = card.dataset.modelo;
      precoSelecionado = card.dataset.preco;
    }

    // Atualiza contador do lado do WhatsApp
    const totalSelecionados = document.querySelectorAll(".card.selecionado").length;
    contador.textContent = totalSelecionados > 0 ? totalSelecionados : "";
  });
});

// botão WhatsApp
botao.addEventListener("click", () => {
  if (!modeloSelecionado) {
    alert("Selecione um modelo primeiro");
    return;
  }

  const mensagem = `Olá! Tenho interesse no ${modeloSelecionado} pelo valor de ${precoSelecionado}.`;
  const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
});
