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
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

// create variables to reference elements
var startBtn = document.getElementById("start-button")
var quizIntro = document.getElementById("quiz-start")
var timer = document.getElementById("time-left")

startBtn.addEventListener("click", startQuiz)
//starts the countdown timer once start button is clicked
function startQuiz() {
  console.log('started')

    timeLeft = 60;
    document.getElementById("time-left").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("time-left").innerHTML = timeLeft;
        //end the game when timer is at 0
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 1000);

    nextQuestion();
}


//stop timer to end game
function endGame() {
    clearInterval(timer);

    
   

    document.getElementById("quiz-section").innerHTML = quizSection;
}

//store the scores on local storage
function storeScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.getElementById('name').value);
    getScore();
}


function getScore() {
    
}

//clear the score to reset game
function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName",  "");

    resetGame();
}


function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById("time-left").innerHTML = timeLeft;


}

//takes 10 seconds off timer if answer is incorrect
function incorrect() {
    timeLeft -= 10; 
    nextQuestion();
}

//increase score by 10 points for right answer
function correct() {
    score += 10;
    nextQuestion();
}

//loops through the questions 
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }

    var quizSection = "<h2>" + questions[currentQuestion].title + "</h2>"

    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizSection += buttonCode
    }


    document.getElementById("quizBody").innerHTML = quizSection;
}


