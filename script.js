const password = document.querySelector(`#password`);
const bg = document.querySelector('.background');

password.addEventListener(`input`, (e) => {
    const value = e.target.value;
    const len = value.length;

    const blur = 20 - len * 2;

    bg.style.filter = `blur(${blur}px)`;
})