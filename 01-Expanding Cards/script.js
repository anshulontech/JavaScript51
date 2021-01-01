let panels = document.getElementsByClassName("panel");

Array.from(panels).forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActive();
        panel.classList.add("active");
    });
});

function removeActive() {
    Array.from(panels).forEach((panel) => {
        panel.classList.remove("active");
    });
}