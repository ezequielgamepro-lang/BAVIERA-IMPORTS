const telefone = "5547996544445";

const cards = document.querySelectorAll(".card");
const botao = document.getElementById("whats");
const contador = document.getElementById("contador");

let selecionados = [];

// Atualiza contador
function atualizarContador() {
  const total = selecionados.length;

  if (total === 0) {
    contador.classList.remove("ativo");
    contador.textContent = "0";
    return;
  }

  contador.textContent = total;
  contador.classList.add("ativo");

  contador.classList.remove("pulse");
  void contador.offsetWidth;
  contador.classList.add("pulse");
}

// Cards
cards.forEach(card => {
  card.addEventListener("pointerup", (e) => {
    e.preventDefault();

    const modelo = card.dataset.modelo;
    const preco = card.dataset.preco;

    card.classList.add("afundado");
    setTimeout(() => card.classList.remove("afundado"), 120);

    if (card.classList.contains("selecionado")) {
      card.classList.remove("selecionado");
      selecionados = selecionados.filter(p => p.modelo !== modelo);
    } else {
      card.classList.add("selecionado");
      selecionados.push({ modelo, preco });
    }

    atualizarContador();
  });
});

// WhatsApp
botao.addEventListener("click", () => {
  if (selecionados.length === 0) {
    alert("Selecione pelo menos um iPhone");
    return;
  }

  const lista = selecionados
    .map(p => `• ${p.modelo} - ${p.preco}`)
    .join("\n");

  const mensagem = `Olá! Tenho interesse nos seguintes iPhones:\n\n${lista}`;
  const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
});
