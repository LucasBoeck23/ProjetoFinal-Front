const formEl = document.getElementById("formulario");

formEl.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);

  //mock api
  const url = "https://6633f131f7d50bbd9b4b2802.mockapi.io/dados";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});

document.getElementById("comprar").addEventListener("click", function () {
  alert("Conta criada com sucesso!");
});

//Array com opções
var opcoes = [
  "Escolher...",
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
];

const estado = document.getElementById("inputEstado");

for (let i = 0; i < opcoes.length; i++) {
  const opcaoEl = document.createElement("option");

  // atribui o array
  const item = opcoes[i];

  //processo
  opcaoEl.innerText = item;
  estado?.appendChild(opcaoEl);
}
