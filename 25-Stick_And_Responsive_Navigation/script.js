const navbar = document.querySelector(`.navbar`);
const title = document.querySelector(`.title`);
const list = document.querySelector(`.list`);
const navdiv = document.querySelector(`.navdiv`);


window.addEventListener('scroll', () => {
    if (window.scrollY > navbar.offsetHeight + 150) {
        navbar.classList.add(`active`);
        title.classList.add(`active`);
        list.classList.add('active');
        navdiv.classList.add('active');
    } else {
        navbar.classList.remove(`active`);
        title.classList.remove(`active`);
        list.classList.remove('active');
        navdiv.classList.remove('active');
    }
})