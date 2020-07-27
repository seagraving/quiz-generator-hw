// create variables to reference elements
var startBtn = document.getElementById("start-button")
var quizIntro = document.getElementById("quiz-start")
var timer = document.getElementById("time-left")
var timerInterval;
var timerCount = 60;

var quizQuestions = document.getElementById("quiz-section")


var userScore = document.getElementById("user-score")
var submitBtn = document.getElementById("submit-initials")

var highscoreBtn = document.getElementById("high-score-button")
var leaderBoard = document.getElementById("high-scores")
let highScores = [];

// store/retrieve scores in local storage
if (JSON.parse(localStorage.getItem("scores")) !== null) {
    highScores = JSON.parse(localStorage.getItem("scores"));
}


startBtn.addEventListener("click", startQuiz)

function startQuiz(){
    console.log("started")
    // hide the introduction page
    quizIntro.setAttribute("class", "container");
    

    
    // show the questions section on the index
    var quizStart = document.getElementById("quiz-start")
    quizStart.removeAttribute("style");

    getQuestion();
    
    
    



}

function getQuestion() {



}

function setTime() {
    var timerInterval = setInterval(function() {
      time--;
      timer.textContent = time;
        
      if(time === 0) {
        clearInterval(timerInterval);
        end();
      }
     
  
    }, 1000);
}


startQuiz()





// score




// get questions for the quiz
