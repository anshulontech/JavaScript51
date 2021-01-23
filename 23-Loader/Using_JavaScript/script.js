const afterBlock = document.querySelector(`.after`);
const beforeBlock = document.querySelector(`.before`);
const count = document.querySelector(`.count`);
const intro = document.querySelector(`.intro`);
const btn = document.querySelector(`#btn`);
const end = document.querySelector(`.end`);

btn.addEventListener('click', () => {
    intro.classList.add(`none`);
    btn.classList.add(`none`);
    afterBlock.classList.remove(`none`);
    beforeBlock.classList.remove(`none`);
    count.classList.remove(`none`);
    intervalB = setInterval(rotateB, 1000);
    setTimeout(helper, 500);
    intervalCount = setInterval(increaseCount, 100);
})

var intervalB;
var intervalCount;
var intervalA;

let degA = 0;
let degB = 90;
let value = 0;

function rotateB() {
    degB += 180;
    beforeBlock.style.transform = `rotate(${degB}deg)`;
}

function helper() {
    intervalA = setInterval(rotateA, 1000);
}

function rotateA() {
    degA += 180;
    afterBlock.style.transform = `rotate(${degA}deg)`;
}

function increaseCount() {
    value++;
    if (value >= 100) {
        clearInterval(intervalB);
        clearInterval(intervalCount);
        clearInterval(intervalA);

        setTimeout(BlockAll, 1500);

    }
    count.innerText = `${value}%`;
}

function BlockAll() {
    afterBlock.classList.add(`none`);
    beforeBlock.classList.add(`none`);
    count.classList.add(`none`);
    end.classList.remove(`none`);
}