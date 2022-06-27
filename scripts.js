//in HTML, you can only have one id per element. 
//document.getElementById("currentNumber"); will get the whole thing: html tag and the content.
var currentNumberWrapper = document.getElementById("currentNumber");

//to get the content, we can use innerText. But it'l be a string.
var currentNumberString = currentNumberWrapper.innerText;

//to be able to use it, we need to parse it into an integer.
var currentNumber = parseInt(currentNumberString , 10);

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    
}
