
//Grabing all #ids from html

var quizbd = document.getElementById ("quiz");

var answerEl = document.getElementById("answers"); 

var scoreEl = document.getElementById("Score");

var gameover = document.getElementById("gameover");

var questionEl = document.getElementById("question");

var quizTimer = document.getElementById("time"); 

var startButton = document.getElementById("startBtn"); 

var startQuiz = document.getElementById("firstpage");

var hsContainer = document.getElementById("hscontainer");

var secondPage = document.getElementById("secondpage");

var hsinput = document.getElementById("initials");

var hsinitials = document.getElementById("userinitials");

var gameoverBtn = document.getElementById("gameoverBtn");

var scoreBtn = document.getElementById("scoreBtn");

var hs = document.getElementById("userhighscore");

var btnA = document.getElementById("A");

var btnB = document.getElementById("B");

var btnC = document.getElementById("C");

var btnD = document.getElementById("D");


//For the questions 

var quizQuestions = [{

question: "",
choiceA: "",
choiceB: "",
choiceC: "",
choiceD: "",

correctAnswer: "",


}]

var quizQuestions = [{

    question: "",
    choiceA: "",
    choiceB: "",
    choiceC: "",
    choiceD: "",
    
    correctAnswer: "",
    
    
    }]

    
    var quizQuestions = [{

        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        
        correctAnswer: "",
        
        
        }]

        
     var quizQuestions = [{

            question: "",
            choiceA: "",
            choiceB: "",
            choiceC: "",
            choiceD: "",
            
            correctAnswer: "",
            
            
            }]

            
     var quizQuestions = [{

                question: "",
                choiceA: "",
                choiceB: "",
                choiceC: "",
                choiceD: "",
                
                correctAnswer: "",
                
                
                }]

      var quizQuestions = [{

                    question: "",
                    choiceA: "",
                    choiceB: "",
                    choiceC: "",
                    choiceD: "",
                    
                    correctAnswer: "",
                    
                    
                    }]

     var quizQuestions = [{

                        question: "",
                        choiceA: "",
                        choiceB: "",
                        choiceC: "",
                        choiceD: "",
                        
                        correctAnswer: "",
                        
                        
                        }]

      var quizQuestions = [{

                            question: "",
                            choiceA: "",
                            choiceB: "",
                            choiceC: "",
                            choiceD: "",
                            
                            correctAnswer: "",
                            
                            
                            }]

                            

//Variables for the function 

var questionIndex = quizQuestions.length; 

var currentQuestionIndex = 0;

var timeLeft = 85; 

var userScore = 0;

var correct;

var timerInterval; 

