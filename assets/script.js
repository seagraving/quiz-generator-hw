// questions to be asked
var questions = [
  {
      question: "What is Javascript?",
      choice1: "A scripting or programming language that lets you incorporate more complex features on web pages",
      choice1: "Manual about different coffee varietes", 
      choice3:"A style sheet language used to describe how HTML elements will be displayed on screen",
      answer: 1,

  },

  {
      question: "What is CSS?",
      choice1: "Some new type of snack", 
      choice2: "A family of different fonts", 
      choice3: "A style sheet language used to describe how HTML elements will be displayed on screen",
      answer: 3,

  },

  {
      question: "The most common types of data types do NOT include:",
      choice1: "booleans", 
      choice2: "popups", 
      choice3: "strings",
      answer: 2,

  },

  {
      question: "Which symbol is used to represent an <id> in CSS?",
      choice1: "#", 
      choice2: "+", 
      choice3: "()",
      answer: 1,

  },

  {
      question: "What is a useful tool for debugging problems on the webpage?",
      choice1: "creator.log", 
      choice2: "console.log", 
      choice3: "help.log",
      answer: 2,

  },

];

//setting values for timer
var currentQuestionIndex = 0;
var time = questions.length * 10;
var timerId;

// create variables to reference elements
var startBtn = document.getElementById("start-button")
var quizIntro = document.getElementById("quiz-start")
var timer = document.getElementById("time-left")


var quizQuestions = document.getElementById("quiz-section")
var questionArea = document.getElementById("question")



var userScore = document.getElementById("user-score")
var submitBtn = document.getElementById("submit-initials")

var highscoreBtn = document.getElementById("high-score-button")
var leaderBoard = document.getElementById("high-scores")

startBtn.addEventListener("click", startQuiz)

// starts quiz
function startQuiz(){
    
    // hide the introduction page
    quizIntro.setAttribute("class", "hide");
    

    
    // show the questions section on the index
    quizQuestions.classList.remove("hide");

    // start timer
    timerId = setInterval(timeLeft, 1000);
    // show the start time
    timer.textContent = time;

    getQuestion();


}

// decrement timer
function timeLeft() {
  time--;
  timer.textContent = time;

  if (time === 0) {
    clearInterval(timer);
    quizEnd();
  }
}

// get questions for the quiz
function getQuestion() {
  var questionAsked = questions[currentQuestionIndex];
  questionArea.innerText = questionAsked.question

  questionAsked.choices.forEach(function(choice, i){
    var choiceEl = document.createElement("button");
  

    // event listener for each choice
    choiceEl.addEventListener("click")
  })



}


// store/retrieve scores in local storage

// startQuiz()
