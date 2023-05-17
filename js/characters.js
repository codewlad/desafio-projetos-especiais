const btnChris = document.querySelector("#btnChris")
const btnJill = document.querySelector("#btnJill")
const btnBarry = document.querySelector("#btnBarry")
const btnRebecca = document.querySelector("#btnRebecca")
const btnAlbert = document.querySelector("#btnAlbert")
const btnUmbrella = document.querySelector("#btnUmbrella")

function resetSpan() {
    btnUmbrella.innerHTML = ""
    btnUmbrella.style.filter = "grayscale(100%)"
    btnChris.style.filter = "grayscale(0%)"
    btnJill.style.filter = "grayscale(0%)"
    btnBarry.style.filter = "grayscale(0%)"
    btnRebecca.style.filter = "grayscale(0%)"
    btnAlbert.style.filter = "grayscale(0%)"
}

function changeOpacity() {
    btnUmbrella.style.filter = "grayscale(0%)"
    btnChris.style.filter = "grayscale(100%)"
    btnJill.style.filter = "grayscale(100%)"
    btnBarry.style.filter = "grayscale(100%)"
    btnRebecca.style.filter = "grayscale(100%)"
    btnAlbert.style.filter = "grayscale(100%)"
}

btnChris.addEventListener("mouseover", (a) => {
    changeOpacity()
    a.target.style.filter = "grayscale(0%)"
    btnUmbrella.innerHTML = "<span>Chris Redfield</span>"
})

btnJill.addEventListener("mouseover", (a) => {
    changeOpacity()
    a.target.style.filter = "grayscale(0%)"
    btnUmbrella.innerHTML = "<span>Jill Valentine</span>"
})

btnBarry.addEventListener("mouseover", (a) => {
    changeOpacity()
    a.target.style.filter = "grayscale(0%)"
    btnUmbrella.innerHTML = "<span>Barry Burton</span>"
})

btnRebecca.addEventListener("mouseover", (a) => {
    changeOpacity()
    a.target.style.filter = "grayscale(0%)"
    btnUmbrella.innerHTML = "<span>Rebecca Chambers</span>"
})

btnAlbert.addEventListener("mouseover", (a) => {
    changeOpacity()
    a.target.style.filter = "grayscale(0%)"
    btnUmbrella.innerHTML = "<span>Albert Wesker</span>"
})

btnChris.addEventListener("mouseout", resetSpan)
btnJill.addEventListener("mouseout", resetSpan)
btnBarry.addEventListener("mouseout", resetSpan)
btnRebecca.addEventListener("mouseout", resetSpan)
btnAlbert.addEventListener("mouseout", resetSpan)

btnChris.addEventListener("click", () => window.location.href = "./chris.html")
btnJill.addEventListener("click", () => window.location.href = "./jill.html")
btnBarry.addEventListener("click", () => window.location.href = "./barry.html")
btnRebecca.addEventListener("click", () => window.location.href = "./rebecca.html")
btnAlbert.addEventListener("click", () => window.location.href = "./albert.html")