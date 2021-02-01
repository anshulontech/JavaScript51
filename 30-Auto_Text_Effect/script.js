const content = document.querySelector(`.content`);
const control = document.querySelector(`#speed`);

const text = `Hi 👋 all, welcome to Anshul's world of Javascript Project. Thanks for visiting 🙏. `;

var val = 3;
control.value = val;
var speed = 300 / val;

var idx = 0;
const length = text.length;

control.addEventListener('change', (e) => {
    val = e.target.value;
    speed = 300 / val;
})

function writeText() {
    console.log(`call`);
    if (idx === length) {
        content.innerText = ``;
        idx = 0;
    } else {
        content.innerText = text.slice(0, idx);
        idx++;
    }

    setTimeout(writeText, speed);
}

writeText();