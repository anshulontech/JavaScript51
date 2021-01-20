const btn = document.querySelector(`.btn`);

btn.addEventListener(`click`, function(e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const actualX = x - buttonLeft;
    const actualY = y - buttonTop;

    const circle = document.createElement(`span`);
    circle.classList.add(`circle`);
    circle.style.top = `${actualY}px`;
    circle.style.left = `${actualX}px`;


    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500)
})