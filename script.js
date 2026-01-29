const boxes = document.querySelectorAll(".box");

function activateBox(selectedBox) {
  boxes.forEach(box => box.classList.remove("active"));
  selectedBox.classList.add("active");
}

boxes.forEach(box => {
  // Only activate when clicking the header, NOT the content
  const header = box.querySelector(".box-header");
  const content = box.querySelector(".box-content");

  header.addEventListener("click", () => {
    activateBox(box);
  });

  // Prevent clicks inside content from toggling the box
  content.addEventListener("click", e => {
    e.stopPropagation();
  });

  // Color selection
  const colors = box.querySelectorAll(".color");

  colors.forEach(color => {
    color.addEventListener("click", e => {
      e.stopPropagation();
      colors.forEach(c => (c.style.border = "2px solid #ccc"));
      color.style.border = "2px solid black";
    });
  });
});
