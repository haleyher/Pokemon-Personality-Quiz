/*Add your JavaScript here*/
var charmanderScore = 0; //store the dog score
var squirtleScore = 0; //store the cat score

var questionCount = 0; //store the number of answers clicked on

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", charmander);
q1a2.addEventListener("click", squirtle);
q2a1.addEventListener("click", squirtle);
q2a2.addEventListener("click", charmander);
q3a1.addEventListener("click", charmander);
q3a2.addEventListener("click", squirtle);
restart.addEventListener("click", restartQuiz)

function charmander(){
  charmanderScore += 1;
  questionCount += 1;

  console.log("questionCount =" + questionCount + "charmanderScore =" + charmanderScore);
 
  if(questionCount == 3) {
      console.log("The quiz is done!")
    updateResult();
  }
}

function squirtle(){
  squirtleScore += 1;
  questionCount += 1;

  console.log("questionCount =" + questionCount + " squirtleScore = " + squirtleScore);

  
  if(questionCount == 3) {
      console.log("The quiz is done!")
    updateResult();
  }
}

function updateResult() {
    if (charmanderScore >= 2){
      result.innerHTML = "Your starter pokémon is Charmander!";
      console.log("Charmander chooses you!"); 
    } else if (squirtleScore >= 2) {
      result.innerHTML = "Your starter pokémon is Squirtle!";
      console.log("Squirtle chooses you!");
    }
}

function restartQuiz() {
  result.innerHTML = "Your starter pokémon is...";
  charmanderScore = 0;
  squirtleScore = 0;
  questionCount = 0;
  
  
}


