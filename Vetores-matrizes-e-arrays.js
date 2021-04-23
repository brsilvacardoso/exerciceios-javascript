var matriz = []

matriz [0] = "Didi"
matriz [1] = "Dede"
matriz [2] = "Zacarias"
matriz [3] = "Mussum"

alunos = ["Didi", "Dede", "Zacarias","Mussum"]


notas = [ [4.5, 5.5], [8.9, 9.9], [7.3, 7.2], [7.4, 9.5] ]

alunoSelecionado = 0

nomeDoAluno = alunos [alunoSelecionado]
notaDosAlunos = notas [alunoSelecionado]

nota1 = notaDosAlunos[0]
nota2 = notaDosAlunos[1]

media = (nota1 + nota2) / 2

console.log(nomeDoAluno)
console.log("A primeira foi:", nota1)
console.log("A primeira foi:", nota2)
console.log(nomeDoAluno, "teve média de:", media)
