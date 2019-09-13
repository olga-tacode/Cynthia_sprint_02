const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const buttonAcept = document.getElementById("aceptName");
const name = document.getElementById("name").value;
const userName = document.getElementById("userName");
const home = document.getElementById("home");
const svgFirst = document.getElementById("svg-first");

const questions = [
  {
    question: "¿Qué es SVG?",
    answers: {
      a: "Un tipo de gráfico vectorial",
      b: "Una imagen",
      c: "Un documento HTML"
    },
    rightAnswer: "a"
  },
  {
    question: "¿Qué formato tiene?",
    answers: {
      a: "CSS",
      b: "XML",
      c: "SMIL"
    },
    rightAnswer: "b"
  },
  {
    question: "Los SVGs:",
    answers: {
      a: "Pierden calidad",
      b: "Son mapas de bits",
      c: "Mantiene la calidad"
    },
    rightAnswer: "c"
  }
];

function showQuiz() {
  const output = [];

  questions.forEach((question, questionNumber) => {
    //-------Answers-----------------
    const answers = [];
    for (letter in question.answers) {
      answers.push(
        `<p>
            <label>
              <input  class="with-gap" name="question${questionNumber}" value="${letter}" type="radio"/>
             <span> ${question.answers[letter]}</span>
            </label>
          </p>`
      );
    }

    //-------Questions + Answers----------
    output.push(
      `<div class="question"><h5>${question.question}</h5></div>
        <div class="answers"> ${answers.join("")} </div>`
    );
  });
  //quizContainer.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");

  let numCorrect = 0;

  questions.forEach((question, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = "input[name=question" + questionNumber + "]:checked";
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === question.rightAnswer) {
      numCorrect++;
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + " de " + questions.length;
}

showQuiz();
//submitButton.addEventListener("click", showResults);

const nameOf = () => {
  console.log(name);
  userName.innerHTML = name;
  home.classList.add("hide");
  svgFirst.classList.remove("hide");
};

buttonAcept.addEventListener("click", nameOf);
