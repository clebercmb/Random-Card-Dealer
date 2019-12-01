var suites = ["\u2666", "\u2660", "\u2663", "\u2665"]
var valuesCard = ["1", "2", "3", "4", "5", "6", "7", "8", "9","10", "K", "Q", "J", "A"]
var colorCard = ["black", "red"]

function initialize() {
    console.log("initialize")
    
    let suite = randomSuites()
    let valueCard = randomValuesCard()
    let colorCard = randomColorCard()

    console.log(colorCard)

    let top = document.querySelector(".top")
    let center = document.querySelector(".center")
    let bottom = document.querySelector(".bottom")

    top.innerHTML = suite
    top.style.color=colorCard
    center.innerHTML = valueCard
    bottom.innerHTML = suite
    bottom.style.color=colorCard
}


function randomSuites() {
    let i = Math.floor(Math.random()*suites.length)
    console.log(suites[i])
    return suites[i]
}

function randomValuesCard() {

    let i = Math.floor(Math.random()*valuesCard.length)
    console.log(valuesCard[i])
    return valuesCard[i]

}

function randomColorCard() {
    let i = Math.floor(Math.random()*colorCard.length)
    console.log(colorCard[i])
    return colorCard[i]

}