"use strict";
var startBtn = document.querySelector("[data-button]");
var dino = document.querySelector(".dino");
var block = document.querySelector(".block");
var gameOver = document.querySelector(".game_over");
var score = document.querySelector(".score");
var counter = 0;
// Start Game
startBtn.addEventListener("click", function (event) {
    block.style.animation = "";
    setTimeout(function () {
        block.style.animation = "throw 1s linear infinite";
    }, 10);
    event.target.style.display = "none";
    gameOver.style.display = "none";
    counter = 0;
    jump();
});
// Jump Function
var jump = function () {
    window.addEventListener("click", function () {
        dino.classList.add("animation");
        setTimeout(function () {
            dino.classList.remove("animation");
        }, 300);
    });
};
// Game Over
setInterval(function () {
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    if (blockLeft > 10 && blockLeft < 40 && dinoTop > 128) {
        gameOver.style.display = "block";
        startBtn.style.display = "block";
        block.style.animationPlayState = "paused";
        dino.classList.remove("animation");
        counter = 0;
    }
    else if (startBtn.style.display == "none") {
        counter++;
        score.innerHTML = "Score: " + Math.floor((counter / 100));
    }
}, 10);
