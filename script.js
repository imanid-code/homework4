var quizBody = document.getElementById("quiz");

      var answersEl = document.getElementById("answers");

      var scoreEl = document.getElementById("score");

      var gameoverDiv = document.getElementById("gameover");

      var questionEl = document.getElementById("question");

      var quizTimer = document.getElementById("time");

      var startquizDiv = document.getElementById("startBtn");

      var startPage = document.getElementById("firstpage");

      var hsContainer = document.getElementById("hscontainer");

      var secondPage = document.getElementById("secondpage");

      var inputName = document.getElementById("initials");

      var hsDisplayname = document.getElementById("hsinitials");

      var header = document.getElementById("hsheader");

      var gameoverBtn = document.getElementById("gameoverBtn");

      var submitBtn = document.getElementById("scoreBtn");

      var hScore = document.getElementById("hscore");

      var buttonA = document.getElementById("a");

      var buttonB = document.getElementById("b");

      var buttonC = document.getElementById("c");

      var buttonD = document.getElementById("d");

      var startpshs = document.getElementById("startPagehs");

      //
      var quizQuestions = [{
        question: "What tag starts an HTML file?",
        choiceA: "<HTML>",
        choiceB: "<head>",
        choiceC: "<!DOCTYPE html>",
        choiceD: "<div>",
        correctAnswer: "c"
      },
      {
        question: "Which one is primarily for designing webpages (style, colors,fonts,aesthetics etc?",
        choiceA: "CSS",
        choiceB: "Javascript",
        choiceC: "html",
        choiceD: "classes",
        correctAnswer: "a"
      },
      {
        question: "Which one adjust the space inside the box?",
        choiceA: "content",
        choiceB: "padding",
        choiceC: "margins",
        choiceD: "border",
        correctAnswer: "b"
      },
      {
        question: "What is the name of the panel that displays important messages and errors for developers?",
        choiceA: "inspect",
        choiceB: "elements",
        choiceC: "notepad",
        choiceD: "console.log",
        correctAnswer: "d"
      },
      {
        question: "What symbol and how many did you need to comment out notes? ",
        choiceA: "2, **",
        choiceB: "1 , / ",
        choiceC: "2, //",
        choiceD: "2, ##",
        correctAnswer: "c"
      },
      {
        question: "Which word is NOT properly Camel Cased?",
        choiceA: "styleSheet",
        choiceB: "javaScript",
        choiceC: "camelCase",
        choiceD: "DocumentGet",
        correctAnswer: "d"
      },
      {
        question: "Which two symbols are used to style a class and id in CSS",
        choiceA: "!, $",
        choiceB: "#,*",
        choiceC: "&, %",
        choiceD: ". , #",
        correctAnswer: "d"
      },
      {
        question: "What tag wraps Javascript into html?",
        choiceA: "<link>",
        choiceB: "<script>",
        choiceC: "<div>",
        choiceD: "<body>",
        correctAnswer: "b"
      }];

      var finalQuestion = quizQuestions.length;
      var currentQuestionIndex = 0;
      var timeLeft = 86;
      var timeInterval;
      var score = 0;
      var correct;

      function generateQuiz() {
        if (currentQuestionIndex === finalQuestion) {
          return showScore();
        }

        var currentQuestion = quizQuestions[currentQuestionIndex];
        questionEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
        buttonA.innerText = currentQuestion.choiceA;
        buttonB.innerText = currentQuestion.choiceB;
        buttonC.innerText = currentQuestion.choiceC;
        buttonD.innerText = currentQuestion.choiceD;
      };

      function startQuiz() {
        startPage.style.display = "none";
        generateQuiz();
        timerInterval = setInterval(function () {
          timeLeft--;
          quizTimer.textContent = "Time left: " + timeLeft;
          if (timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
          }
        }, 1000);
        quizBody.style.display = "block";
      }

      function showScore() {
        quizBody.style.display = "none";
        gameoverDiv.style.display = "block";
        clearInterval(timerInterval);
        scoreEl.innerText = "You got " + score + " out of " + quizQuestions.length + " correct!"
      }

      submitBtn.addEventListener("click", function highscore() {
        console.log(inputName)
        if (inputName.value === "") {
          alert("Initials cannot be blank");
          return false;
        } else {
          var saveHighscores = JSON.parse(localStorage.getItem("saveHighscores")) || [];
          var currentUser = inputName.value.trim();
          var currentHighscore = {
            name: currentUser,
            score: score
          };

          gameoverDiv.style.display = "none";
          secondPage.style.display = "block";

          saveHighscores.push(currentHighscore);
          localStorage.setItem("saveHighscores", JSON.stringify(saveHighscores));
          generateHighscores();
        }
      });

      function generateHighscores() {
        var highscores = JSON.parse(localStorage.getItem("saveHighscores")) || [];
        for (i = 0; i < highscores.length; i++) {
          var newName = document.createElement("li");
          var newScore = document.createElement("li");
          console.log(newName);
          console.log(newScore);
          newName.textContent = highscores[i].name;
          newScore.textContent = highscores[i].score;
          hsDisplayname.appendChild(newName);
          hScore.appendChild(newScore);
          gameoverBtn.style.display = "flex";
        }
      }

      function showHighscore() {
       startquizDiv.style.display = "none";
       gameoverDiv.style.display = "none";
       hsContainer.style.display = "flex";
       secondPage.style.display = "block";
       gameoverBtn.style.display = "flex";
       startPage.style.display = "none";
       header.style.display = "none";
       

        generateHighscores();
      }

      function restart() {
        window.localStorage.clear();
        hsDisplayname.textContent = "";
         hScore.textContent = "";
       
      }

      function replay() {
        hsContainer.style.display = "none";
        gameoverDiv.style.display = "none";
        startPage.style.display = "flex";
        startquizDiv.style.display = "flex";
        
        timeLeft = 86;
        score = 0
        currentQuestionIndex = 0;
      }

      function checkAnswer(answer) {
        correct = quizQuestions[currentQuestionIndex].correctAnswer;
        if (answer === correct && currentQuestionIndex !== finalQuestion) {
          score++;
          alert("That is correct!");
          currentQuestionIndex++;
          generateQuiz();

        } else if (answer !== correct && currentQuestionIndex !== finalQuestion) {
            timeLeft -= 8;
          alert("That is incorrect.")
          currentQuestionIndex++;
          generateQuiz();
          //
        } else {
          showScore();
        }
      }

      startquizDiv.addEventListener("click", startQuiz);