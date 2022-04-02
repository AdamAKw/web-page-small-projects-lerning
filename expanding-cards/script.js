const panels = document.querySelectorAll(".panel");

panels.forEach((panel) =>
  panel.addEventListener("click", (e) => {
    removeActiveClass();
    e.target.classList.add("active");
  })
);

function removeActiveClass() {
  panels.forEach((panel) => panel.classList.remove("active"));
}
