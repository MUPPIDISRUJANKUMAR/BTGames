function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomImg = choices[Math.floor(Math.random() * choices.length)];

  // Remove existing computer choice if it exists
  let existingChoice = document.querySelector(".computer-selection img");
  if (existingChoice) {
    existingChoice.remove();
  }

  // Create an image element
  let img = document.createElement("img");
  img.setAttribute("src", `images/${randomImg}.jpg`);
  img.setAttribute("alt", `Computer choice: ${randomImg}`);
  img.setAttribute("width", "100%");
  img.setAttribute("height", "100%");

  // Append image to the computer-choice section
  document.querySelector(".computer-selection").appendChild(img);

  return randomImg;
}

// Store scores in an object instead of multiple variables
let score = { win: 0, lost: 0, draw: 0 };

// Function to determine winner
function playGround(human, computer) {
  if (human == computer) return "draw";
  const winningCombos = { rock: "scissors", paper: "rock", scissors: "paper" };
  return winningCombos[human] == computer ? "win" : "lost";
}
// Function to update the score display
function updateScore() {
  document.querySelector(".score .won").textContent = `Win: ${score.win} |`;
  document.querySelector(".score .lost").textContent = `Lost: ${score.lost} |`;
  document.querySelector(".score .draw").textContent = `Draw: ${score.draw}`;
}

// Handle user clicks
document.querySelectorAll(".choices img").forEach((img) => {
  img.addEventListener("click", function () {
    // Add a quick click animation
    this.classList.add("clicked");
    setTimeout(() => {
      this.classList.remove("clicked");
    }, 200);

    const hum_choice = this.dataset.choice;
    const com_choice = getComputerChoice();
    console.log(`You : ${hum_choice} , Computer : ${com_choice}`);

    const res = playGround(hum_choice, com_choice);
    score[res]++;
    updateScore();

    // Check if result container exists, if yes, remove it
    let resultbox = document.querySelector(".resultbox");
    let existing = document.querySelector(".result-div");
    if (existing) {
      existing.remove();
    }

    // Create a result container
    let resultContainer = document.createElement("div");
    resultContainer.classList.add("result-div");

    // Apply correct styles based on result
    if (res == "win") {
      resultContainer.classList.add("win-result");
      resultContainer.innerText = "You Won 🎉";
    } else if (res == "draw") {
      resultContainer.classList.add("draw-result");
      resultContainer.innerText = "It's a Draw ⚖️";
    } else {
      resultContainer.classList.add("lost-result");
      resultContainer.innerText = "You Lost 😞";
    }

    // Append result and apply animation
    resultbox.appendChild(resultContainer);
    setTimeout(() => {
      resultContainer.style.opacity = "1";
      resultContainer.style.transform = "scale(1)";
    }, 100);
  });
});
