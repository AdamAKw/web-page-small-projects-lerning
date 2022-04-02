const panels = document.querySelectorAll(".panel");

panels.forEach((panel) =>
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  })
);

document.addEventListener("keydown", (e) => {
  if (!e.repeat) {
    moveActiveClassByIndex(getLeftIndex(e.key));
    moveActiveClassByIndex(getRigthIndex(e.key));
  }
});

function moveActiveClassByIndex(indexToChange) {
  if (indexToChange !== undefined) {
    removeActiveClass();
    panels[indexToChange].classList.add("active");
  }
}

function getLeftIndex(direction) {
  if (direction === "ArrowLeft") {
    for (const [index, panel] of panels.entries()) {
      if (index !== 0 && isActive(panel)) {
        return index - 1;
      }
    }
  }
}

function getRigthIndex(direction) {
  if (direction === "ArrowRight") {
    for (const [index, panel] of panels.entries()) {
      if (index !== panels.length - 1 && isActive(panel)) {
        return index + 1;
      }
    }
  }
}

function isActive(panel) {
  return panel.classList.contains("active");
}

function removeActiveClass() {
  panels.forEach((panel) => panel.classList.remove("active"));
}
