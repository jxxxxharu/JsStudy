const toDoDiv = document.querySelector(`.to-do-div`);
const toDoUi = document.querySelector(`.to-do-list`);
const LSarrayName = 'toDoList';
const toDoInput = document.querySelector('.to-do-input');

function init() {
    localData = loadLocalData();
    drawList(localData);
    askNewToDo();
}

function loadLocalData() {
    temp = JSON.parse(localStorage.getItem(LSarrayName));
    if (temp === null) {
        temp = []
    }
    return temp
}

function drawList(localData) {
    console.log(`localData.length = ${localData.length}     localData = ${localData}`);
    if (localData.length == 0) {
        return
    }
    if (toDoUi.classList.contains(`hide`) ) {
    toDoUi.classList.toggle(`hide`);
    }
    else{
        toDoUi.innerHTML= '';
    }
    for (dataidx in localData) {

        const newli = document.createElement('li');
        const newform = document.createElement(`form`);
        const newCheck = document.createElement(`input`);
        const newspan = document.createElement(`span`);
        const X = document.createElement(`span`);
        X.classList.add(`Xnum${dataidx}`);
        X.innerHTML = `&#10006;`;
        newform.appendChild(newCheck);
        newform.classList.add(`formNumber${dataidx}`);
        newCheck.setAttribute('type','checkbox');
        newCheck.classList.add(`checkNumber${dataidx}`);
        newspan.classList.add(`textNumber${dataidx}`);
        const [toDoStr, doOrNot] = localData[dataidx];
        newspan.innerText = toDoStr;
        newli.classList.add(dataidx);
        newli.appendChild(newspan);
        newli.appendChild(newform);
        newli.appendChild(X);
        toDoUi.appendChild(newli);
        setCheckStyle(newform, dataidx);
        setevent(newli,dataidx);
    }
}

function setCheckStyle(checkform, index) {
    const checkbox = checkform.querySelector(`.checkNumber${index}`);
    checkbox.style.margin = '3px';
    checkform.style.position = 'relative';
    checkform.style.top = '-18px';
    offwidth = checkform.parentNode.querySelector(`.textNumber${index}`).offsetWidth;
    checkform.style.left = `${offwidth + 30}px`;
    const crossMark = checkform.parentNode.querySelector(`.Xnum${index}`);
    crossMark.style.position = 'relative';
    crossMark.style.top = '-40px';
    crossMark.style.left = `${offwidth + 60}px`;
    
}

function setevent(liObj, idxNum) {
    checkBoxObj = liObj.querySelector(`.formNumber${idxNum}`).querySelector('input');
    //console.log(checkBoxObj);
    checkBoxObj.addEventListener("click", function(){checkClickHandler(idxNum)});
}

function checkClickHandler(idxNum){
    checkObj = toDoUi.querySelector(`.formNumber${idxNum}`).querySelector('input');
    console.log(checkObj); // 확인용
    if(localData[idxNum][1] !== checkObj.checked)
    {
        localData[idxNum][1] = checkObj.checked
        localStorage.setItem(LSarrayName, JSON.stringify(localData));
    }
}


function askNewToDo(){
    //console.log(toDoInput);
    toDoInput.addEventListener("submit", handleNewInput);
}

function handleNewInput(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    localData.add([newToDo, false]);
    localStorage.setItem(LSarrayName, JSON.stringify(localData));
}

init()