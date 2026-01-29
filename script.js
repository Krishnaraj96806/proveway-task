const boxes = document.querySelectorAll(".box");

function activateBox(selectedBox) {
  boxes.forEach(box => box.classList.remove("active"));
  selectedBox.classList.add("active");
}

boxes.forEach(box => {
  box.addEventListener("click", () => {
    activateBox(box);
  });

  const colors = box.querySelectorAll(".color");
  const select = box.querySelector("select");

  colors.forEach(color => {
    color.addEventListener("click", (e) => {
      e.stopPropagation();
      colors.forEach(c => (c.style.border = "2px solid #ccc"));
      color.style.border = "2px solid black";
    });
  });

  select.addEventListener("click", e => {
    e.stopPropagation();
  });
});
