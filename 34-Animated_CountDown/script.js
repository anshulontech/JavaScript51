const span = document.querySelectorAll('span');
const final = document.getElementById('final');
const counter = document.querySelector(`.counter`);
const btn = document.getElementById(`btn`);

var idx = 0;
const len = span.length;
startTimer();

var interval;

function startTimer() {
    span.forEach((temp) => {
        temp.classList.remove(`inNums`);
        temp.classList.remove(`outNums`);
    })
    idx = 0;

    interval = setInterval(animate, 1000);
}

function animate() {
    if (idx == len) {
        clearInterval(interval);
        counter.classList.add(`removed`);
        final.classList.remove(`removed`);
        return;
    }

    span.forEach((temp) => {
        temp.classList.remove(`outNums`);
    })

    if (idx == 0) {
        span[idx].classList.add(`inNums`);
        idx++;
        return;
    }

    span[idx - 1].classList.remove(`inNums`);
    span[idx - 1].classList.add(`outNums`);

    span[idx].classList.add(`inNums`);

    idx++;
    return;
}

btn.addEventListener('click', () => {
    counter.classList.remove(`removed`);
    final.classList.add(`removed`);

    startTimer();
})