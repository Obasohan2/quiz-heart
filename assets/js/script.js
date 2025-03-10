// Arrays of questions and optional answers//
const questions = [
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antartica", correct: true },
        ]
    },

    {
        question: "Which is the largest animal ?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },

    {
        question: "What is 176 - 18 ?",
        answers: [
            { text: "158", correct: true },
            { text: "138", correct: false },
            { text: "140", correct: false },
            { text: "161", correct: false },
        ]
    },

    {
        question: "What is the capital of Spain?",
        answers: [
            { text: "Barcelona", correct: false },
            { text: "Alicante", correct: false },
            { text: "Madrid", correct: true },
            { text: "Bilbao", correct: false },
        ]
    },
    {
        question: "Who is a football player ?",
        answers: [
            { text: "Michael Jackson", correct: false },
            { text: "Cristiano Ronaldo", correct: true },
            { text: "Hussain Bolt", correct: false },
            { text: "Joe Biden", correct: false },
        ]
    },
    {
        question: "Who is a known singer ?",
        answers: [

            { text: "Mohammed Salah", correct: false },
            { text: "Alex Ferguson", correct: false },
            { text: "Alan Shearer", correct: false },
            { text: "Michael Jackson", correct: true },
        ]
    },
    {
        question: "What is the name of UK currency ?",
        answers: [
            { text: "Dollar", correct: false },
            { text: "Naira", correct: false },
            { text: "Pounds Sterling", correct: true },
            { text: "Euro", correct: false },
        ]
    },
    {
        question: "Where is Spain located ?",
        answers: [
            { text: "Africa", correct: false },
            { text: "Australia", correct: false },
            { text: "Asia", correct: false },
            { text: "Europe", correct: true },
        ]
    },
    {
        question: "Who is a boxer ?",
        answers: [
            { text: "Harry Kane", correct: false },
            { text: "Justin Bieber", correct: false },
            { text: "Anthony Joshua", correct: true },
            { text: "Rishi Sunak", correct: false },
        ]
    },
]

// declaring variable element
const loginPage = document.getElementById("login-page");
const registerForm = document.getElementById("register-form");
const registerUsername = document.getElementById("register-username");
const quizContainer = document.getElementById("quiz-container");
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const userNameDisplay = document.getElementById("user-name");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("time-left");
const scoreSection = document.getElementById("score-section");
const finalScoreElement = document.getElementById("final-score");
const viewScoresBtn = document.getElementById("view-scores-btn");
const saveScoreBtn = document.getElementById("save-score-btn");
const playAgainBtn = document.getElementById("play-again-btn");
const highScoresSection = document.getElementById("high-scores-section");
const highScoresList = document.getElementById("high-scores-list");
const checkHighScoresBtn = document.getElementById("check-highscores");
const loginButton = document.getElementById("login-btn");

//JavaScript code snippet initializes four variables
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timer;

//Check High Score 
checkHighScoresBtn.addEventListener("click", () => {
    loginPage.style.display = "none";
    displayHighScores();
})

// Retrieve stored usernames from localStorage (or initialize an empty list)
let existingUsernames = JSON.parse(localStorage.getItem("usernames")) || [];

// Registration Logic
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("register-username").value.trim();

    if (username === "") {
        Swal.fire("Username cannot be empty!");
        return false;
    }

    if (existingUsernames.includes(username)) {
        Swal.fire("Username already exists! Choose a different one.");
        return false;
    }

    // Register new username
    existingUsernames.push(username);
    localStorage.setItem("usernames", JSON.stringify(existingUsernames));
    Swal.fire("Registration successful! You can use this registered Username to now log in.");
    return true;
});



// Login Logic
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("username").value.trim();

    // Initially disable the login button
    //loginButton.disabled = true;

    if (username === "") {
        Swal.fire("Username cannot be empty!");
        return false;
    }


    if (!existingUsernames.includes(username)) {
        Swal.fire("Username not found! Please register a username.");
        return false;
    }

    Swal.fire("Login successful! Redirecting...Click OK to continue");

    localStorage.setItem("username", username);
    userNameDisplay.textContent = username;
    loginPage.style.display = "none";
    quizContainer.style.display = "block";
    startQuiz();
});


// Start Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 30;
    nextButton.style.display = "none";
    startTimer();
    showQuestion();
}

// Timer Function
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showScore();
        }
    }, 1000);
}


// Show Question
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Reset State
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Select Answer
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}


// Show Score
function showScore() {
    clearInterval(timer);
    quizContainer.style.display = "none";
    scoreSection.style.display = "block";
    finalScoreElement.textContent = score;
}

// Handle Next Question
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Show Score
function showScore() {
    clearInterval(timer);
    quizContainer.style.display = "none";
    scoreSection.style.display = "block";
    finalScoreElement.textContent = score;
}

// Handle Next Question
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


