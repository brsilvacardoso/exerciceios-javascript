var receitaLiquida = 100.000;
var custoProduto = 70.000;

var lucroBruto = (receitaLiquida - custoProduto);

var margemBruta = (lucroBruto / receitaLiquida) * 100;


//console.log(margemBruta);

function margemBruta(receitaLiquida, custoProduto){
  lucroBruto = receitaLiquida - custoProduto
  return (lucroBruto / receitaLiquida) * 100
  console.log(margemBruta);
}

console.log(margemBruta);
