body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f2f2f2;
}

.catalogo {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.card {
  background: #fff;
  border-radius: 14px;
  border: 2px solid #ddd;
  cursor: pointer;
  transition: 0.2s;
}

.card.selecionado {
  border: 2px solid #000;
}

.card input {
  display: none;
}

.conteudo {
  padding: 15px;
}

.linha {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.radio {
  width: 18px;
  height: 18px;
  border: 2px solid #999;
  border-radius: 50%;
}

.card.selecionado .radio {
  background: #000;
  border-color: #000;
}

#btnWhats {
  margin: 20px;
  padding: 15px;
  font-size: 16px;
  background: #25d366;
  color: #fff;
  border: none;
  border-radius: 12px;
}

#btnWhats:disabled {
  background: #aaa;
}
