const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const buttonAcept = document.getElementById("aceptName");
const homeSection = document.getElementById("home");
const svgOne = document.getElementById("svg-first");
const svgTwo = document.getElementById("svg-second");
const svgThree = document.getElementById("svg-third");
const svgFour = document.getElementById("svg-fourth");
const svgFive = document.getElementById("svg fifth");
const svgSix = document.getElementById("svg-sixth");
const svgSeven = document.getElementById("svg-seventh");
const svgEight = document.getElementById("svg-eighth");
const svgNine = document.getElementById("svg-nineth");
const buttonOneSvg = document.getElementById("one-svg");
const buttonTwoSvg = document.getElementById("two-svg");
const buttonThreeSvg = document.getElementById("three-svg");
const buttonFourSvg = document.getElementById("four-svg");
const buttonFiveSvg = document.getElementById("five-svg");
const buttonSixSvg = document.getElementById("six-svg");
const buttonSevenSvg = document.getElementById("seven-svg");
const buttonEightSvg = document.getElementById("svg-eight");
const buttonNineSvg = document.getElementById("nine-svg");

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
  svgTwo.classList.add("hide");
  svgThree.classList.remove("hide");
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
  svgThree.classList.add("hide");
  svgFour.classList.remove("hide");
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
buttonEightSvg.addEventListener("click", moveSvgEight);

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
