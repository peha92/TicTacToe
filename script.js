const area = document.querySelectorAll(".area")
const whooseTurnArea = document.querySelector(".whooseturn")
const h1 = document.querySelector("h1")
const ply1ScoreArea = document.querySelector(".ply1")
const ply2ScoreArea = document.querySelector(".ply2")
const markX = document.querySelector(".x")
const markO = document.querySelector(".o")
const intro = document.querySelector(".intro")
const buttons = document.querySelectorAll(".btn")
const p1Win = document.querySelector(".p1-win")
const p2Win = document.querySelector(".p2-win")
const taken = document.querySelector(".taken")
const full = document.querySelector(".full")
const container = document.querySelector(".container")
const scores = document.querySelectorAll(".score")
const takenBtn = document.querySelector(".takenbtn")
const resetBtn = document.querySelector(".reset-btn")

let gameOn = true

let mark = ""

let player1;
let player2;

let ply1Score = 0
let ply2Score = 0

let areaValues =
    ["", "", "",
        "", "", "",
        "", "", ""]

resetBtn.addEventListener("click", () => {
    location.reload()
})

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.style.display = "none"
        setTimeout(() => {
            clearBoard()
            clearArea()
        }, 500)
    })
})

takenBtn.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.style.display = "none"
})

markX.addEventListener("click", () => {
    setTimeout(() => {
        intro.style.display = "none"
        container.classList.add("container-animation")
        h1.classList.add("h1anim")
        scores.forEach((score) => {
            score.classList.add("scoreanim")
        })
        whooseTurnArea.classList.add("whooseturnanim")
    }, 300)
    player1 = "X"
    player2 = "O"
})

markO.addEventListener("click", () => {
    setTimeout(() => {
        intro.style.display = "none"
        container.classList.add("container-animation")
        h1.classList.add("h1anim")
        scores.forEach((score) => {
            score.classList.add("scoreanim")
        })
        whooseTurnArea.classList.add("whooseturnanim")
    }, 300)
    player1 = "O"
    player2 = "X"
})

const changeTurnArea = () => {
    if (whooseTurnArea.innerText === "Player's 1 turn") {
        return whooseTurnArea.innerText = "Player's 2 turn"
    } else if (whooseTurnArea.innerText = "Player's 2 turn") {
        return whooseTurnArea.innerText = "Player's 1 turn"
    }
}

const clearBoard = () => {
    for (let i = 0; i < areaValues.length; i++) {
        areaValues[i] = ""
    }
}

const clearArea = () => {
    for (let i = 0; i < area.length; i++) {
        area[i].innerText = ""
    }
}

const displayArea = () => {
    for (i = 0; i < area.length; i++) {
        area[i].innerText = areaValues[i]
    }
}

const changePlayersMark = () => {
    if (mark === "X") {
        return mark = "O"
    } else if (mark = "O") {
        return mark = "X"
    }
}

const checkWin = (mark) => {
    if (areaValues[0] === mark && areaValues[1] === mark && areaValues[2] === mark || areaValues[3] === mark && areaValues[4] === mark && areaValues[5] === mark || areaValues[6] === mark && areaValues[7] === mark && areaValues[8] === mark || areaValues[0] === mark && areaValues[3] === mark && areaValues[6] === mark || areaValues[1] === mark && areaValues[4] === mark && areaValues[7] === mark || areaValues[2] === mark && areaValues[5] === mark && areaValues[8] === mark || areaValues[0] === mark && areaValues[4] === mark && areaValues[8] === mark || areaValues[2] === mark && areaValues[4] === mark && areaValues[6] === mark) {
        setTimeout(() => {
            if (player1 === mark) {
                p1Win.style.display = "flex"
                ply1Score += 1
                ply1ScoreArea.innerText = ply1Score
            } else if (player2 === mark) {
                p2Win.style.display = "flex"
                ply2Score += 1
                ply2ScoreArea.innerText = ply2Score
            }
        }, 100)

    } else {
        ifBoardFull()
    }

}

const ifBoardFull = () => {
    if (areaValues[0] !== "" && areaValues[1] !== "" && areaValues[2] !== "" && areaValues[3] !== "" && areaValues[4] !== "" && areaValues[5] !== "" && areaValues[6] !== "" && areaValues[7] !== "" && areaValues[8] !== "") {
        full.style.display = "flex"
    }
}

const ifAreaBooked = (i) => {
    if (areaValues[i] !== "") {
        taken.style.display = "flex"
    } else {
        areaValues[i] = mark

        displayArea()

        checkWin(mark)

        changePlayersMark()

        changeTurnArea()
    }
}

const whoGoesNow = () => {
    if (whooseTurnArea.innerText === "Player's 1 turn") {
        return mark = player1
    } else if (whooseTurnArea.innerText === "Player's 2 turn") {
        return mark = player2
    }
}

for (let i = 0; i, area.length; i++) {
    area[i].addEventListener("click", () => {
        whooseTurnArea.classList.remove("whooseturnanim")

        if (whoGoesNow() === "X") {

            ifAreaBooked(i)

        } else if (whoGoesNow() === "O") {

            ifAreaBooked(i)

        }
    })
}