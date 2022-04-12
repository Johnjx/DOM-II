import './less/index.less'

// Your code goes here!
// 10 event listeners

// mouseover and mouseleave

const h1 = document.querySelector("header div h1");

h1.addEventListener("mouseover", evt => {
    evt.target.style.color = 'Blue';
});

h1.addEventListener("mouseleave", evt => {
    evt.target.style.color = "gold"
});

// click

const sandBus = document.querySelector(".intro img")
const homeIntro = document.querySelector(".container .intro")

sandBus.addEventListener("click", () => {
    const hiddenMessage = document.createElement("h2")
    hiddenMessage.textContent = "The cool way to travel!"
    hiddenMessage.style.color = 'lightgreen'
    homeIntro.appendChild(hiddenMessage);
})

// dblclick

const maps = document.querySelector(".content-section div img")
const section1 = document.querySelector(".content-section .text-content")

const song = ['Do','Re','Mi']

maps.addEventListener("dblclick", () => {
    const random = Math.floor(Math.random() * 3)
    const hiddenMessage2 = document.createElement("h3")
    hiddenMessage2.textContent = song[random];
    hiddenMessage2.style.color = "blue"
    hiddenMessage2.style.fontSize = "3rem"
    section1.appendChild(hiddenMessage2);
} )

const riverBoat = document.querySelector(".img-fluid")
const section2 = document.querySelector(".inverse-content .text-content")

riverBoat.addEventListener("dblclick", () => {
    const random = Math.floor(Math.random() * 3)
    const hiddenMessage3 = document.createElement("h3")
    hiddenMessage3.textContent = song[random];
    hiddenMessage3.style.color = "tomato"
    hiddenMessage3.style.fontSize = "3rem"
    section2.appendChild(hiddenMessage3);
})

const islandBoat = document.querySelector(".content-destination img")
const section3 = document.querySelector(".content-destination")

islandBoat.addEventListener("dblclick", () => {
    const random = Math.floor(Math.random() * 3)
    const hiddenMessage4 = document.createElement("h3")
    hiddenMessage4.textContent = song[random];
    hiddenMessage4.style.color = "green"
    hiddenMessage4.style.fontSize = "3rem"
    section3.appendChild(hiddenMessage4);
})

// const topNav = document.querySelector("header")

// document.addEventListener('wheel', () => {
//     topNav.style.backgroundColor = "aqau";
// })

// keydown

function escape(evt) {
    if (evt.key === "Escape") {
        document.querySelector("body").style.backgroundColor = 'lightpink';
    }
}

document.addEventListener("keydown", escape);