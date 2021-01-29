const img_block = document.querySelector(`.img_block`);
const times = document.querySelector(`.times`);

let clickTime = 0;
let timesClicked = 0;

img_block.addEventListener('click', (e) => {
    if (clickTime == 0)
        clickTime = new Date().getTime();
    else {
        if (new Date().getTime() - clickTime < 800) {
            createHeart(e);
            clickTime = 0;
        } else
            clickTime = new Date().getTime();
    }
})

const createHeart = (e) => {
    const heart = document.createElement(`i`);
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    const leftOffSet = e.target.offsetLeft;
    const topOffSet = e.target.offsetTop;

    const xInside = x - leftOffSet;
    const yInside = y - topOffSet;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    img_block.appendChild(heart);

    times.innerHTML = ++timesClicked;

    setTimeout(() => heart.remove(), 1000);


}