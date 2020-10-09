var questionQuiz = document.getElementById("quiz");
var questionSubmit = document.getElementById("results");
var score = document.getElementById("score");
var timer = document.getElementById("timer");

var startQuiz = document.getElementById("start");

// variableName.addEventListener(arg1, arg2)
// variableName.addEventListener(what we listen to, what we do)
var score = 0;
var secondsLeft = 75;
var currentQuestionIndex = 0;
// whatTheUserClicked = a string ""
function goToNextQuestion(whatTheUserClicked) {
  var correctText = questions[currentQuestionIndex].answer;

  if (whatTheUserClicked === correctText) {
    console.log("Correct!");
    score++;
  } else {
    console.log("Sorry, that is not correct.");
  }
  currentQuestionIndex++;
  getNewQuestion(currentQuestionIndex);
}
timerInterval = setInterval(function () {
  timeLeft--;
  quizTimer.textContent = "Time left: " + timeLeft;

  if (timeLeft === 0) {
    clearInterval(timerInterval);
    showScore();
  }
}, 1000);
quizBody.style.display = "block";

function answerClickSetUp() {
  var a = document.getElementById("a");
  var b = document.getElementById("b");
  var c = document.getElementById("c");
  var d = document.getElementById("d");

  a.addEventListener("click", function () {
    goToNextQuestion(a.innerText);
  });
  b.addEventListener("click", function () {
    goToNextQuestion(b.innerText);
  });
  c.addEventListener("click", function () {
    goToNextQuestion(c.innerText);
  });
  d.addEventListener("click", function () {
    goToNextQuestion(d.innerText);
  });
}
answerClickSetUp();

startQuiz.addEventListener("click", function () {
  getNewQuestion(currentQuestionIndex);
});

var currentQuestion;
function getNewQuestion(questionIndex) {
  var question = questions[questionIndex];
  currentQuestion = question;
  var title = question.title;
  // console.log(title);
  var questionEl = document.getElementById("question");
  questionEl.innerText = title;

  var choice1 = question.choices[0];
  var answerEl1 = document.getElementById("a");
  answerEl1.innerText = choice1;
  // console.log(choice1);

  var choice2 = question.choices[1];
  var answerEl2 = document.getElementById("b");
  answerEl2.innerText = choice2;
  // console.log(choice2);

  var choice3 = question.choices[2];
  var answerEl3 = document.getElementById("c");
  answerEl3.innerText = choice3;
  // console.log(choice3);

  var choice4 = question.choices[3];
  var answerEl4 = document.getElementById("d");
  answerEl4.innerText = choice4;
  // console.log(choice4);

  document.getElementById("question").innerText = title;
  document.getElementById("a").innerText = choice1;
  document.getElementById("b").innerText = choice2;
  document.getElementById("c").innerText = choice3;
  document.getElementById("d").innerText = choice4;
}
//submitAnswer.addEventListener("click", quizTime);
function scoreKeeper() {
  document.getElementById("score").innerHTML = count++;
}
scoreKeeper();

startBtn.addEventListener("click", function () {
  timer = setInterval(function () {
    timeGauge.innerHTML = "Time: " + count--;
    if (count == 1) clearInterval(timer);
  }, 1000);
});
