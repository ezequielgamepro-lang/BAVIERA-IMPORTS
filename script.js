const produtos = [
  { nome: "iPhone 12", memoria: "64GB", cor: "Preto", bateria: "75%", preco: "R$ 1.550" },
  { nome: "iPhone 13", memoria: "128GB", cor: "Preto", bateria: "85%", preco: "R$ 2.299" },
  { nome: "iPhone 14", memoria: "128GB", cor: "Preto", bateria: "100%", preco: "R$ 2.499" },
  { nome: "iPhone 14", memoria: "128GB", cor: "Preto", bateria: "100%", preco: "R$ 2.599" },
  { nome: "iPhone 15 Pro", memoria: "128GB", cor: "Black Titanium", bateria: "81%", preco: "R$ 3.699" }
];

const container = document.getElementById("produtos");

produtos.forEach(p => {
  const msg = encodeURIComponent(`Olá, quero o ${p.nome} ${p.memoria} da Baviera Imports.`);
  container.innerHTML += `
    <div class="card">
      <h3>${p.nome} ${p.memoria}</h3>
      <p>Cor: ${p.cor}</p>
      <p>Bateria: ${p.bateria}</p>
      <div class="preco">${p.preco}</div>
      <a class="btn-whatsapp" href="https://wa.me/55479965444445?text=${msg}" target="_blank">Comprar via WhatsApp</a>
    </div>
  `;
});
