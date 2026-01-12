// Game State
let currentQuestionIndex = 0;
let score = 0;
let hasAnsweredCurrent = false; // To track if the user has already answered the current question correctly (to prevent double scoring)
let firstAttempt = true; // To track if it's the first attempt on this question (for scoring)

// DOM Elements
const questionNumberEl = document.getElementById('question-number');
const categoryBadgeEl = document.getElementById('category-badge');
const questionTextEl = document.getElementById('question-text');
const hintBtn = document.getElementById('hint-btn');
const hintTextEl = document.getElementById('hint-text');
const optionsContainer = document.getElementById('options-container');
const feedbackArea = document.getElementById('feedback-area');
const feedbackMessageEl = document.getElementById('feedback-message');
const feedbackDetailEl = document.getElementById('feedback-detail');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const quizContainer = document.getElementById('quiz-container');
const finalScoreContainer = document.getElementById('final-score');
const scoreValueEl = document.getElementById('score-value');
const restartBtn = document.getElementById('restart-btn');

// Initialize Game
function initGame() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.classList.remove('hidden');
    finalScoreContainer.classList.add('hidden');
    loadQuestion();
}

// Load Question
function loadQuestion() {
    const question = quizData[currentQuestionIndex];
    hasAnsweredCurrent = false;
    firstAttempt = true;

    // Update UI text
    questionNumberEl.textContent = `Pregunta ${currentQuestionIndex + 1}/${quizData.length}`;
    categoryBadgeEl.textContent = question.category;
    questionTextEl.textContent = question.question;
    hintTextEl.textContent = question.hint;

    // Reset States
    hintTextEl.classList.add('hidden');
    feedbackArea.classList.add('hidden');
    feedbackArea.classList.remove('success', 'error');
    nextBtn.classList.add('hidden');

    // Update Progress Bar
    const progress = ((currentQuestionIndex) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Generic shuffle function
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Create a shallow copy and shuffle options
    const shuffledOptions = shuffleArray([...question.options]);

    // Render Options
    optionsContainer.innerHTML = '';
    shuffledOptions.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option.text;
        btn.onclick = () => handleOptionClick(option, btn);
        optionsContainer.appendChild(btn);
    });
}

// Handle Option Click
function handleOptionClick(option, btnElement) {
    if (hasAnsweredCurrent) return; // Prevent clicking after correct answer

    // Show feedback immediately
    feedbackArea.classList.remove('hidden', 'success', 'error');

    if (option.correct) {
        // Correct Answer
        btnElement.classList.add('correct');
        feedbackArea.classList.add('success');
        feedbackMessageEl.textContent = "¡Felicidades Antito<3!";
        feedbackDetailEl.textContent = option.feedback;

        triggerConfetti();

        if (firstAttempt) {
            score++;
        }

        hasAnsweredCurrent = true;
        nextBtn.classList.remove('hidden');

        // Disable all other buttons
        const allBtns = optionsContainer.querySelectorAll('.option-btn');
        allBtns.forEach(btn => {
            if (btn !== btnElement) {
                btn.disabled = true;
                btn.style.opacity = '0.6';
            }
        });

    } else {
        // Incorrect Answer
        btnElement.classList.add('incorrect');
        feedbackArea.classList.add('error');
        feedbackMessageEl.textContent = "Respuesta Incorrecta";
        feedbackDetailEl.textContent = option.feedback;

        // Mark as failed attempt for scoring purposes
        firstAttempt = false;

        // Disable this button so they don't click it again
        btnElement.disabled = true;
    }
}

// Toggle Hint
hintBtn.addEventListener('click', () => {
    hintTextEl.classList.toggle('hidden');
});

// Next Button
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
});

// Show Final Score
function showFinalScore() {
    quizContainer.classList.add('hidden');
    finalScoreContainer.classList.remove('hidden');
    // Score display removed as per user request

    // Final progress bar update
    progressBar.style.width = '100%';

    if (score === quizData.length) {
        triggerConfetti();
        setTimeout(triggerConfetti, 1000); // More confetti for perfect score
    }
}

// Restart Game
restartBtn.addEventListener('click', initGame);

// Confetti Effect
function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6699', '#FFC0CB', '#FF1493', '#FFFFFF']
    });
}

// Start on load
initGame();
