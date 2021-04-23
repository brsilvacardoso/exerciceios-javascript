
// Variáveis

var niveis = ["Muito abaixo do peso",
              "Abaixo do peso",
              "Peso normal",
              "Acima do peso",
              "Obesidade grau 1",
              "Obesidade grau 2",
              "Obesidade grau 3"]


let pessoas = ["Chaves", "Kiko", "Chiquinha", "Nhonho", "Godines"]
let massas = [50, 70, 50, 100, 65]
let alturas = [1.65, 1.70, 1.50, 1.70, 1.65]

 

// Funções

function calcularIMC(massa, altura){

  var imc = massa/(altura **2)

  return imc
}
 {}
function verificaNivel (imc){

  let nivel = 0

if (imc < 17){
  nivel = 0
} else if (imc < 18.5) {
  nivel = 1
} else if (imc < 25) {
  nivel = 2
} else if (imc < 30) {
  nivel = 3
} else if (imc < 35) {
  nivel = 4
} else if (imc < 40) {
  nivel = 5
}else {
  nivel = 6
}

return nivel

}

// Execução do Código

for (let = indice = 0; indice < pessoas.length; indice++){

//let indice = 0
let pessoa = pessoas[indice]
let massa = massas[indice]
let altura = alturas[indice]

var imc = calcularIMC(massa,altura)
var nivel = verificaNivel(imc)

console.log("Nome: " + pessoa)
console.log("Peso: " + massa)
console.log("Altura: " + altura)
console.log("IMC " + imc.toFixed(2))
console.log("Situação: " + niveis[nivel])
console.log("")
}
