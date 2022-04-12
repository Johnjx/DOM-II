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



