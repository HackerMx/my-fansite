// quiz.js
const questions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Paris",
            b: "Madrid",
            c: "Berlin",
            d: "Rome"
        },
        correctAnswer: "a"
    },
    // Add more questions similarly
];

let currentQuestion = 0;
const nextButton = document.getElementById("next");
const resultText = document.getElementById("result");

function displayQuestion() {
    const question = questions[currentQuestion];
    document.querySelector(".question p").textContent = question.question;
    // Display answer options (use question.answers)
}

function checkAnswer() {
    // Check if the selected answer is correct
    // Update resultText accordingly
}

nextButton.addEventListener("click", () => {
    checkAnswer();
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        resultText.textContent = "Quiz completed!"; // Customize final message
    }
});

displayQuestion(); // Show the first question
