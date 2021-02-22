const imgs = document.getElementById(`imgs`);
const leftBtn = document.getElementById(`left`);
const rightBtn = document.getElementById(`right`);

const img = document.querySelectorAll(`#imgs img`);
const len = img.length;

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
    idx++;
    changeImage();
}

function changeImage() {
    if (idx > len - 1)
        idx = 0;
    else if (idx < 0)
        idx = len - 1;

    imgs.style.transform = `translateX(${-idx*550}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightBtn.addEventListener('click', () => {
    idx++;
    changeImage();
    resetInterval();
})

leftBtn.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInterval();
})