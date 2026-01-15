import { initFloatingHearts } from './animations.js';
import { nextPage, moveButton, initProgress } from './navigation.js';
import { blowCandle, nextLove, nextAffirmation, quizAnswer, startReactionTest, reactionClick, revealSecret } from './interactions.js';
import { startGame } from './game.js';
import { loadContent, config } from './content.js';
import { initFortune, setConfig as setFortuneConfig } from './fortune.js';
import { initCalculator, setConfig as setCalcConfig } from './calculator.js';
import { initBalloons, setConfig as setBalloonConfig } from './balloon.js';

window.nextPage = nextPage;
window.moveButton = moveButton;
window.blowCandle = blowCandle;
window.nextLove = nextLove;
window.nextAffirmation = nextAffirmation;
window.quizAnswer = quizAnswer;
window.reactionClick = reactionClick;
window.revealSecret = revealSecret;

const initApp = async () => {
    await loadContent();
    setFortuneConfig(config);
    setCalcConfig(config);
    setBalloonConfig(config);
    initFloatingHearts();
    initProgress(17);
    
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.target.id === 'page7' && mutation.target.classList.contains('active')) {
                startGame();
            }
            if (mutation.target.id === 'page11' && mutation.target.classList.contains('active')) {
                startReactionTest();
            }
            if (mutation.target.id === 'page13' && mutation.target.classList.contains('active')) {
                initFortune();
            }
            if (mutation.target.id === 'page14' && mutation.target.classList.contains('active')) {
                initCalculator();
            }
            if (mutation.target.id === 'page15' && mutation.target.classList.contains('active')) {
                initBalloons();
            }
        });
    });
    
    document.querySelectorAll('.page').forEach(page => {
        observer.observe(page, { attributes: true, attributeFilter: ['class'] });
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
