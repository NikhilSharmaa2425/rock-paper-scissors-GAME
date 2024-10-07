let userScore = 0;
let compScore = 0;


const choices  = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock","paper","scissors"];
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
};

const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "Game Was Draw";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, compChoice, userChoice) => {
    if (userWin) {
        userScore ++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore ++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    }
}

const playGame = (userChoice) => {
    // console.log("user choice =", userChoice);
    // comp choice generate
    const compChoice = genCompChoice();
    // console.log("comp choice =",compChoice);
    

    if (userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, compChoice, userChoice)
    }
    
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});
