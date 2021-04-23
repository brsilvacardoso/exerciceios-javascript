var peso = 200;
var altura = 1.65


var imc = peso  / (altura ** 2);

var classificacao = "";
var grau = 0;

if (imc <= 18.5)
{
  classificacao = "magro"

} else if (imc < 25){
  classificacao = "normal"

} else if (imc < 30){
  classificacao = "com Sobrepeso"
  grau = 1

} else if (imc < 40){
  classificacao = "obeso"
  grau = 2

} else {
  classificacao = "obeso com gravidade"
  grau = 3
}

console.log("Seu IMC é " + imc)
console.log("Você é considerado " + classificacao)

if (grau > 0) {
  console.log("Cuidado! Você está acima do peso recomendado pela OMS.")

  if (grau == 3) {
    console.log("É importante procurar um médico para avaliar sua saúde.")
  }
}
