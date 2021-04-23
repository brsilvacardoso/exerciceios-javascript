var nota1 = 1.0;
var nota2 = 7.0;

var media = (nota1 + nota2) / 2;

var conceito = ""

if (media <= 4.0)
{
  conceito = "Ruim"
}

else if (media <= 6.0) {
  conceito = "Regular"
}

else if (media <= 8.0) {
  conceito = "Bom"
}

else{
  conceito = "Ótimo"
}


console.log('A média foi ', media)
console.log('O conceito foi', conceito)
