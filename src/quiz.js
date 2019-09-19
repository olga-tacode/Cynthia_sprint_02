const quizContainer = document.getElementById("quiz");
const quizContainerTwo = document.getElementById("quiz-two");
const quizContainerThree = document.getElementById("quiz-three");

const bttnNextTwo = document.getElementById("two-svg");
const bttnNextThree = document.getElementById("three-svg");
const bttnNextFour = document.getElementById("four-svg");
const bttnNextFive = document.getElementById("five-svg");
const bttnNextEight = document.getElementById("svg-eight");
const bttNextNine = document.getElementById("nine-svg");

const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

const congrats = document.getElementById("congrats");

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

const questionTwo = [
  {
    question: "",
    answers: {
      a: "Diseño reresposivo; Es facil de usar; Accesibilidad",
      b: "Accesibilidad; Performance; Se ve bonito",
      c: "Accesibilidad; Performance; Diseño responsivo"
    },
    rightAnswer: "c"
  }
];

const questionThree = [
  {
    question: "",
    answers: {
      a: "Definir figuras en nodos rectos",
      b: "Definir figuras diferentes, puntos y formas",
      c: "Definir figuras en curvas"
    },
    rightAnswer: "b"
  }
];

function showQuiz(questionsArray, quizContainer) {
  const output = [];

  questionsArray.forEach((question, questionNumber) => {
    //-------Answers-----------------
    const answers = [];
    for (letter in question.answers) {
      answers.push(
        `<p>
              <label>
                <input class="radio-bttn" name="question${questionNumber}" value="${letter}" type="radio"/>
               <span class="radio-input"> ${question.answers[letter]}</span>
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
  quizContainer.innerHTML = output.join("");
}

let numCorrect = 0;

function showResults(questionsArray, answers) {
  let answerContainers = answers.querySelectorAll(".answers");
  questionsArray.forEach((question, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    console.log(answerContainer);
    const selector = "input[name=question" + questionNumber + "]:checked";
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    //if (userAnswer === undefined) {
    //alert("regresa");
    //}
    if (userAnswer === question.rightAnswer) {
      numCorrect++;
    }
  });
  console.log(numCorrect);
}
const printResults = () => {
  if (numCorrect <= 2) {
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect}/5`;
    congrats.innerHTML = `
    <svg width="890" height="208" viewBox="0 0 890 208" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text fill="#F5C12D" stroke="#F5C12D" xml:space="preserve" style="white-space: pre" font-family="Nunito" font-size="92" letter-spacing="0.01em"><tspan x="114.56" y="83.268">&#xa1;Vamos a volver&#10;</tspan><tspan x="183.077" y="189.268"> a intentarlo!</tspan></text>
      <text stroke="black" xml:space="preserve" style="white-space: pre" font-family="Nunito" font-size="92" letter-spacing="0.01em"><tspan x="118.56" y="83.268">&#xa1;Vamos a volver&#10;</tspan><tspan x="187.077" y="189.268"> a intentarlo!</tspan></text>
    </svg>`;
  } else {
    resultsContainer.innerHTML = `${numCorrect}/5`;
    congrats.innerHTML = `
    <svg width="689" height="147" viewBox="0 0 689 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text fill="#F5C12D" stroke="#F5C12D" xml:space="preserve" style="white-space: pre" font-family="Nunito"
                    font-size="124" letter-spacing="0.01em">
                    <tspan x="0" y="112.296">&#xa1;Felicidades!</tspan>
                </text>
                <text stroke="black" xml:space="preserve" style="white-space: pre" font-family="Nunito" font-size="124"
                    letter-spacing="0.01em">
                    <tspan x="3" y="116.296">&#xa1;Felicidades!</tspan>
                </text>
            </svg>`;
  }
};

bttnNextTwo.addEventListener("click", showQuiz(questions, quizContainer));
bttnNextFour.addEventListener("click", showQuiz(questionTwo, quizContainerTwo));
submitButton.addEventListener(
  "click",
  showQuiz(questionThree, quizContainerThree)
);

bttnNextThree.addEventListener("click", function(event) {
  event.preventDefault();

  showResults(questions, quizContainer);
});

bttnNextFive.addEventListener("click", function(event) {
  event.preventDefault();
  showResults(questionTwo, quizContainerTwo);
});

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  showResults(questionThree, quizContainerThree);
  printResults();
});

bttNextNine.addEventListener("click", function(event) {
  event.preventDefault();
  showQuiz(questions, quizContainer);
  showQuiz(questionTwo, quizContainerTwo);
  showQuiz(questionTwo, quizContainerTwo);
  showQuiz(questionThree, quizContainerThree);
  numCorrect = 0;
});
