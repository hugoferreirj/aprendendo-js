function cadastrarBolo(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const descricao = document.getElementById("descricao").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const preco = parseFloat(document.getElementById("preco").value);

  const produtos = document.getElementById("m");

  const divBolos = document.createElement("div");
  divBolos.classList.add("bolos");

  const divImg = document.createElement("div");
  divImg.classList.add("img");

  const img = document.createElement("img");
  img.src = sorteiaImagem();
  img.style.width = "100%";
  divImg.appendChild(img);

  const divText = document.createElement("div");
  divText.classList.add("text");

  const pNome = document.createElement("p");
  pNome.style.fontWeight = "bold";
  pNome.innerText = nome;

  const pDescricao = document.createElement("p");
  pDescricao.innerText = descricao;

  const pPeso = document.createElement("p");
  pPeso.innerText = "Peso: " + peso + "kg";

  const pPreco = document.createElement("p");
  pPreco.innerText = "Preço: R$" + preco.toFixed(2).replace(".", ",");

  const buttonRemover = document.createElement("button");
  buttonRemover.type = "button";
  buttonRemover.classList.add("remover-bolo");
  buttonRemover.innerText = "Remover Bolo";
  buttonRemover.addEventListener("click", () => removerBolo(divBolos));

  divText.appendChild(pNome);
  divText.appendChild(pDescricao);
  divText.appendChild(pPeso);
  divText.appendChild(pPreco);
  divText.appendChild(buttonRemover);

  divBolos.appendChild(divImg);
  divBolos.appendChild(divText);

  produtos.appendChild(divBolos);
}

function removerBolo(elemento) {
  const produtos = document.getElementById("m");
  produtos.removeChild(elemento);
}

function sorteiaImagem() {
  let frutas = [
    "abacaxi",
    "cenoura",
    "morango",
    "framboesa",
    "laranja",
    "pessego",
  ];

  var randomIndex = Math.floor(Math.random() * frutas.length);

  return "images/" + frutas[randomIndex] + ".png";
}
