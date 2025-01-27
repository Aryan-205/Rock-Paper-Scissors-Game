let tie = 0;
let win = 0;
let lose = 0;

const choices = [
  { name: "rock", img: "rock-emoji.png" },
  { name: "paper", img: "paper-emoji.png" },
  { name: "scissor", img: "scissors-emoji.png" }
];

function chosen(type) {
  const randNum = Math.floor(Math.random() * 3); // Generate a random integer between 0 and 2
  const compGen = choices[randNum]; // Select a random choice for the computer

  const result = getResult(type, compGen.name);
  component(result, compGen, type);
}

function getResult(player, computer) {
  if (player === computer) {
    tie++;
    return "It's a Tie.";
  }
  if (
    (player === "rock" && computer === "scissor") ||
    (player === "scissor" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    win++;
    return "You win!";
  }
  lose++;
  return "You lose.";
}

function component(result, compGen, type) {
  const resultDiv = document.querySelector(".result-box");
  const textResultDiv = document.querySelector(".text-result-box");
  const iconResultDiv = document.querySelector(".icon-result-box");
  const compIconResultDiv = document.createElement("div");
  compIconResultDiv.className="comp-icon-result-box";
  const yourIconResultDiv = document.createElement("div");
  yourIconResultDiv.className="your-icon-result-box";

  // Clear previous results
  textResultDiv.textContent = "";
  iconResultDiv.textContent = "";

  const h4El = document.createElement("h4");
  h4El.textContent = `The computer chose:`;

  const compImgEl = document.createElement("img");
  compImgEl.src = compGen.img;
  compImgEl.alt = compGen.name;
  compImgEl.style.width = "50px";
  compImgEl.style.height = "50px";

  const h4El2 = document.createElement("h4");
  h4El2.textContent = `You chose:`;

  const playerImgEl = document.createElement("img");
  playerImgEl.src = choices.find(choice => choice.name === type).img;
  playerImgEl.alt = type;
  playerImgEl.style.width = "50px";
  playerImgEl.style.height = "50px";

  const h2El = document.createElement("h2");
  h2El.textContent = result;

  const h4El3 = document.createElement("h4");
  h4El3.textContent = `Ties: ${tie}, Wins: ${win}, Loses: ${lose}`;

  const buttonEl = document.createElement("button");
  buttonEl.className = "button reset-button";
  buttonEl.textContent = "Reset";
  buttonEl.onclick = function () {
    tie = 0;
    win = 0;
    lose = 0;
    updateScore();
  };

  compIconResultDiv.appendChild(h4El);
  compIconResultDiv.appendChild(compImgEl);
  yourIconResultDiv.appendChild(h4El2);
  yourIconResultDiv.appendChild(playerImgEl);

  iconResultDiv.appendChild(compIconResultDiv);
  iconResultDiv.appendChild(yourIconResultDiv);

  textResultDiv.appendChild(h2El);
  textResultDiv.appendChild(h4El3);
  textResultDiv.appendChild(buttonEl);

  resultDiv.appendChild(iconResultDiv);
  resultDiv.appendChild(textResultDiv);
}

function updateScore() {
  const textResultDiv = document.querySelector(".text-result-box");
  const iconResultDiv = document.querySelector(".icon-result-box");

  // Clear previous results
  textResultDiv.textContent = "";
  iconResultDiv.textContent = "";

  const h4El3 = document.createElement("h4");
  h4El3.textContent = `Ties: ${tie}, Wins: ${win}, Loses: ${lose}`;

  textResultDiv.appendChild(h4El3);
}