const TODO_KEY = "todo";
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
let toDos = [];
const savedToDos = localStorage.getItem(TODO_KEY);

//시작시 ToDo그리기 함수
if (savedToDos != null) {
  const parsedToDo = JSON.parse(savedToDos);
  toDos = parsedToDo;
  toDos.forEach(paintToDo);
}
todoForm.addEventListener("submit", onToDoSubmit);

//ToDo 작성함수
function onToDoSubmit(event) {
  const newToDo = todoInput.value;
  todoInput.value = "";
  event.preventDefault(); //브라우저의 기본동작을 막아줌
  const newTodoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newTodoObj);
  saveToDos();
  paintToDo(newTodoObj);
}

//Todo 삭제함수
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}
//ToDo 그리는 함수
function paintToDo(newTodoObj) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  list.id = newTodoObj.id;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  list.appendChild(span);
  list.appendChild(button);
  todoList.appendChild(list);
}

//ToDo local저장소에 저장함수
function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}
