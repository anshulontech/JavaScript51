const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', showBox);

showBox();

function showBox() {
    const top = window.scrollY;
    const bottom = window.innerHeight + window.scrollY;

    Array.from(boxes).forEach(box => {
        const boxMid = box.offsetTop + box.offsetHeight / 2;
        const boxTop = box.offsetTop + box.offsetHeight / 2;
        if (boxMid >= window.scrollY && boxTop <= bottom)
            box.classList.add('active');
        else
            box.classList.remove('active');
    })
}