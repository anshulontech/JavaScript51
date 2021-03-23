const quiz = document.querySelector(`#quiz`);
const question = document.getElementById(`question`);
const option = document.querySelectorAll(`.answer`);
const optionA = document.getElementById(`a_text`);
const optionB = document.getElementById(`b_text`);
const optionC = document.getElementById(`c_text`);
const optionD = document.getElementById(`d_text`);
const submit = document.getElementById(`submit`);

const quizData = [{
        question: "Which type of JavaScript language is ___",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        correct: "b",
    },
    {
        question: "Which one of the following also known as Conditional Expression:",
        a: "Alternative to if-else",
        b: "Switch statement",
        c: "If-then-else statement",
        d: "immediate if",
        correct: "d",
    },
    {
        question: "In JavaScript, what is a block of statement?",
        a: "Conditional block",
        b: "block that combines a number of statements into a single compound statement",
        c: "both conditional block and a single statement",
        d: "block that contains a single statement",
        correct: "b",
    },
    {
        question: "Which one of the following is the correct way for calling the JavaScript code?",
        a: "Preprocessor",
        b: "Triggering Event",
        c: "RMI",
        d: "Function/Method",
        correct: "d",
    },
];

let quesNum = 0,
    score = 0,len=quizData.length;

function deselectAnswer() {
    option.forEach(temp => {
        temp.checked=false;
    })
}

function loadQuiz() {
    deselectAnswer();

    question.innerText = quizData[quesNum].question;
    optionA.innerText = quizData[quesNum].a;
    optionB.innerText = quizData[quesNum].b;
    optionC.innerText = quizData[quesNum].c;
    optionD.innerText = quizData[quesNum].d;
}

function getSelected() {
    let answer ;

    option.forEach(temp => {
        if(temp.checked)
            answer = temp.id;
    })

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if(answer===quizData[quesNum].correct)
            score++;

        quesNum++;

        if(quesNum<len) 
            loadQuiz();
        else {
            quiz.innerHTML = `
                <div class="selection"> 
                    <h2> You answered ${score}/${len} questions correctly.</h2>
                </div>

                <div class="submit">
                    <button id="submit" onclick="location.reload()">Reload</button>
            `
        }
    }

})

loadQuiz();