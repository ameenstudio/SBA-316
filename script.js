alert('Welcome to the minimaList');
let outerBox = document.querySelector('.outerBox')
let todoInput = document.querySelector('#todoInput')
let todoList = document.getElementById('todoList')
let todoForm = document.getElementById('todoForm')



todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addTodo(todoInput.value);
    todoInput.value = "";
});

function addTodo(task) {
    if (task === "") {
        return; 
    }

    let li = document.createElement("li")
    li.textContent = task; 

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x"; // Setting the text of the button

    li.appendChild(deleteBtn)

    todoList.appendChild(li);

    deleteBtn.addEventListener("click", function () {
        li.remove(); 
    });

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });
}