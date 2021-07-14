'use strict'

var secretNumber= Math.trunc(Math.random() *20) +1;
// console.log(secretNumber)
// console.log(secretNumber)
var score = 20
var highscore=0
//query Selector//
// document.querySelector(".number").textContent = secretNumber;
//let questionMark = document.querySelector(".number").textContent;//
// QuestionMark = secretNumber;
document.querySelector(".check").addEventListener("click", function(){

    var userInput = Number(document.querySelector(".guess").value);
    // contol structure//
    if(userInput == secretNumber){
        document.querySelector(".message").textContent="You got it right !!😆";
        document.querySelector("body").style.backgroundColor = "blue";
        highscore = score;
        document.querySelector(".highscore").textContent = score;
    }else if(userInput>secretNumber){
            document.querySelector(".message").textContent="Too high! Try again!😞";
            document.querySelector(".score").textContent = score --;
        }else if (userInput<secretNumber) {
            document.querySelector(".message").textContent = "Too LOW! Try Again!🤢";
            document.querySelector(".score").textContent = score--;
        }else{
            document.querySelector(".message").textContent = "You got Wrong!😭";
        
    }
})
document.querySelector(".again").addEventListener("click", function(){
    document.querySelector(".score").textContent = 20;
    secretNumber = Math.trunc(Math.random()*20+1);
document.querySelector(".message").textContent="start guessing..."
document.querySelector(".highscore").textContent=0;
document.querySelector(".score").textContent =20;
document.querySelector(".guess").value='';
// erySedocument.qulector(".number").textContent = secretNumber;

document.querySelector("body").style.backgroundColor = "black";
document.querySelector("body").style.color = "white";




})