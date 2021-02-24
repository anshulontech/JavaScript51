const board = document.querySelector('.board');
const colors = [`#c859e7`, `#59e7d7`, '#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

const totalSubBoxes = 500;
const len = colors.length;

for (let i = 0; i < totalSubBoxes; i++) {
    const square = document.createElement(`div`);
    square.classList.add(`square`);

    square.addEventListener('mouseover', () => {
        const idx = Math.floor(Math.random() * len);
        square.style.background = colors[idx];
        square.style.boxShadow = `0 0 2px ${colors[idx]}, 0 0 10x ${colors[idx]}`;
    });

    square.addEventListener('mouseout', () => {
        square.style.background = `black`;
        element.style.boxShadow = '0 0 2px white'
    });

    board.appendChild(square);
}