const questions = [
    {
        q: "1. Mallattoon STOP maal si ajaja?",
        a: ["Saffisa dabali", "Guutumaan guutuutti dhaabi", "Bitaa qofa ilaali"],
        c: 1
    },
    {
        q: "2. Cédez le passage jechuun maal jechuudha?",
        a: ["Dursa kenni", "Seenuun dhorkaadha", "Saffisa dabali"],
        c: 0
    },
    {
        q: "3. Priorité à droite keessatti eenyutu dursa qaba?",
        a: ["Bitaa irraa dhufu", "Mirga irraa dhufu", "Duuba jiru"],
        c: 1
    },
    {
        q: "4. Sens interdit jechuun maal jechuudha?",
        a: ["Karaan kun seenuuf dhorkaadha", "Daandiin mucucaata", "Dursa qabda"],
        c: 0
    },
    {
        q: "5. Feux tricolores jechuun maal jechuudha?",
        a: ["Ibsaa tiraafikaa", "Mallattoo baaburaa", "Mallattoo bineensotaa"],
        c: 0
    }
];

let index = 0;
let score = 0;
let answered = false;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const next = document.getElementById("next");
const scoreText = document.getElementById("score");

function showQuestion() {
    const q = questions[index];

    question.textContent = q.q;
    answers.innerHTML = "";

    q.a.forEach((answer, i) => {
        const button = document.createElement("button");

        button.textContent = answer;

        button.onclick = function () {
            choose(i);
        };

        answers.appendChild(button);
    });

    feedback.textContent = "";
    next.hidden = true;
    scoreText.textContent = `Gaaffii ${index + 1} / ${questions.length}`;

    answered = false;
}

function choose(choice) {
    if (answered) return;

    answered = true;

    const q = questions[index];

    if (choice === q.c) {
        score++;
        feedback.textContent = "Sirrii dha! Baay'ee gaarii!";
    } else {
        feedback.textContent = "Deebiin sirrii: " + q.a[q.c];
    }

    [...answers.children].forEach(button => {
        button.disabled = true;
    });

    next.hidden = false;

    next.textContent =
        index === questions.length - 1
        ? "Bu'aa ilaali"
        : "Gaaffii itti aanu";
}

next.onclick = function () {
    if (index < questions.length - 1) {
        index++;
        showQuestion();
    } else {
        question.textContent = "Qormaanni xumurame!";
        answers.innerHTML = "";

        feedback.textContent =
            `Bu'aan kee: ${score} / ${questions.length}`;

        next.hidden = true;
        scoreText.textContent = "Galatoomi shaakaluu keetiif!";
    }
};

showQuestion();