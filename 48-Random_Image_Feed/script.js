const container = document.querySelector(`.container`);
const url = 'https://source.unsplash.com/random/';
let row=5;

for(let i=0;i<row*3;i++) {
    const img = document.createElement(`img`);
    img.src=`${url}${getRandomSize()}`;
    container.appendChild(img);
}

function getRandomSize() {
    return `${getRandomNum()}x${getRandomNum()}`;
}

function getRandomNum() {
    return Math.floor(Math.random()*10)+300;
}