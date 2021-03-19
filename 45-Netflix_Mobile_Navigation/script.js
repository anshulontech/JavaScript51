const slider=document.querySelectorAll(`.slider`);
const open_btn = document.querySelector(`.open-btn`);
const close_btn = document.querySelector(`.close-btn`);

open_btn.addEventListener('click', () => {
    slider.forEach(slide => {
        slide.classList.add(`visible`);
    })
})

close_btn.addEventListener('click', () => {
    slider.forEach(slide => {
        slide.classList.remove(`visible`);
    })
})