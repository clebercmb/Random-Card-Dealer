var suites = ["\u2666", "\u2660", "\u2663", "\u2665"]
var colorsCard = ["red", "black","black", "red"]
var valuesCard = ["2", "3", "4", "5", "6", "7", "8", "9","10", "K", "Q", "J", "A"]


function initialize() {
    console.log("initialize")
    let suiteIndex = randomSuites()
    let suite = suites[suiteIndex]
    let colorCard = colorsCard[suiteIndex]
    let valueCard = randomValuesCard()


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
    console.log("randomSuites")
    let i = Math.floor(Math.random()*suites.length)
    console.log(i)
    return i
}

function randomValuesCard() {

    let i = Math.floor(Math.random()*valuesCard.length)
    console.log(valuesCard[i])
    return valuesCard[i]

}

function randomColorCard() {git 
    let i = Math.floor(Math.random()*colorCard.length)
    console.log(colorCard[i])
    return colorCard[i]

}