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

