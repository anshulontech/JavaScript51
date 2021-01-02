let circleCount = 0;
let lineCount = -1;

let circle = document.getElementsByClassName("circle");
let line = document.getElementsByClassName("line");

let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.addEventListener("click", () => {
    if (circleCount == 3) return;
    circleCount++;
    lineCount++;

    let arrCircle = Array.from(circle);
    let arrLine = Array.from(line);
    arrCircle[circleCount].classList.add("active");
    arrLine[lineCount].classList.add("active");
    prev.classList.remove("disabled");

    if (circleCount == 3) {
        next.classList.add("disabled");
        prev.classList.remove("disabled");
    } else {
        next.classList.remove("disabled");
    }
});

prev.addEventListener("click", () => {
    if (circleCount == 0) return;

    let arrCircle = Array.from(circle);
    let arrLine = Array.from(line);
    arrCircle[circleCount].classList.remove("active");
    arrLine[lineCount].classList.remove("active");
    next.classList.remove("disabled");

    circleCount--;
    lineCount--;

    if (circleCount == 0) {
        prev.classList.add("disabled");
    } else {
        prev.classList.remove("disabled");
    }
});