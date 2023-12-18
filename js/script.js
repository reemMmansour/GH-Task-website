/*  ******************** Access To Elements - VARIABLES - ******************** */

let showAnswer_1 = document.querySelector(".show-answer-1");
let showAnswer_2 = document.querySelector(".show-answer-2");
let answer_1 = document.querySelector(".answer-1");
let answer_2 = document.querySelector(".answer-2");

// ------------------ Gender -------------------
let gender = document.querySelector(`.gender`);
let option = document.querySelector(`.option`);

// ------------------ Why are you contacting us? -------------------
let para = document.querySelector(`.para`);
let paraText = document.querySelector(`.para-text`);

// ------------------ Are You Case? -------------------
let case_ = document.querySelector(`.case`);
let optionCase = document.querySelector(`.option-case`);

// Display Answer
showAnswer_1.addEventListener("click", function () {
  answer_1.classList.toggle("show-answer");
  console.log("aa");
});
showAnswer_2.addEventListener("click", function () {
  answer_2.classList.toggle("show-answer");
  console.log("aa");
});

// Gender
gender.onclick = () => {
  if (option.style.display === "none") {
    option.style.display = "block";
  } else {
    option.style.display = "none";
  }
};

// Case
case_.onclick = () => {
  if (optionCase.style.display === "none") {
    optionCase.style.display = "block";
  } else {
    optionCase.style.display = "none";
  }
};

// Case
para.onclick = () => {
  if (paraText.style.visibility === "hidden") {
    paraText.style.visibility = "visible";
  } else {
    paraText.style.visibility = "hidden";
  }
};
