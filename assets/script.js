

var
var
var displayBtn

submitBtn.addEventListener("click", submitScore);
displayBtn.addEventListener("click", showScores);

function submitScore() {
    var userScores = localStorage.getItem("UserScore") || [];
    userScores.push({initials: userInput.value, score: 100});
    localStorage.setItem("UserScore", JSON.stringify(userScores));

}

function showScores() {
    var userScores = JSON.parse(localStorage.getItem("UserScore") || []);
    for (var i = 0; i < userScores.length; i++){
        console.log("User Initials: " + userScores[i].initials + " Score: " + userScores[i])
    }
}