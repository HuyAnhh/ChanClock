const timesEle = document.querySelectorAll(".times")

const Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

setInterval(() => {
    const date = new Date;
    timesEle[0].innerHTML = Day[date.getDay()]
    timesEle[1].innerHTML = date.getHours()
    timesEle[2].innerHTML = date.getMinutes()
    timesEle[3].innerHTML = date.getSeconds()
}),1000

const handelChangeBg = document.querySelector(".btnChangeBg")
const Background = document.querySelector(".container")
const Loveele = document.querySelector(".love")

handelChangeBg.addEventListener("click", () => {
    Loveele.style.display = "none"
    let randomBg = Math.floor(Math.random() * 7) + 1;
    Background.style.backgroundImage = 'url(chan'+randomBg+'.jpg)'
})

const handleLove = document.querySelector(".btnLove")

handleLove.addEventListener("click", () => {  
    Background.style.backgroundImage = "none";
    Loveele.style.display = "inline-block"
    setInterval(() => {
        let random1 = Math.floor(Math.random() * 257);
        let random2 = Math.floor(Math.random() * 257);
        let random3 = Math.floor(Math.random() * 257);
        Loveele.style.color = 'rgb('+random1+', '+random2+', '+random3+')';
    }), 10000
})