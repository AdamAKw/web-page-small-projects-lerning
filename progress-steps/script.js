const circles = document.querySelectorAll(".circle");
const progressBar = document.getElementById("progress");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let newCountOfActive = getActiveCount();

nextButton.addEventListener("click", addActiveCircle);

function addActiveCircle() {
  newCountOfActive = getActiveCount() + 1;
  updateGUIElements();
}

prevButton.addEventListener("click", removeActiveCircle);

function removeActiveCircle() {
  newCountOfActive = getActiveCount() - 1;
  updateGUIElements();
}

function getActiveCount() {
  return document.getElementsByClassName("active").length;
}

function updateGUIElements() {
  setActiveCircles();
  setNextButtonDisabled();
  setPrevButtonDisabled();
  setActiveProgressBarWidth();
}

function setActiveCircles() {
  circles.forEach((circle, index) => {
    if (index < newCountOfActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}

function setNextButtonDisabled() {
  if (newCountOfActive >= circles.length) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

function setPrevButtonDisabled() {
  if (newCountOfActive <= 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }
}

function setActiveProgressBarWidth() {
  progressBar.style.width =
    ((newCountOfActive - 1) / (circles.length - 1)) * 100 + "%";
}
