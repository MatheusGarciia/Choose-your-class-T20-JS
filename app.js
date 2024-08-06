const question = document.querySelector('.question')
const answers = document.querySelector('.answers')
const container = document.querySelector('.container')

import questions from './dados.js';
 
let currentIndex = 0;


function nextQuestion(e) {
    let direction = e.target.getAttribute('data-answers')
    
    if ( direction <= 14){
        currentIndex = direction;
        loadQuestion();
    } else {
        currentIndex = direction;
        loadResponse();
    }
}

 function loadResponse() {
    const item = questions[currentIndex]
    container.innerHTML = `
    <h2 class="subtitle">A classe perfeita para você seria</h2>
    <h1 class="title">${item.classe}</h1>
    <img class="img-response" src="${item.imagem}" alt="">
    <button class="refresh" onClick="window.location.reload();">↺</button>
    `
 }
 

 function loadQuestion() {
    const item = questions[currentIndex]
    answers.innerHTML = ''
    question.innerHTML = item.enunciado

    item.alternativas.forEach((alternativas) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <button class="btn-answer" data-answers="${alternativas.gT}">${alternativas.option}</button>
        `
        answers.appendChild(div)
    });

    document.querySelectorAll(".btn-answer").forEach((item) => {
        item.addEventListener('click', nextQuestion)
    })
 }

 loadQuestion()