const boxes = document.querySelectorAll(".box");

function activateBox(selectedBox) {
  boxes.forEach(box => box.classList.remove("active"));
  selectedBox.classList.add("active");

  // Update total price
  const priceText = selectedBox.querySelector(".price strong");
  if (priceText) {
    document.querySelector(".total").textContent =
      "Total : " + priceText.textContent;
  }
}

// Only header click activates
document.addEventListener("pointerdown", (e) => {
  const header = e.target.closest("[data-toggle]");
  if (!header) return;

  const box = header.closest(".box");
  if (box) activateBox(box);
});
