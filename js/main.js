var quizBox = document.querySelector(".quiz");
var resultBox = document.querySelector(".result");
var submitBtn = document.querySelector("#submit");
var retryBtn = document.querySelector("#retry");

const quizData = [
    {
        question: "Javascript is an ____________ language?",
        Options: ["Object Oriented", "Object Based", "procedural", "None of the above"],
        answer: "Object Oriented"
    },
    {
        question: "Which of the following methods is used to find the length of a string in JavaScript?",
        Options: ["length()", "strlen()", "count()", "size()"],
        answer: "length()"
    },
    {
        question: "Which company developed JavaScript?",
        Options: ["Netscape", "Bell Labs", "Sun Microsystems", "IBM"],
        answer: "Netscape"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        Options: ["//", "/*", "#", "<!--"],
        answer: "//"
    },
    {
        question: "Which of the following is the correct syntax to print a message in the console?",
        Options: ["print('Hello')", "console.log('Hello')", "echo('Hello')", "log('Hello')"],
        answer: "console.log('Hello')"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        Options: ["var", "int", "let", "Both var and let"],
        answer: "Both var and let"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        Options: ["<javascript>", "<js>", "<script>", "<scripting>"],
        answer: "<script>"
    },
    {
        question: "What will `typeof null` return in JavaScript?",
        Options: ["null", "object", "undefined", "boolean"],
        answer: "object"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        Options: ["-", "*", "=", "+"],
        answer: "="
    },
    {
        question: "What is the output of `2 + '2'` in JavaScript?",
        Options: ["4", "22", "undefined", "NaN"],
        answer: "22"
    },
    {
        question: "Which function is used to parse a string to integer in JavaScript?",
        Options: ["parseInt()", "parseInteger()", "intParse()", "toInteger()"],
        answer: "parseInt()"
    },
    {
        question: "How can you detect the client’s browser name in JavaScript?",
        Options: ["browser.name", "navigator.appName", "client.navName", "window.browser"],
        answer: "navigator.appName"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        Options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
        answer: "onclick"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        Options: ["String", "Number", "Boolean", "Float"],
        answer: "Float"
    },
    {
        question: "What is the correct way to write an array in JavaScript?",
        Options: ["{1, 2, 3}", "(1, 2, 3)", "[1, 2, 3]", "<1, 2, 3>"],
        answer: "[1, 2, 3]"
    },
    {
        question: "Which method is used to remove the last element of an array?",
        Options: ["pop()", "push()", "shift()", "remove()"],
        answer: "pop()"
    },
    {
        question: "What does `NaN` stand for?",
        Options: ["Not a Number", "Name a Number", "Negative and Null", "No Any Number"],
        answer: "Not a Number"
    },

    
];

var quiz;
var questionNumber = 0;
var qid = 0;
var score = 0;

function showQuestion(){
    quiz = quizData[qid];
    option = quiz.Options;
    quizBox.innerHTML = `<b>${qid+1}. &nbsp; ${quiz.question}</b>
                        <div class="options">
                            ${option.map(op =>`
                                    <span>
                                        <input type="radio" value = "${op}" name="op" id="${op}"> &nbsp;<label for="${op}">${op}</label><br>
                                    </span>
                                `).join('') }
                        </div>
    `;
}

function checkAnswer(){
    var selected = document.querySelector('input[name="op"]:checked');
    var userAnswer = selected.value;
    // alert(userAnswer);
    const correctAnswer = quizData[qid].answer;
    // alert(correctAnswer);
    if(userAnswer === correctAnswer){
        score++;
    }
    if(qid++<quizData.length-1){
        showQuestion();
    }
    else{
        showResult();
    }
    if(qid==quizData.length-1){
        submitBtn.textContent="Submit";
    }
}
function showResult(){
    quizBox.style.display ='none';
    resultBox.style.display ='block';
    resultBox.innerHTML = `
        <h1 class="success">Congratulations !!! 🎉</h1><br>
        <b>You have successfully completed your Test<br> and you have scored <span class="res">${score*2}</span> out of <span class="res">${(quizData.length)*2}</span></b>
        <br><br>
        Do you want to try again?<br><br>
    `;

    submitBtn.style.display='none';
    retryBtn.style.display = 'block';
}

retryBtn.addEventListener('click',()=>{
    qid=0;
    score=0;
    resultBox.style.display='none';
    retryBtn.style.display='none';
    quizBox.style.display='block';
    submitBtn.style.display='block';
    submitBtn.textContent="Next";
    showQuestion();
})
submitBtn.addEventListener('click',()=>{
    checkAnswer();
})
showQuestion();
