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
const buttonTwoSvg = document.getElementById("two-svg");
const buttonThreeSvg = document.getElementById("three-svg");
const buttonFourSvg = document.getElementById("four-svg");
const buttonFiveSvg = document.getElementById("five-svg");
const buttonSixSvg = document.getElementById("six-svg");
const buttonSevenSvg = document.getElementById("seven-svg");
const buttonEightSvg = document.getElementById("svg-eight");
const buttonNineSvg = document.getElementById("nine-svg");

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
  // document.location.reload();location.hash = "#svg-third";
  //window.location.hash = "#svg-third";
  // window.location.reload(true);
};
buttonNineSvg.addEventListener("click", moveSvgNine);
