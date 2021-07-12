const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo(event) {
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
}

function paintToDo(newToDo) {
    const newLi = document.createElement("li")
    const newSpan = document.createElement("span")
    newSpan.innerText = newToDo;
    const newButton = document.createElement("button")
    newButton.innerText = "❌";
    newButton.addEventListener("click", deleteToDo);
    //안됨?? 문제: 첫번째까진 정상작동 but, 두번째 input하고 enter 누르는 순간 첫번째가 delete됨
    // enter 누르면 deleteTodo가 됨. submit에 반응하는 건가?
    toDoList.appendChild(newLi);
    newLi.appendChild(newSpan); 
    newLi.appendChild(newButton); 
}

function toDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value; 
    toDoInput.value = "";
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", toDoSubmit);