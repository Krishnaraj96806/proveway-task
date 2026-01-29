const boxes = document.querySelectorAll(".box");
const totalEl = document.querySelector(".total");

// Price map
const PRICES = {
  "1 Unit": "$24.00 USD",
  "2 Units": "$18.00 USD",
  "3 Units": "$24.00 USD"
};

function activateBox(selectedBox) {
  boxes.forEach(box => box.classList.remove("active"));
  selectedBox.classList.add("active");

  if (!totalEl) return;

  const titleEl = selectedBox.querySelector(".plan-title");
  if (!titleEl) return;

  const title = titleEl.textContent.trim();
  if (PRICES[title]) {
    totalEl.textContent = "Total : " + PRICES[title];
  }
}

// Only header click activates
document.addEventListener("pointerdown", (e) => {
  const header = e.target.closest("[data-toggle]");
  if (!header) return;

  const box = header.closest(".box");
  if (box) activateBox(box);
});
