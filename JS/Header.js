function abrirMenu() {
  let menuJs = document.querySelector(".opcoesMenu-hamburguer");

  if (menuJs.style.display == "none") {
    menuJs.style.display = "flex";
  }
}

function fecharMenu() {
  let menuJs = document.querySelector(".opcoesMenu-hamburguer");

  if (menuJs.style.display == "flex") {
    menuJs.style.display = "none";
  }
}
