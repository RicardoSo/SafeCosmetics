let homeScore = 0

function scoreView() {
    document.getElementById("home-el").textContent = homeScore
}

function scoreReset() {
    homeScore = 0
    scoreView()
}

function scoreAdd(increment) {
    homeScore += increment
    scoreView()
}

scoreReset()
