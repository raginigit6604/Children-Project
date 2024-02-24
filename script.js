// Define variables
let num1, num2, correctAnswer;

// Function to generate a new question
function generateQuestion() {
    const numDigits = Math.floor(Math.random() * 3) + 2; // Generates 2, 3, or 4 digits
    num1 = Math.floor(Math.random() * Math.pow(10, numDigits));
    num2 = Math.floor(Math.random() * Math.pow(10, numDigits));
    correctAnswer = num1 + num2;
    document.getElementById('question').innerHTML = `${num1} + ${num2} = ?`;
}


// Function to check the answer
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const resultElement = document.getElementById('result');

    if (!isNaN(userAnswer)) {
        if (userAnswer === correctAnswer) {
            resultElement.innerHTML = 'Correct answer! Well done!';
        } else {
            resultElement.innerHTML = `No, that's not correct. The correct answer is ${correctAnswer}.`;
        }
    } else {
        resultElement.innerHTML = 'Please enter a valid number.';
    }
}

// Function to move to the next question
function nextQuestion() {
    document.getElementById('answer').value = '';
    document.getElementById('result').innerHTML = '';
    generateQuestion();
}

// Function to exit the practice
function exitPractice() {
        const container = document.querySelector('.container');
        container.innerHTML = '<p>Thank you for practicing addition!</p>';
    }
    

// Initialize the first question
generateQuestion();
