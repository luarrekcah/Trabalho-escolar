import React, { useState } from "react";
import './App.css';


const questions = [
  {
  questionText: 'Quantos anos chernobyl ficará contaminado após o acidente nuclear',
  answerOptions: [
    {answerText: '3000 anos', isCorrect: true},
    {answerText: '1700 anos', isCorrect: false},
    {answerText: '2500 anos', isCorrect: false},
    {answerText: '5000 anos', isCorrect: false},
  ],
  },
  {
    questionText: 'Qual foi o primeiro país a detectar a radiação de  na Ucrânia',
    answerOptions: [
      {answerText: 'Rússia', isCorrect: false},
      {answerText: 'Alemanha', isCorrect: false},
      {answerText: 'Suécia', isCorrect: true},
      {answerText: 'Inglaterra', isCorrect: false},
    ],
    },
    {
      questionText: 'Porquê Chernobyl é perigoso',
      answerOptions: [
        {answerText: 'Por causa da alta contaminação por irradiação', isCorrect: false},
        {answerText: 'Por causa da alta contaminação por tétano', isCorrect: false},
        {answerText: 'Por conta das queimadas no local', isCorrect: false},
        {answerText: 'Por causa da radiação emitida na explosão do núcleo', isCorrect: true},
      ],
      },
      {
      questionText: 'Porquê Fukushima explodiu',
      answerOptions: [
        {answerText: 'Por conta de um furacão na região que desestabilizou o núcleo da usina nuclear', isCorrect: false},
        {answerText: 'Por causa de um terremoto seguido de um tsunami que provocou um vazamento na usina nuclear', isCorrect: true},
        {answerText: 'Por causa de um superaquecimento das barras de urânio', isCorrect: false},
        {answerText: 'Por causa de testes do potencial da usina que desestabilizou e superaqueceu as barras de Urânio', isCorrect: false},
      ],
      }
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Você pontuou {score} de {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Questão {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
