const todo = document.querySelector('.todo span');
const modal = document.querySelector('.modal');
const todoInput = document.querySelector('.todo input');
const todoForm = document.querySelector('.todo-form');
const todoList = document.querySelector('.todo ul');

let todos = [];
const savedTodos = localStorage.getItem('todos');

function saveTodo(){
  localStorage.setItem('todos', JSON.stringify(todos));
}

function makeList(obj){
  const li = document.createElement('li');
  li.id = obj.id;
  li.classList.add('todo-list');

  const i = document.createElement('i');
  i.classList.add('fa', 'fa-times');
  li.innerHTML = `<span>${obj.todo}</span>`;
  li.append(i);
  todoList.append(li);

  i.addEventListener('click', handleDeleteList);
}

function handleDeleteList(event){
  const li = event.target.parentElement;
  todos = todos.filter((obj) => obj.id != parseInt(li.id));
  saveTodo();
  li.remove();
}

if (savedTodos){
  todos = JSON.parse(savedTodos);
  todos.forEach(element => {
    makeList(element);
  });
}

todo.addEventListener('click', function(event){
  modal.classList.toggle('hidden');
});

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todos.push({id: Date.now(), todo: todo});
  todoInput.value = '';
  saveTodo();
  makeList(todos[todos.length - 1]);
});
