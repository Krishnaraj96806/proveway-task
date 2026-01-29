const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  box.addEventListener("click", () => {
    boxes.forEach(b => b.classList.remove("active"));
    box.classList.add("active");
  });
});


@media (max-width: 400px) {
    .container {
      width: 90%;
    }
  }

  