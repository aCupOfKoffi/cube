'use strict'

let cubeOne = document.querySelector('.cubeOne'),
    cubeTwo = document.querySelector('.cubeTwo'),
    body = document.querySelector('body');
let rotatePower = 10;
let timerId;

// cubeTwo.style.display = 'none';

body.addEventListener('mousemove', (e) => {
    let origX = window.innerWidth / 2,
    origY = window.innerHeight / 2,
    currX = e.clientX,
    currY = e.clientY;
    
    let x = currX - origX,
    y = currY - origY;
    console.log(x, y);
    cubeOne.style.transform = `rotateY(${x / rotatePower}deg) rotateX(${-y / rotatePower}deg)`;
    cubeTwo.style.transform = `rotateY(${x / rotatePower}deg) rotateX(${-y / rotatePower}deg)`;

})

// console.log(MouseEvent.offsetX);