// const todoForm = document.querySelector("#todo-form"); login.js에서 정의
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
const HIDDEN_CLASS = "hidden";

let toDos = [];

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  // toDo의 id와 li의 id가 갖지 않으면 배열에서 제외하고 새로운 배열을 저장!
  // filter는 배열의 각 item들에게 함수를 실행, li.id가 string이기 때문에 정수로 변환
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveTodo();

  // todo 삭제시 다시 todo Input을 띄워준다.
  todoForm.classList.remove(HIDDEN_CLASS);
  const titleSpan = document.getElementById("title");
  titleSpan.remove();
}

function listMouseEnter(input, button) {
  input.classList.remove(HIDDEN_CLASS);
  button.classList.remove(HIDDEN_CLASS);
}

function listMouseLeave(input, button) {
  input.classList.add(HIDDEN_CLASS);
  button.classList.add(HIDDEN_CLASS);
}

function paintTodo(newTodoObj) {
  const titleSpan = document.createElement("span");
  titleSpan.id = "title";
  titleSpan.innerText = "TODAY";
  
  todoList.appendChild(titleSpan);

  const li = document.createElement("li");
  // li의 id를 주기
  li.id = newTodoObj.id;
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add(HIDDEN_CLASS);
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.classList.add(HIDDEN_CLASS);

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);

  // todo 입력시 숨기기
  todoForm.classList.add(HIDDEN_CLASS);

  li.addEventListener("mouseenter", () => {
    listMouseEnter(input, button);
  });
  li.addEventListener("mouseleave", () => {
    listMouseLeave(input, button);
  })
  button.addEventListener("click", deleteTodo);
}

function writeTodo(event) {
  event.preventDefault();

  const newTodoObj = {
    text: todoInput.value,
    // 밀리초를 얻어서 해당 todo에 고유 번호 부여
    id: Date.now()
  }
  todoInput.value = "";
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", writeTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);

}