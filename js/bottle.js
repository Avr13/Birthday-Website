let bottleConfig = null;

export const setConfig = (cfg) => { bottleConfig = cfg; };

export const initBottle = () => {
    const page = bottleConfig.pages.page22;
    const bottle = document.getElementById('message-bottle');
    const message = document.getElementById('bottle-message');
    const btn = document.querySelector('#page22 .primary-btn');
    
    let opened = false;
    
    bottle.onclick = () => {
        if (opened) return;
        opened = true;
        
        bottle.style.animation = 'bottleShake 0.5s ease-in-out';
        
        setTimeout(() => {
            bottle.style.transform = 'scale(0.5)';
            setTimeout(() => {
                message.innerHTML = `<div style="font-size: 60px; margin-bottom: 15px;">🎉</div>${page.message}`;
                message.style.display = 'block';
                message.style.animation = 'unfold 1s ease-out';
                btn.style.display = 'block';
            }, 300);
        }, 500);
    };
};
