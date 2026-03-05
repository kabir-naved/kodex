const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");
const screen3 = document.querySelector("#screen3");

const startBtn = document.querySelector(".start-btn");

const nameInput = document.querySelector("#name");
const displayName = document.querySelector("#displayName");
const resultName = document.querySelector("#resultName");

const age = document.querySelector("#age");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const gender = document.querySelector("select");

const form = document.querySelector("form");

const bmiValue = document.querySelector("#bmiValue");
const bmiStatus = document.querySelector("#bmiStatus");
const userInfo = document.querySelector("#userInfo");
const goal = document.querySelector("#goal");

/* ERROR SPANS */

const ageError = document.querySelector("#ageError");
const heightError = document.querySelector("#heightError");
const weightError = document.querySelector("#weightError");

/* SCREEN 1 → SCREEN 2 */

startBtn.addEventListener("click", () => {
  if (nameInput.value.trim() === "") {
    alert("Please enter your name");
    return;
  }

  displayName.textContent = nameInput.value;
  resultName.textContent = nameInput.value;

  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");
});

/* SCREEN 2 → SCREEN 3 */

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  /* CLEAR OLD ERRORS */

  ageError.textContent = "";
  heightError.textContent = "";
  weightError.textContent = "";

  /* AGE VALIDATION */

  if (age.value === "") {
    ageError.textContent = "Age is required";
    isValid = false;
  } else if (Number(age.value) <= 0) {
    ageError.textContent = "Age must be positive";
    isValid = false;
  }

  /* HEIGHT VALIDATION */

  if (height.value === "") {
    heightError.textContent = "Height is required";
    isValid = false;
  } else if (Number(height.value) <= 0) {
    heightError.textContent = "Height must be positive";
    isValid = false;
  }

  /* WEIGHT VALIDATION */

  if (weight.value === "") {
    weightError.textContent = "Weight is required";
    isValid = false;
  } else if (Number(weight.value) <= 0) {
    weightError.textContent = "Weight must be positive";
    isValid = false;
  }

  /* STOP IF INVALID */

  if (!isValid) return;

  /* BMI FORMULA */

  const h = height.value / 100;
  const w = weight.value;

  const bmi = w / (h * h);

  const bmiRounded = bmi.toFixed(2);

  bmiValue.textContent = bmiRounded;

  /* BMI CATEGORY */

  let status = "";
  let weightGoal = "";

  if (bmi < 18.5) {
    status = "Underweight";
    weightGoal = "Gain Weight";
  } else if (bmi < 25) {
    status = "Normal";
    weightGoal = "Maintain Weight";
  } else if (bmi < 30) {
    status = "Overweight";
    weightGoal = "Lose Weight";
  } else {
    status = "Obese";
    weightGoal = "Lose Weight";
  }

  bmiStatus.textContent = status;
  goal.textContent = weightGoal;

  /* USER INFO */

  userInfo.textContent = age.value + " years, " + gender.value;

  /* SHOW SCREEN 3 */

  screen2.classList.add("hidden");
  screen3.classList.remove("hidden");
});

/* RESTART BUTTON */

document.querySelector(".restart").addEventListener("click", () => {
  screen3.classList.add("hidden");
  screen1.classList.remove("hidden");
});

/* RECALCULATE BUTTON */

document.querySelector(".recalculate").addEventListener("click", () => {
  screen3.classList.add("hidden");
  screen2.classList.remove("hidden");
});
