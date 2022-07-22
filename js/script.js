'use strict'

let cube = document.querySelector('.cube'),
    container = document.querySelector('.container'),
    sides = document.querySelectorAll('.side'),
    body = document.querySelector('body'),
    textureInput = document.querySelector('.texture_number_input');
    let rotatePower = 2,
    i = 0,
    isActivated = false,
    memX = 0, memY = 0;
let timerId = setInterval(() => {
    i === 360 ? i = 0 : i++;
    container.style.border = `1px solid hsl(${i}, 100%, 74%)`;
}, 10);

let textures = {
    grass: {
        0: 'img/side_grass.webp',
        1: 'img/side_grass.webp',
        2: 'img/top_grass.png',
        3: 'img/bottom_grass.webp',
        4: 'img/side_grass.webp',
        5: 'img/side_grass.webp'
    },
    blast_furnace: {
        0: 'img/bf_front.webp',
        1: 'img/bf_side.webp',
        2: 'img/bf_top_bottom.webp',
        3: 'img/bf_top_bottom.webp',
        4: 'img/bf_side.webp',
        5: 'img/bf_side.webp',
        active: {
            0: 'img/bf_front_active.png',
        },
        sounds: [

        ]
    },
    shulker: {
        0: 'img/shulker_side.png',
        1: 'img/shulker_side.png',
        2: 'img/shulker_top.png',
        3: 'img/shulker_bottom.png',
        4: 'img/shulker_side.png',
        5: 'img/shulker_side.png'
    },
    Zerot_5 : {
        0: 'img/zerot_5_front.png',
        1: 'img/zerot_5_bottom.png',
        2: 'img/zerot_5_bottom.png',
        3: 'img/zerot_5_bottom.png',
        4: 'img/zerot_5_right.png',
        5: 'img/zerot_5_left.png'
    }
}
// shulker: {
//     front: 'img/',
//     back: 'img/',
//     top: 'img/',
//     bottom: 'img/',
//     right: 'img/',
//     left: 'img/'
// }

function activateBlock(texture) {
    let block = textures[texture];

        if (!isActivated) {
        try {
            for (let key in block.active) {
                console.log(block.active[key]);
                sides[key].style.backgroundImage = `url(${block.active[key]})`;
            }
        }
        finally {
            isActivated = true;
        }
    } else {
        for (let key in block.active) {
            console.log(block.active[key]);
            sides[key].style.backgroundImage = `url(${block[key]})`;
        }
        isActivated = false;
    }
}

// let block = textures[texture];
//     if (!isActivated) {
//         try {
            
//         }
//         finally {
//             isActivated = true;
//         }
//     }else {
//         sides[0].style.backgroundImage = `url(${block.front})`;
//         isActivated = false;
//     }

function changeTextures(texture) {
    let block = textures[texture];
    for (let key in block) {
        if (key !== 'active' && key !== 'sounds'){
        console.log(key, block[key]);

        sides[key].style.backgroundImage = `url(${block[key]})`;
        }
    }
};

// changeTextures(0);

textureInput.addEventListener('input', () => {
    textureInput.value = textureInput.value.replace(/ /g, '_');
    try {
        changeTextures(textureInput.value);
        // activateBlock(textureInput.value);
    }
    catch (e) {
        sides.forEach(item => {
            item.style.backgroundImage = '';
        })
    }
})

cube.addEventListener('dblclick', () => {
    if (textureInput.value && textures[textureInput.value].active) {
    activateBlock(textureInput.value);
    }
})


cube.addEventListener('mousedown', (e) => {
    let origX = e.clientX,
        origY = e.clientY;
        
    body.onmousemove = (e) => {
        let currX = e.clientX,
        currY = e.clientY,
        x = currX - origX + memX,
        y = currY - origY + memY;
        // console.log(x, y);
    cube.style.transform = `rotateY(${-x / rotatePower}deg) rotateX(${y / rotatePower}deg)`;
    body.onmouseup = () => {
        memX = x;
        memY = y;
        console.log(memX, memY);
        body.onmousemove = '';
    }

    }

})

// body.addEventListener('mousemove', (e) => {
//     let origX = window.innerWidth / 2,
//     origY = window.innerHeight / 2,
//     currX = e.clientX,
//     currY = e.clientY;
    
//     let x = currX - origX,
//     y = currY - origY;
//     cube.style.transform = `rotateY(${-x / rotatePower}deg) rotateX(${y / rotatePower}deg)`;
// })

// body.addEventListener('mouseout', () => {
//     cube.style.transform = 'rotateY(0) rotateX(0)';
// })