const form = document.querySelector(`.form`);
const input = document.querySelector(`#input`);
const todoList = document.querySelector(`#todos`);

const todos = JSON.parse(localStorage.getItem(`todos`));

if (todos) {
    todos.forEach(todo => addTodo(todo));
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
})

function addTodo(todo) {
    let todoText = input.value;

    if (todo)
        todoText = todo.text;

    if (todoText) {
        const todoEl = document.createElement(`li`);
        todoEl.innerText = todoText;

        if (todo && todo.completed)
            todoEl.classList.add(`completed`);

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            updateList();
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            todoEl.remove();
            updateList();
        })

        todoList.appendChild(todoEl);
        input.value = ``;
        updateList();
    }
}

function updateList() {
    todosEle = document.querySelectorAll(`li`);

    const todos = [];

    todosEle.forEach(todoEle => {
        todos.push({ 
            text : todoEle.innerText,
            completed : todoEle.classList.contains(`completed`)
        })
    })

    localStorage.setItem(`todos`,JSON.stringify(todos));
}