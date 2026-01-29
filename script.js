const boxes = document.querySelectorAll(".box");

function activateBox(selectedBox) {
  boxes.forEach(box => box.classList.remove("active"));
  selectedBox.classList.add("active");
}

// Only toggle when clicking header
document.addEventListener("pointerdown", (e) => {
  const header = e.target.closest("[data-toggle]");
  if (!header) return;

  const box = header.closest(".box");
  if (box) activateBox(box);
});

// Per-box color selection
boxes.forEach(box => {
  const colors = box.querySelectorAll(".color");

  colors.forEach(color => {
    color.addEventListener("pointerdown", (e) => {
      e.stopPropagation();
      colors.forEach(c => (c.style.border = "2px solid #ccc"));
      color.style.border = "2px solid black";
    });
  });
});
