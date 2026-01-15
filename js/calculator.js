let config = null;

export const setConfig = (cfg) => { config = cfg; };

export const initCalculator = () => {
    const bar = document.getElementById('love-bar');
    const percent = document.getElementById('love-percent');
    const message = document.getElementById('calc-message');
    const btn = document.querySelector('#page14 .primary-btn');
    
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            message.textContent = config.pages.page14.message;
            document.getElementById('calc-desc').textContent = config.pages.page14.description;
            btn.style.display = 'inline-block';
        } else {
            width += 2;
            bar.style.width = width + '%';
            percent.textContent = width + '%';
        }
    }, 30);
};
