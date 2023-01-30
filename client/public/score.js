let homeScore = 0
let homeEl = document.getElementById("home-el")
let homeButton1 = document.getElementById("home1-btn")
let homeButton2 = document.getElementById("home2-btn")
let homeButton3 = document.getElementById("home3-btn")

function scoreView() {
    homeEl.textContent = homeScore
}

function scoreReset() {
    homeScore = 0
    scoreView()
}

function scoreAdd(increment) {
    homeScore += increment
    scoreView()
}

function homeAdd1() {
    scoreAdd(1)
}

function homeAdd2() {
    scoreAdd(2)
}

function homeAdd3() {
    scoreAdd(3)
}

scoreReset()
