// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

var diceMovement = function(valor, quantidade) {
  var soma = 0;
  for(var index = 0; index < quantidade; index++){
    soma += Math.ceil(Math.random() * valor);
  }
  return soma;
}

document.getElementById('rolar').addEventListener('click', function(){
  var dices = [4,6,8,10,12,20],
      sum = 0,
      values = [];
  dices.forEach(function(val){
    var id = 'quantidadeD'+val;
    var qnt = document.getElementById(id).value;
    var result = diceMovement(val, qnt);
    sum += result;
    values.push(result);
	});

  document.getElementById('recipienteResultados').classList.remove('oculto');
  document.getElementById('resultado').innerHTML = values + "\n soma = " + sum;
});