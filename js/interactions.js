import { createConfetti } from './animations.js';
import { config } from './content.js';

export const blowCandle = () => {
    document.querySelector('.cake').innerHTML = '🍰';
    document.getElementById('cake-instruction').style.display = 'none';
    document.getElementById('final-msg').style.display = 'block';
    createConfetti();
};

let loveIndex = 0;
export const nextLove = () => {
    document.getElementById('love-line').textContent = config.pages.page6.items[loveIndex];
    loveIndex = (loveIndex + 1) % config.pages.page6.items.length;
};

let affirmIndex = 0;
export const nextAffirmation = () => {
    document.getElementById('affirmation').textContent = config.pages.page8.items[affirmIndex];
    affirmIndex = (affirmIndex + 1) % config.pages.page8.items.length;
};

export const quizAnswer = (answer) => {
    const feedback = document.getElementById('quiz-feedback');
    const nextBtn = document.getElementById('quiz-next');
    if (answer === 'You') {
        feedback.textContent = config.pages.page10.feedback;
        nextBtn.style.display = 'inline-block';
    }
};

let reactionTimeout;
export const startReactionTest = () => {
    const btn = document.getElementById('reactionBtn');
    const text = document.getElementById('reactionText');
    const red = document.getElementById('redLight');
    const yellow = document.getElementById('yellowLight');
    const green = document.getElementById('greenLight');
    
    text.textContent = 'Wait for green...';
    red.classList.add('active');
    
    setTimeout(() => {
        red.classList.remove('active');
        yellow.classList.add('active');
    }, 1500);
    
    setTimeout(() => {
        yellow.classList.remove('active');
        green.classList.add('active');
        text.textContent = '💖 TAP NOW! 💖';
        btn.disabled = false;
        btn.textContent = 'TAP ME! 💕';
        btn.dataset.startTime = Date.now();
    }, 3000);
};

export const reactionClick = () => {
    const btn = document.getElementById('reactionBtn');
    const feedback = document.getElementById('reaction-feedback');
    const nextBtn = document.getElementById('reaction-next');
    
    if (btn.dataset.startTime) {
        const time = Date.now() - btn.dataset.startTime;
        if (time >= 1500) {
            feedback.textContent = 'This much time each second feels when you are away... 💔';
        } else {
            feedback.textContent = config.pages.page11.feedback.replace('{time}', time);
        }
        btn.disabled = true;
        nextBtn.style.display = 'inline-block';
    }
};

export const revealSecret = () => {
    const secretText = document.getElementById('secretText');
    const revealBtn = document.getElementById('reveal-btn');
    const nextBtn = document.getElementById('secret-next');
    
    secretText.innerHTML = `<strong>"${config.pages.page12.message}"</strong>`;
    revealBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
};
