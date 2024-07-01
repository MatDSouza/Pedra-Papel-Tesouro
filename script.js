const playerDisplay = document.getElementById
("player-choice");
const computerDisplay = document.getElementById
("computer-choice");
const resultDisplay = document.getElementById
("resultDisplay");

const choices = ["Pedra", "Papel", "Tesoura"];

function Game(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const getResult = (playerChoice, computerChoice) =>
    playerChoice === computerChoice 
    ? "EMPATAMOS! 😕 " 
    : (playerChoice === "Pedra" && computerChoice === "Tesoura") ||
    (playerChoice === "Papel" && computerChoice === "Pedra") ||
    (playerChoice === "Tesoura" && computerChoice === "Papel")
    ? "Você venceu! 😄 "
    : "Você perdeu! 😭 ";

    const result = getResult(playerChoice, computerChoice);
    resultDisplay.textContent = result;
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

    resultDisplay.style.backgroundColor = 
    result === "EMPATAMOS! 😕 "
    ? "blue"
    : result === "Você venceu! 😄 "
    ? "green"
    :"red";
    resultDisplay.style.border = "2px solid transparent";
    resultDisplay.style.color = "white";

}