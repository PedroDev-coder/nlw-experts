const perguntas = [
    {
      pergunta: "Qual é a linguagem de programação principal para desenvolvimento web?",
      respostas: [
        "Java",
        "Python",
        "JavaScript",
      ],
      correta: 2 // Resposta C - JavaScript
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      correta: 2 // Resposta C - const myVar;
    },
    {
      pergunta: "Qual função é usada para imprimir mensagens no console em JavaScript?",
      respostas: [
        "log()",
        "print()",
        "console.log()",
      ],
      correta: 2 // Resposta C - console.log()
    },
    {
      pergunta: "O que é um loop em JavaScript?",
      respostas: [
        "Uma maneira de criar repetição em um programa",
        "Uma função que retorna um valor",
        "Um método de classificação de arrays",
      ],
      correta: 0 // Resposta A - Uma maneira de criar repetição em um programa
    },
    {
      pergunta: "Qual operador é usado para comparar se dois valores são iguais em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1 // Resposta B - ===
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um tipo de estrutura de dados",
        "Uma linguagem de programação",
        "Uma interface para interagir com documentos HTML",
      ],
      correta: 2 // Resposta C - Uma interface para interagir com documentos HTML
    },
    {
      pergunta: "Qual é a função do operador '&&' em JavaScript?",
      respostas: [
        "Operador de adição",
        "Operador de negação",
        "Operador lógico 'E'",
      ],
      correta: 2 // Resposta C - Operador lógico 'E'
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de loop",
        "Um trecho de código que pode ser chamado repetidamente",
        "Um operador de comparação",
      ],
      correta: 1 // Resposta B - Um trecho de código que pode ser chamado repetidamente
    },
    {
      pergunta: "Qual é a maneira correta de comentar uma única linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0 // Resposta A - // Este é um comentário
    },
    {
      pergunta: "Qual é o método que podemos usar para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0 // Resposta A - push()
    },
  ];
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostraTotal = document.querySelector('#acertos span')
  mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    //alert(item.pergunta)
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
  
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        //alert(corretas.size)
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
  }