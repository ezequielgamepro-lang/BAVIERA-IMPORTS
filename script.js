const telefone = "554799644445"; //

const radios = document.querySelectorAll('input[name="produto"]');
const btn = document.getElementById("btnWhats");

let modeloSelecionado = "";
let precoSelecionado = "";

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    modeloSelecionado = radio.dataset.modelo;
    precoSelecionado = radio.dataset.preco;
    btn.disabled = false;
  });
});

btn.addEventListener("click", () => {
  const mensagem = `Olá! Tenho interesse no ${modeloSelecionado} pelo valor de ${precoSelecionado}.`;
  const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, "_blank");
});
