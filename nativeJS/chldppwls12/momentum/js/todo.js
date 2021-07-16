const toDoForm = document.querySelector('#todo-form');
const toDoList = document.querySelector('#todo-list');
const toDoInput = toDoForm.querySelector('input');
const TODOS_KEY = 'toDos';
let toDos = [];

function paintToDo(newToDoObj){
  const li = document.createElement('li');
  li.id = newToDoObj.id;
  const span = document.createElement('span');
  const button = document.createElement('button');
  span.innerText = newToDoObj.text;
  button.innerText = '❌';
  button.addEventListener('click', handleDeleteTodo);
  li.appendChild(span);
  li.appendChild(button);

  //바로 X를 span으로 붙이면 적용 안되는 이유?
  // span.innerText = 'X';
  // li.appendChild(span);
  toDoList.appendChild(li);
}

function handleDeleteTodo(event){
  const li = event.target.parentElement;
  toDos = toDos.filter((obj) => obj.id != parseInt(li.id));
  saveToDos();
  li.remove();
}

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleFormSubmit(event){
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {id: Date.now(), text: newToDo};
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));

if (savedTodos){
  toDos = savedTodos;
  savedTodos.forEach((event) => {
    paintToDo(event);
  })
}

toDoForm.addEventListener('submit', handleFormSubmit);