

// variables to reference elements
var startBtn = document.getElementById("start-button")
var timer = document.getElementById("time-left")
var time = 60;

var quizQuestions = document.getElementById("quiz-section")
var userScore = document.getElementById("user-score")
var leaderBoard = document.getElementById("high-scores")


startBtn.addEventListener("click", startQuiz)

function startQuiz(){
    console.log("started")

    
     

    
    // hide the introduction page
    var quizIntro = document.getElementById("quiz-start")
    quizIntro.setAttribute("class", "hide")
    
    // show the questions section on the index
    var quizStart = document.getElementById("quiz-start")
    quizStart.removeAttribute("style");

    getQuestion();
    
    
    



}

function getQuestion() {


}

// questions to be asked

var myquestions = [
    {
        question: "What is Javascript?",
        
        answers: {
            a: "A scripting or programming language that lets you incorporate more complex features on web pages", 

            b: "Manual about different coffee varietes",

            c: "A style sheet language used to describe how HTML elements will be displayed on screen",

        },

        correctAnswer: "a"

    },

    {
        question: "Commonly used data types do NOT include:",
        
        answers: {
            a: "booleans", 

            b: "strings",

            c: "popups",

        },

        correctAnswer: "c"

    },
]


// score




// start quiz function


// get questions for the quiz
