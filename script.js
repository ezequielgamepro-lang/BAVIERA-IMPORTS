const telefone = "5547999123456"; // número correto

const cards = document.querySelectorAll(".card");
const btn = document.getElementById("whats");

let modelo = "";
let preco = "";

cards.forEach(card => {
  card.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("selecionado"));
    card.classList.add("selecionado");

    modelo = card.dataset.modelo;
    preco = card.dataset.preco;
  });
});

btn.addEventListener("click", () => {
  if (!modelo) return alert("Selecione um modelo primeiro");

  const msg = `Olá! Tenho interesse no ${modelo} pelo valor de ${preco}.`;
  const link = `https://wa.me/${telefone}?text=${encodeURIComponent(msg)}`;
  window.open(link, "_blank");
});
