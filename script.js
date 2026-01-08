const numeroWhatsapp = "55479965444445";

const iphones = [
  { modelo: "iPhone 12", memoria: "64GB", cor: "Preto", bateria: "75%", preco: "R$ 1.550" },
  { modelo: "iPhone 13", memoria: "128GB", cor: "Preto", bateria: "85%", preco: "R$ 2.299" },
  { modelo: "iPhone 14", memoria: "128GB", cor: "Preto", bateria: "100%", preco: "R$ 2.499" },
  { modelo: "iPhone 14", memoria: "128GB", cor: "Preto", bateria: "100%", preco: "R$ 2.599" },
  { modelo: "iPhone 15 Pro", memoria: "128GB", cor: "Black Titanium", bateria: "81%", preco: "R$ 3.699" }
];

const lista = document.getElementById("lista");
const btnWhatsapp = document.getElementById("btnWhatsapp");

iphones.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${item.modelo} ${item.memoria}</h3>
    <div class="info">Cor: ${item.cor}</div>
    <div class="info">Bateria: ${item.bateria}</div>
    <div class="price">${item.preco}</div>
  `;

  card.onclick = () => {
    document.querySelectorAll(".card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");

    const mensagem = encodeURIComponent(
      `Olá, tenho interesse no ${item.modelo} ${item.memoria} (${item.cor}) da Baviera Imports.`
    );

    btnWhatsapp.href = `https://wa.me/${numeroWhatsapp}?text=${mensagem}`;
    btnWhatsapp.style.display = "flex";
  };

  lista.appendChild(card);
});
