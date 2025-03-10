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

//JavaScript code snippet initializes four variables
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timer;

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



