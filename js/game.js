import { config } from './content.js';

let score = 0;
let TARGET_SCORE = 10;

export const startGame = () => {
    score = 0;
    TARGET_SCORE = config.pages.page7.targetScore;
    updateScore();
    spawnHeart();
};

const updateScore = () => {
    document.getElementById('score').textContent = `Score: ${score}`;
};

const spawnHeart = () => {
    if (score >= TARGET_SCORE) {
        document.getElementById('game-msg').textContent = '🎉 You won! Continue below 🎉';
        document.getElementById('continue-btn').style.display = 'inline-block';
        document.getElementById('skip-btn').style.display = 'none';
        return;
    }

    const gameArea = document.getElementById('game-area');
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.style.position = 'absolute';
    heart.style.fontSize = '30px';
    heart.style.cursor = 'pointer';
    heart.style.left = Math.random() * (gameArea.offsetWidth - 40) + 'px';
    heart.style.top = Math.random() * (gameArea.offsetHeight - 40) + 'px';
    heart.style.transition = 'transform 0.1s';
    
    heart.onclick = () => {
        score++;
        updateScore();
        heart.remove();
        spawnHeart();
    };
    
    gameArea.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.remove();
            spawnHeart();
        }
    }, 2000);
};
