const input = document.querySelector(`input`);
const label = document.querySelector(`label`);

input.addEventListener('input', () => {
    const value = Number(input.value)/100;
    input.style.setProperty("--thumb-rotate", `${value*720}deg`);
    label.innerText = Math.round(value*100);
})