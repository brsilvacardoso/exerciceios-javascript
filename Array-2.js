var campeonatos = ["Libertadores", "Copa do Brasil", "Brasileirão", "Gauchão", "Sulamericana"]

var index = 0

for(index = 0; index < campeonatos.length; index++){
console.info(campeonatos[index])
}


exercício02

var numeros = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]

soma = 0

for(index = 0; index < numeros.length; index++){
  soma += numeros[index]
}

media = soma / numeros.length
console.log(media)
