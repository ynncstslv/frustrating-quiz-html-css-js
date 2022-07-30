// declare quiz array

const quizData = [
    {
        question: "I am a mother's child and a father's child but nobody's son. Who am I?",
        a: "A grandson",
        b: "A daughter",
        c: "A father",
        d: "An uncle",
        correct: "b"
    }, {
        question: "When I get multiplied by any number, the sum of the figures in the product is always me. What am I?",
        a: "9",
        b: "8",
        c: "2",
        d: "4",
        correct: "a"
    }, {
        question: "What is 3/7 chicken, 2/3 cat and 2/4 goat?",
        a: "Childbirth",
        b: "Chiffon",
        c: "Chicago",
        d: "Chipmunk",
        correct: "c"
    }, {
        question: "I'm a 7 letter word. I become longer when my third letter is removed. Who am I?",
        a: "Longing",
        b: "Lounger",
        c: "Lengthy",
        d: "Longine",
        correct: "b"
    }, {
        question: "If POST is 1234 and FLIRT is 56784, what is FROST?",
        a: "58234",
        b: "58243",
        c: "52384",
        d: "43285",
        correct: "a"
    }
]

// declare constant variables

const quiz = document.getElementById("quiz");

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

// declare other variables

let currentQuiz = 0;
let score = 0;

// loadQuiz function

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

// getSelected function

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

// deselectAnswers function

function deselectAnswers() {

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
};

// submitBtn

submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2> <button onClick="location.reload()">reload</button>`;
        }
    }
});