// questions to be asked
var questions = [
  {
      title: "What is Javascript?",
      choices: ["A scripting or programming language that lets you incorporate more complex features on web pages", 
                  "Manual about different coffee varietes", 
                  "A style sheet language used to describe how HTML elements will be displayed on screen"],
      answer: "A scripting or programming language that lets you incorporate more complex features on web pages"

  },

  {
      title: "What is CSS?",
      choices: ["Some new type of snack", 
                  "A family of different fonts", 
                  "A style sheet language used to describe how HTML elements will be displayed on screen"],
      answer: "A style sheet language used to describe how HTML elements will be displayed on screen"

  },

  {
      title: "The most common types of data types do NOT include:",
      choices: ["booleans", 
                  "popups", 
                  "strings"],
      answer: "popups"

  },

  {
      title: "Which symbol is used to represent an <id> in CSS?",
      choices: ["#", "+", "()"],
      answer: "#"

  },

  {
      title: "What is a useful tool for debugging problems on the webpage?",
      choices: ["creator.log", "console.log", "help.log"],
      answer: "console.log"

  },

  {
      title: "What is div in HTML?",
      choices: ["A tag that defines a division or section in HTML", 
                  "Calls out a function in Javascript", 
                  "Creates a new paragraph"],
      answer: "A tag that defines a division or section in HTML"

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
  questionArea.innerText = questionAsked.title

  questionAsked.choices.forEach(function(choice, i){
    var choiceEl = document.createElement("button");
  

    // event listener for each choice
    choiceEl.addEventListener("click")
  })



}


// store/retrieve scores in local storage

// startQuiz()
