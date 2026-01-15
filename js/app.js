import { initFloatingHearts } from './animations.js';
import { nextPage, moveButton, initProgress } from './navigation.js';
import { blowCandle, nextLove, nextAffirmation, quizAnswer, startReactionTest, reactionClick, revealSecret } from './interactions.js';
import { startGame } from './game.js';
import { loadContent, config } from './content.js';
import { initFortune, setConfig as setFortuneConfig } from './fortune.js';
import { initCalculator, setConfig as setCalcConfig } from './calculator.js';
import { initBalloons, setConfig as setBalloonConfig } from './balloon.js';
import { initStars, setConfig as setStarsConfig } from './stars.js';
import { initPolaroid, setConfig as setPolaroidConfig } from './polaroid.js';
import { initScratch, setConfig as setScratchConfig } from './scratch.js';
import { initWell, setConfig as setWellConfig } from './well.js';
import { initCountdown, setConfig as setCountdownConfig } from './countdown.js';
import { initFingerprint, setConfig as setFingerprintConfig } from './fingerprint.js';
import { initBottle, setConfig as setBottleConfig } from './bottle.js';

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
    setStarsConfig(config);
    setPolaroidConfig(config);
    setScratchConfig(config);
    setWellConfig(config);
    setCountdownConfig(config);
    setFingerprintConfig(config);
    setBottleConfig(config);
    initFloatingHearts();
    initProgress(config.meta.enabledPages);
    
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
            if (mutation.target.id === 'page16' && mutation.target.classList.contains('active')) {
                initStars();
            }
            if (mutation.target.id === 'page17' && mutation.target.classList.contains('active')) {
                initPolaroid();
            }
            if (mutation.target.id === 'page18' && mutation.target.classList.contains('active')) {
                initScratch();
            }
            if (mutation.target.id === 'page19' && mutation.target.classList.contains('active')) {
                initWell();
            }
            if (mutation.target.id === 'page20' && mutation.target.classList.contains('active')) {
                initCountdown();
            }
            if (mutation.target.id === 'page21' && mutation.target.classList.contains('active')) {
                initFingerprint();
            }
            if (mutation.target.id === 'page22' && mutation.target.classList.contains('active')) {
                initBottle();
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
