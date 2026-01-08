const telefone = "5547999123456"; // número correto (Brasil)

const cards = document.querySelectorAll(".card");
const botao = document.getElementById("whats");

let modeloSelecionado = "";
let precoSelecionado = "";

cards.forEach(card => {
  card.addEventListener("pointerup", (e) => {
    e.preventDefault(); // evita clique fantasma no mobile

    const jaSelecionado = card.classList.contains("selecionado");

    // efeito de afundar
    card.classList.add("afundado");
    setTimeout(() => card.classList.remove("afundado"), 120);

    // limpa seleção
    cards.forEach(c => c.classList.remove("selecionado"));

    if (jaSelecionado) {
      // desmarca
      modeloSelecionado = "";
      precoSelecionado = "";
    } else {
      // seleciona
      card.classList.add("selecionado");
      modeloSelecionado = card.dataset.modelo;
      precoSelecionado = card.dataset.preco;
    }
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
