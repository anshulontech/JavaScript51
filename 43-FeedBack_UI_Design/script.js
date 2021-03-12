const container = document.querySelector(`.container`);
const choices = document.querySelectorAll(`.choice`);
const btn = document.getElementById(`btn`);
const match = [ `Unhappy` , `Neutral` , 'Satisfied'];

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        choices.forEach(temp => {
            temp.classList.remove(`active`);
        })

        choice.classList.add(`active`);
    })
})

btn.addEventListener('click', () => {
    let rating =``;
    choices.forEach((choice, idx) => {
        if(choice.classList.contains(`active`)) 
            rating = match[idx];
    })
    
    container.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong class="greeting">Thank You!</strong>

    <p class="feedback">FeedBack : <strong>${rating}</strong></p>
    <p class="feedbackPromise">We'll use your feedback to improve our customer support</p>
    `;
})