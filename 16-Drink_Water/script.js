const percentage = document.querySelector(`.percantage`);
const remained = document.querySelector(`.remained`);
const subGlass = document.querySelectorAll(`.mini-glass`);
const fill = document.querySelector(`#liters`);

updateBigCup(-1);

subGlass.forEach((cup, idx) => {
    cup.addEventListener('click', () => highLightCup(idx))
})

function highLightCup(idx) {
    if (subGlass[idx].classList.contains(`active`) && idx < 7 && !subGlass[idx].nextElementSibling.classList.contains(`active`))
        idx--;

    subGlass.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add(`active`);
        } else
            cup.classList.remove(`active`);
    })

    updateBigCup(idx);
}

function updateBigCup(idx) {
    let percent = ((idx + 1) / 8) * 100;
    let percentHeight = (350 * percent) / 100;
    let remainedHeight = 350 - percentHeight;

    if (percent == 100) {
        remained.style.visibility = `hidden`;
        percentage.style.visibility = `visible`;
    } else if (percent == 0) {
        remained.style.visibility = `visible`;
        percentage.style.visibility = `hidden`;
    } else {
        remained.style.visibility = `visible`;
        percentage.style.visibility = `visible`;
    }

    fill.innerText = `${2-(idx+1)*0.250}L`;
    remained.style.height = `${remainedHeight}px`;
    percentage.style.height = `${percentHeight}px`;
    percentage.innerText = `${percent}%`

    console.log(percent);
}