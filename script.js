const alturaInput = document.getElementById("altura");
const pesoInput = document.getElementById("peso");
const imcValor = document.getElementById("imc-valor");
const classificacao = document.getElementById("classificacao");

const calcularIMC = () => {
  const altura = parseFloat(alturaInput.value);
  const peso = parseFloat(pesoInput.value);
  const imc = peso / (altura * altura / 10000);

  imcValor.textContent = imc.toFixed(2);

  if (imc < 18.5) {
    classificacao.textContent = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    classificacao.textContent = "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    classificacao.textContent = "Sobrepeso";
  } else if (imc >= 30 && imc < 35) {
    classificacao.textContent = "Obesidade grau I";
  } else if (imc >= 35 && imc < 40) {
    classificacao.textContent = "Obesidade grau II";
  } else {
    classificacao.textContent = "Obesidade grau III";
  }
};

document.getElementById("imc-form").addEventListener("submit", (e) => {
  e.preventDefault();
  calcularIMC();
});
