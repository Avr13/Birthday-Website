let config = null;

export const setConfig = (cfg) => { config = cfg; };

export const initFortune = () => {
    const cookie = document.querySelector('.fortune-cookie');
    const message = document.getElementById('fortune-message');
    const btn = document.querySelector('#page13 .primary-btn');
    
    cookie.onclick = () => {
        cookie.style.animation = 'crack 0.5s ease-out';
        setTimeout(() => {
            cookie.style.display = 'none';
            const fortunes = config.pages.page13.fortunes;
            message.textContent = fortunes[Math.floor(Math.random() * fortunes.length)];
            message.style.display = 'block';
            btn.style.display = 'inline-block';
        }, 500);
    };
};
