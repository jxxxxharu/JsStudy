const testTxt = document.querySelector(".test-txt"),
    button = document.querySelector(".button");
    
const  BU_CL = "buttonClicked"

function SwitchCondition () {
    condition = testTxt.classList.contains(BU_CL);
    testTxt.classList.toggle(BU_CL)
}

