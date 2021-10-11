const startBtn = document.querySelector("[data-button]") as HTMLButtonElement
const dino = document.querySelector(".dino") as HTMLDivElement
const block = document.querySelector(".block") as HTMLDivElement
const gameOver = document.querySelector(".game_over") as HTMLHeadElement
const score = document.querySelector(".score") as HTMLParagraphElement
let counter = 0

// Start Game
startBtn.addEventListener("click", (event: any) => {
    block.style.animation = ""
    setTimeout(() => {
        block.style.animation = "throw 1s linear infinite"
    }, 10)
    event.target.style.display = "none"
    gameOver.style.display = "none"
    counter = 0
    jump()
})

// Jump Function
const jump = () => {
    window.addEventListener("click", () => {
        dino.classList.add("animation")
        setTimeout(() => {
            dino.classList.remove("animation")
        }, 300)
    })
}

// Game Over
setInterval(() => {
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))

    if (blockLeft > 10 && blockLeft < 40 && dinoTop > 128) {
        gameOver.style.display = "block"
        startBtn.style.display = "block"
        block.style.animationPlayState = "paused"
        dino.classList.remove("animation")
        counter = 0
    } else if (startBtn.style.display == "none") {
        counter++
        score.innerHTML = "Score: " + Math.floor((counter / 100))
    }
}, 10)

                        