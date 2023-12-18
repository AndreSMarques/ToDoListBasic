//select elements
const todoForm = document.querySelector("#todo-form");
const addTaks = document.querySelector("#add-task");
const editForm = document.querySelector("#edit-form");
const editInpunt = document.querySelector("#edit-input");
const cancelbtn = document.querySelector("#cancel-btn");
const list = document.querySelector("#list");

let oldInputValue;

//functions
saveTask = (text) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const todoTiles = document.createElement("h3");
  todoTiles.innerText = text;
  todo.appendChild(todoTiles);

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish")
  doneBtn.innerHTML = '<i class="fa fa-solid fa-check"</i>';
  todo.appendChild(doneBtn);
 
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit")
  editBtn.innerHTML = '<i class="fa fa-solid fa-pen"</i>';
  todo.appendChild(editBtn);
 
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove")
  deleteBtn.innerHTML = '<i class="fa fa-solid fa-xmark"</i>';
  todo.appendChild(deleteBtn);

  list.appendChild(todo);
  addTaks.value = "";
  addTaks.focus();
}

const toggleForms = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  list.classList.toggle("hide");
}

const updateTodo = (text) => {
  const todo = document.querySelectorAll(".todo");

  todo.forEach((todo) => {
    let todoTitle = todo.querySelector("h3");

    if (todoTitle.innerText === oldInputValue){
      todoTitle.innerText = text;
    }
  });
}
//events
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = addTaks.value;

  if (inputValue) {
    saveTask(inputValue, todoForm)
  }
});

document.addEventListener("click", (event) => {
  const targetEl = event.target;
  const parentEl = targetEl.closest("div");
  let todoTitle;

  if (parentEl && parentEl.querySelector("h3")){
    todoTitle = parentEl.querySelector("h3").innerText;
  }

  if (targetEl.classList.contains("finish")) {
    parentEl.classList.toggle("done");
  }

  if (targetEl.classList.contains("edit")) {
    toggleForms();

    editInpunt.value = todoTitle;
    oldInputValue = todoTitle;
  }

  if (targetEl.classList.contains("remove")) {
    parentEl.remove();
  }

});

cancelbtn.addEventListener("click", (event) =>{
  event.preventDefault();
  toggleForms();
})

editForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const editInpuntValue = editInpunt.value;

  if (editInpunt){
    updateTodo(editInpuntValue)
  }

  toggleForms()
})