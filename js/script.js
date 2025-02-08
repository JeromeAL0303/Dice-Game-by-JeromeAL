document.querySelector(".firework_1").classList.add("visibility");
document.querySelector(".firework_2").classList.add("visibility");

alert(
  "Notice 1: The first to get the 10 score is the winner, and the loser will get a worse nickname!"
);
alert(
  "Notice 2: Btw, when you get in the game ikaw yung player 1 so nasa left side ka"
);
var playerName = prompt("Enter your username(Cancel If Exit)");

if (playerName.length > 0) {
  document.querySelector(".userNamePlayer_1").innerHTML = playerName;
} else {
  document.querySelector(".userNamePlayer_1").innerHTML = "Player 1";
}

var score1 = 0;
var score2 = 0;

document.querySelector(".btn-push").addEventListener("click", function () {
  var random1 = Math.floor(Math.random() * 6) + 1;
  var random2 = Math.floor(Math.random() * 6) + 1;

  var player1 = "./assets/dice" + random1 + ".png";
  document.querySelector(".dice1").setAttribute("src", player1);

  var player2 = "./assets/dice" + random2 + ".png";
  document.querySelector(".dice2").setAttribute("src", player2);

  if (random1 > random2) {
    document.querySelector(".firework_1").classList.remove("visibility");
    document.querySelector(".firework_2").classList.add("visibility");
    document
      .querySelector(".firework_1")
      .setAttribute("src", "./assets/fireworks.gif");
    document.querySelector("h1").innerHTML = "Player 1: WIN!";
    score1++;
    if (score1 === 10) {
      if (playerName.length > 0) {
        alert("The winner is " + playerName);
      } else {
        alert("The winner is Player 1");
      }
      document.querySelector("h1").innerHTML = "Mukha TITE: Player 2";
      score1 = 0;
      score2 = 0;
    }
  } else if (random1 < random2) {
    document.querySelector(".firework_1").classList.add("visibility");
    document.querySelector(".firework_2").classList.remove("visibility");
    document
      .querySelector(".firework_2")
      .setAttribute("src", "./assets/fireworks.gif");
    document.querySelector("h1").innerHTML = "Player 2: WIN!";
    score2++;
    if (score2 === 10) {
      alert("The winner is Player 2");
      if (playerName.length > 0) {
        document.querySelector("h1").innerHTML = "Mukha TITE: " + playerName;
      } else {
        document.querySelector("h1").innerHTML = "Mukha TITE: Player 1";
      }

      score1 = 0;
      score2 = 0;
    }
  } else {
    document.querySelector(".firework_1").classList.remove("visibility");
    document.querySelector(".firework_2").classList.remove("visibility");
    document.querySelector("h1").innerHTML = "DRAW!";
    document
      .querySelector(".firework_1")
      .setAttribute("src", "./assets/fireworks.gif");
    document
      .querySelector(".firework_2")
      .setAttribute("src", "./assets/fireworks.gif");

    if (score1 === 10 && score2 === 10) {
      document.querySelector("h1").innerHTML = "Both Mukha TITE";
      score1 = 0;
      score2 = 0;
      document.querySelector(".firework_1").classList.remove("visibility");
      document.querySelector(".firework_2").classList.remove("visibility");
      document
        .querySelector(".firework_1")
        .setAttribute("src", "./assets/fireworks.gif");
      document
        .querySelector(".firework_2")
        .setAttribute("src", "./assets/fireworks.gif");
    }
  }
  document.querySelector(".playerScore_1").innerHTML = score1;
  document.querySelector(".playerScore_2").innerHTML = score2;
});
