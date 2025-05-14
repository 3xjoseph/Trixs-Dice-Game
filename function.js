document.getElementById("rollButton").addEventListener("click", function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var img1 = document.querySelector(".img1");
    var img2 = document.querySelector(".img2");
    var winner = document.querySelector(".win-display");
    var winnerFlag = document.querySelector(".flag");
    var winnerDiv = document.querySelector(".win");
    var player1Count = document.querySelector(".player1Count");
    var player2Count = document.querySelector(".player2Count");

    var randomDice1 = "./images/dice" + randomNumber1 + ".png";
    var randomDice2 = "./images/dice" + randomNumber2 + ".png";

    player1Count.textContent = randomNumber1;
    player2Count.textContent = randomNumber2;

    img1.setAttribute("src", randomDice1);
    img2.setAttribute("src", randomDice2);


    if (randomNumber1 > randomNumber2 ) {
        winner.textContent = "PLAYER 1 WINS!";
        winnerFlag.setAttribute("src", "./images/red-flag.png");
        winnerDiv.setAttribute("class", "win d-flex flex-row gap-3");
    }
    else if (randomNumber1 < randomNumber2) {
        winner.textContent = "PLAYER 2 WINS!";
        winnerFlag.setAttribute("src", "./images/red-flag.png");
        winnerDiv.setAttribute("class", "win d-flex flex-row-reverse gap-3");
    }
    else {
        winner.textContent = "DRAW!"
        winnerFlag.setAttribute("src", "");
        winnerDiv.setAttribute("class", "win d-flex flex-row gap-3");
    }
});
