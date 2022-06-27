//in HTML, you can only have one id per element. 
//document.getElementById("currentNumber"); will get the whole thing: html tag and the content.
var currentNumberWrapper = document.getElementById("currentNumber");

//to get the content, we can use innerText. But it'l be a string.
var currentNumberString = currentNumberWrapper.innerText;

//to be able to use it, we need to parse it into an integer.
var currentNumber = parseInt(currentNumberString , 10);


var addBtn = document.getElementById("addButton");
var subtractBtn = document.getElementById("subtractButton");

addBtn.addEventListener("click", increment);
subtractBtn.addEventListener("click", decrement);
   
function enableBtn(){
    if (currentNumber > 9){
        addBtn.className="disabled-btn";
    } else {
        addBtn.className="";
    }

    if (currentNumber < -9){
        subtractBtn.className="disabled-btn";
    } else {
        subtractBtn.className="";
    }
    
}

function isNegative(){
    if (currentNumber < 0) {
        currentNumberWrapper.className = "negative";
    } else {
        currentNumberWrapper.className = "positive";
    }
}

function increment(){
    if (currentNumber < 10){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }  
    isNegative();
    enableBtn();
}

function decrement(){
    if (currentNumber > -10){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }  
    isNegative();
    enableBtn();
}


