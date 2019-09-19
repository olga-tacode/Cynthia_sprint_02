const buttonAcept = document.getElementById("aceptName");
const homeSection = document.getElementById("home");
const svgOne = document.getElementById("svg-first");
const svgTwo = document.getElementById("svg-second");
const svgThree = document.getElementById("svg-third");
const svgFour = document.getElementById("svg-fourth");
const svgFive = document.getElementById("svg-fifth");
const svgSix = document.getElementById("svg-sixth");
const svgSeven = document.getElementById("svg-seventh");
const svgEight = document.getElementById("svg-eighth");
const svgNine = document.getElementById("svg-nineth");
const buttonOneSvg = document.getElementById("one-svg");
//const buttonTwoSvg = document.getElementById("two-svg");
//const buttonThreeSvg = document.getElementById("three-svg");
//const buttonFourSvg = document.getElementById("four-svg");
//const buttonFiveSvg = document.getElementById("five-svg");
const buttonSixSvg = document.getElementById("six-svg");
const buttonSevenSvg = document.getElementById("seven-svg");
//const buttonEightSvg = document.getElementById("svg-eight");
//const buttonNineSvg = document.getElementById("nine-svg");
const finalButton = document.getElementById("final-bttn");
//const submitButton = document.getElementById("submit");

const quizContainer = document.getElementById("quiz");
const quizContainerTwo = document.getElementById("quiz-two");
const quizContainerThree = document.getElementById("quiz-three");

const buttonTwoSvg = document.getElementById("two-svg");
const buttonThreeSvg = document.getElementById("three-svg");
const buttonFourSvg = document.getElementById("four-svg");
const buttonFiveSvg = document.getElementById("five-svg");
const buttonEightSvg = document.getElementById("svg-eight");
const buttonNineSvg = document.getElementById("nine-svg");

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

buttonTwoSvg.addEventListener("click", showQuiz(questions, quizContainer));
buttonFourSvg.addEventListener(
  "click",
  showQuiz(questionTwo, quizContainerTwo)
);
submitButton.addEventListener(
  "click",
  showQuiz(questionThree, quizContainerThree)
);

buttonThreeSvg.addEventListener("click", function(event) {
  event.preventDefault();

  showResults(questions, quizContainer);
});

buttonFiveSvg.addEventListener("click", function(event) {
  event.preventDefault();
  showResults(questionTwo, quizContainerTwo);
});

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  showResults(questionThree, quizContainerThree);
  printResults();
});

buttonNineSvg.addEventListener("click", function(event) {
  event.preventDefault();
  showQuiz(questions, quizContainer);
  showQuiz(questionTwo, quizContainerTwo);
  showQuiz(questionTwo, quizContainerTwo);
  showQuiz(questionThree, quizContainerThree);
  numCorrect = 0;
});

const nameOf = () => {
  const name = document.getElementById("name").value;
  const userName = document.getElementById("userName");
  userName.innerHTML = "Hola " + name;
  homeSection.classList.add("hide");
  svgOne.classList.remove("hide");
  svgTwo.classList.add("hide");
  svgThree.classList.add("hide");
  svgFour.classList.add("hide");
  svgFive.classList.add("hide");
  svgSix.classList.add("hide");
  svgSeven.classList.add("hide");
  svgEight.classList.add("hide");
  svgNine.classList.add("hide");
};

buttonAcept.addEventListener("click", nameOf);

moveSvgOne = () => {
  homeSection.classList.add("hide");
  svgOne.classList.add("hide");
  svgTwo.classList.remove("hide");
  svgThree.classList.add("hide");
  svgFour.classList.add("hide");
  svgFive.classList.add("hide");
  svgSix.classList.add("hide");
  svgSeven.classList.add("hide");
  svgEight.classList.add("hide");
  svgNine.classList.add("hide");
};
buttonOneSvg.addEventListener("click", moveSvgOne);

moveSvgTwo = () => {
  homeSection.classList.add("hide");
  svgOne.classList.add("hide");
  svgTwo.classList.add("hide");
  svgThree.classList.remove("hide");
  svgFour.classList.add("hide");
  svgFive.classList.add("hide");
  svgSix.classList.add("hide");
  svgSeven.classList.add("hide");
  svgEight.classList.add("hide");
  svgNine.classList.add("hide");
};
buttonTwoSvg.addEventListener("click", moveSvgTwo);

moveSvgThree = () => {
  homeSection.classList.add("hide");
  svgOne.classList.add("hide");
  svgTwo.classList.add("hide");
  svgThree.classList.add("hide");
  svgFour.classList.remove("hide");
  svgFive.classList.add("hide");
  svgSix.classList.add("hide");
  svgSeven.classList.add("hide");
  svgEight.classList.add("hide");
  svgNine.classList.add("hide");
};
buttonThreeSvg.addEventListener("click", moveSvgThree);

moveSvgFour = () => {
  homeSection.classList.add("hide");
  svgOne.classList.add("hide");
  svgTwo.classList.add("hide");
  svgThree.classList.add("hide");
  svgFour.classList.add("hide");
  svgFive.classList.remove("hide");
  svgSix.classList.add("hide");
  svgSeven.classList.add("hide");
  svgEight.classList.add("hide");
  svgNine.classList.add("hide");
};
buttonFourSvg.addEventListener("click", moveSvgFour);

moveSvgFive = () => {
  homeSection.classList.add("hide");
  svgOne.classList.add("hide");
  svgTwo.classList.add("hide");
  svgThree.classList.add("hide");
  svgFour.classList.add("hide");
  svgFive.classList.add("hide");
  svgSix.classList.remove("hide");
  svgSeven.classList.add("hide");
  svgEight.classList.add("hide");
  svgNine.classList.add("hide");
};
buttonFiveSvg.addEventListener("click", moveSvgFive);

moveSvgSix = () => {
  homeSection.classList.add("hide");
  svgOne.classList.add("hide");
  svgTwo.classList.add("hide");
  svgThree.classList.add("hide");
  svgFour.classList.add("hide");
  svgFive.classList.add("hide");
  svgSix.classList.add("hide");
  svgSeven.classList.remove("hide");
  svgEight.classList.add("hide");
  svgNine.classList.add("hide");
};
buttonSixSvg.addEventListener("click", moveSvgSix);

moveSvgSeven = () => {
  homeSection.classList.add("hide");
  svgOne.classList.add("hide");
  svgTwo.classList.add("hide");
  svgThree.classList.add("hide");
  svgFour.classList.add("hide");
  svgFive.classList.add("hide");
  svgSix.classList.add("hide");
  svgSeven.classList.add("hide");
  svgEight.classList.remove("hide");
  svgNine.classList.add("hide");
};
buttonSevenSvg.addEventListener("click", moveSvgSeven);

moveSvgEight = () => {
  homeSection.classList.add("hide");
  svgOne.classList.add("hide");
  svgTwo.classList.add("hide");
  svgThree.classList.add("hide");
  svgFour.classList.add("hide");
  svgFive.classList.add("hide");
  svgSix.classList.add("hide");
  svgSeven.classList.add("hide");
  svgEight.classList.add("hide");
  svgNine.classList.remove("hide");
};
submitButton.addEventListener("click", moveSvgEight);

moveSvgNine = () => {
  homeSection.classList.add("hide");
  svgOne.classList.remove("hide");
  svgTwo.classList.add("hide");
  svgThree.classList.add("hide");
  svgFour.classList.add("hide");
  svgFive.classList.add("hide");
  svgSix.classList.add("hide");
  svgSeven.classList.add("hide");
  svgEight.classList.add("hide");
  svgNine.classList.add("hide");
};
buttonNineSvg.addEventListener("click", moveSvgNine);

finalMove = () => {
  document.location.reload();

  // window.location.reload(true);
};
finalButton.addEventListener("click", finalMove);
