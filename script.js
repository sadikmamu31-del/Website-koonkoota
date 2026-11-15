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
    },
    {
        q: "6. Yeroo ifni tiraafikaa diimaan ibsu maal gochuu qabda?",
        a: ["Darbuu", "Dhaabbachuu", "Saffisa dabalu"],
        c: 1
    },
    {
        q: "7. Yeroo ifni magariisni ibsu maal gochuu dandeessa?",
        a: ["Darbuu yoo karaa nagaa ta'e", "Dhaabbachuu", "Duubatti deebi'uu"],
        c: 0
    },
    {
        q: "8. Yeroo roobni cimaa roobu maal gochuu qabda?",
        a: ["Saffisa dabali", "Fageenya hordoffii dabali", "Ifa dhaamsi"],
        c: 1
    },
    {
        q: "9. Yeroo konkolaataa oofuu bilbila harkaan fayyadamuun maal fida?",
        a: ["Balaa hir'isa", "Xiyyeeffannoo hir'isa", "Nageenya dabala"],
        c: 1
    },
    {
        q: "10. Ambulaansiin sirna akeekkachiisaa ibsitee yoo dhufte maal gochuu qabda?",
        a: ["Karaa kennuu", "Isa hordofuu", "Saffisa dabalu"],
        c: 0
    },
    {
        q: "11. Yeroo konkolaataa duubatti deebistu maal gochuu qabda?",
        a: ["Mirkaneeffannaa malee deebi'uu", "Naannoo kee ilaaluun of eeggachuu", "Bilbila fayyadamuu"],
        c: 1
    },
    {
        q: "12. Ce'umsa miiltootaa irratti namni deemaa jira yoo ta'e maal gochuu qabda?",
        a: ["Dursitee darbuu", "Dhaabbachuun karaa kennuu", "Saffisa dabalu"],
        c: 1
    },
    {
        q: "13. Yeroo dukkana konkolaataa oofuu maal fayyadamuu qabda?",
        a: ["Ifa konkolaataa", "Ifa bilbilaa", "Ifa dhaamsuu"],
        c: 0
    },
    {
        q: "14. Konkolaataan kee karaa irratti yoo miidhame maal gochuu qabda?",
        a: ["Karaa gidduutti dhiisuu", "Bakka nageenya qabu dhaabuu fi akeekkachiisuu", "Achumaan deemuu"],
        c: 1
    },
    {
        q: "15. Fageenya konkolaataa fuulduraa maaliif eegna?",
        a: ["Balaa irraa of eeguuf", "Boba'aa dabaluuf", "Saffisa dabaluuf"],
        c: 0
    },
    {
        q: "16. Mallattoo saffisa daangeessu argitu maal gochuu qabda?",
        a: ["Daangaa saffisaa kabajuu", "Saffisa dabalu", "Mallattoo bira darbu"],
        c: 0
    },
    {
        q: "17. Seat belt maaliif hidhan?",
        a: ["Boba'aa qusachuuf", "Miidhaa balaa hir'isuuf", "Saffisa dabaluuf"],
        c: 1
    },
    {
        q: "18. Yeroo daandii qaxxaamurtu maal gochuu qabda?",
        a: ["Bitaa fi mirga ilaaluu", "Osoo hin ilaalin darbuu", "Saffisa dabalu"],
        c: 0
    },
    {
        q: "19. Dadhabbiin yeroo konkolaataa oofuu maal fida?",
        a: ["Balaa dabala", "Nageenya dabala", "Rakkoo hin qabu"],
        c: 0
    },
    {
        q: "20. Pneu konkolaataa haala gaarii keessa jiraachuun maaliif barbaachisa?",
        a: ["Halluu bareechuuf", "Konkolaataa to'achuuf fi nageenyaaf", "Sagalee hir'isuuf"],
        c: 1
    },
    {
        q: "21. Yeroo konkolaataa bira darbuu barbaaddu maal gochuu qabda?",
        a: ["Mallattoo fi daandii mirkaneeffachuu", "Saffisa malee darbuu", "Ija cufuu"],
        c: 0
    },
    {
        q: "22. Alkoolii dhuguun yeroo konkolaataa oofuu maal fida?",
        a: ["Xiyyeeffannoo hir'isa", "Nageenya dabala", "Rakkoo hin qabu"],
        c: 0
    },
    {
        q: "23. Lakkoofsi bilbilaa balaa waliigalaa Awurooppaa maal dha?",
        a: ["15", "17", "112"],
        c: 2
    },
    {
        q: "24. Ayna (miroorii) maaliif ilaalla?",
        a: ["Naannoo duubaa fi cinaacha hordofuuf", "Of ilaaluuf qofa", "Halluu konkolaataa ilaaluuf"],
        c: 0
    },
    {
        q: "25. Yeroo daandii dhiphaa irratti konkolaataa wal faana dhufan maal gochuu qabda?",
        a: ["Of eeggannoo fi waliif karaa kennuu", "Saffisa dabalu", "Karaa cufuu"],
        c: 0
    },
    {
        q: "26. Yeroo barfatte illee akkamitti konkolaataa oofuu qabda?",
        a: ["Saffisa daangaa ol dabalu", "Seera kabajuu fi tasgabbaa'uu", "Ifa diimaa darbuu"],
        c: 1
    },
    {
        q: "27. Bakka dhaabbachuun dhorkame irratti maal gochuu qabda?",
        a: ["Dhaabbachuu", "Bakka seeraan hayyamame barbaaduu", "Daandii gidduutti dhaabuu"],
        c: 1
    },
    {
        q: "28. Daa'imman konkolaataa keessatti akkamitti geessuu qabda?",
        a: ["Meeshaa nageenyaa sirrii fayyadamuun", "Seat belt malee", "Bakka barbaadan kaa'uun"],
        c: 0
    },
    {
        q: "29. Ifni ABS ibsamee hin dhaamne maal agarsiisuu danda'a?",
        a: ["Rakkoo sirna ABS", "Boba'aan guutuu ta'uu", "Konkolaataan haaraa ta'uu"],
        c: 0
    },
    {
        q: "30. Daandiin mucucaataa yoo ta'e maal gochuu qabda?",
        a: ["Saffisa hir'isuu fi fageenya dabalu", "Saffisa dabalu", "Bireekii tasa qabuu"],
        c: 0
    },
    {
        q: "31. Namni konkolaataa si duuba dhihoo oofu yoo jiraate maal gochuu qabda?",
        a: ["Bireekii tasa qabuu", "Tasgabbaa'uu fi fageenya fuulduraa eeguu", "Saffisa dabalu"],
        c: 1
    },
    {
        q: "32. Yeroo konkolaataa oofuu xiyyeeffannoo kee eessa kaa'uu qabda?",
        a: ["Bilbila irratti", "Daandii fi namoota naannoo irratti", "Raadiyoo irratti qofa"],
        c: 1
    },
    {
        q: "33. Yeroo konkolaataa oofuu namni miilaan daandii qaxxaamuruuf dhufu maal gochuu qabda?",
        a: ["Karaa kennuu", "Dursanii darbuu", "Saffisa dabalu"],
        c: 0
    },
    {
        q: "34. Yeroo konkolaataa dhaabdu maal mirkaneeffachuu qabda?",
        a: ["Bakka dhaabbachuun hayyamame ta'uu", "Daandii cufuu", "Mallattoo dhoksuu"],
        c: 0
    },
    {
        q: "35. Yeroo balaa tiraafikaa argitu maal gochuu qabda?",
        a: ["Bakka nageenya qabu dhaabuu fi gargaarsa waamuu", "Suuraa kaasuu qofa", "Karaa cufuu"],
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