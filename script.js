let resultHome = document.getElementById("result-home")
let resultGuest = document.getElementById("result-guest")
let value = 0


// Home functions
function addHome1() {
    value += 1
    resultHome.textContent = value 
}

function addHome2() {
    value += 2
    resultHome.textContent = value
}

function addHome3() { 
    value += 3
    resultHome.textContent = value
}

// Guest functions
function addGuest1() {
    value += 1
    resultGuest.textContent = value 
}

function addGuest2() {
    value += 1
    resultGuest.textContent = value 
}

function addGuest3() {
    value += 1
    resultGuest.textContent = value 
}

// Reset both scores
function reset() {
    value = 0
    resultHome.textContent = value
    resultGuest.textContent = value
}