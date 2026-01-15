let config = null;

export const setConfig = (cfg) => { config = cfg; };

export const initBalloons = () => {
    const container = document.getElementById('balloon-container');
    const message = document.getElementById('balloon-message');
    const btn = document.querySelector('#page15 .primary-btn');
    const cfg = config.pages.page15;
    const letters = cfg.message.split('');
    let popped = 0;
    
    container.innerHTML = '';
    const colors = ['#ff4d6d', '#ff8fab', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff', '#cdb4db', '#ffc8dd'];
    
    for (let i = 0; i < cfg.balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.background = colors[i % colors.length];
        balloon.style.left = (i * 12 + 5) + '%';
        balloon.textContent = '🎈';
        balloon.dataset.letter = letters[i] || '❤️';
        
        balloon.onclick = () => {
            balloon.style.animation = 'pop 0.3s ease-out';
            setTimeout(() => {
                balloon.textContent = balloon.dataset.letter;
                balloon.style.fontSize = '2rem';
                popped++;
                if (popped === cfg.balloonCount) {
                    setTimeout(() => {
                        message.style.display = 'block';
                        btn.style.display = 'inline-block';
                    }, 500);
                }
            }, 150);
        };
        
        container.appendChild(balloon);
    }
};
