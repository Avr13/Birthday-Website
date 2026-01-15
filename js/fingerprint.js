let fingerprintConfig = null;

export const setConfig = (cfg) => { fingerprintConfig = cfg; };

export const initFingerprint = () => {
    const page = fingerprintConfig.pages.page21;
    const left = document.getElementById('fingerprint-left');
    const right = document.getElementById('fingerprint-right');
    const heart = document.getElementById('merged-heart');
    const msg = document.getElementById('fingerprint-message');
    const btn = document.querySelector('#page21 .primary-btn');
    
    let leftPressed = false, rightPressed = false;
    
    left.onclick = () => {
        leftPressed = true;
        left.classList.add('pressed');
        checkMerge();
    };
    
    right.onclick = () => {
        rightPressed = true;
        right.classList.add('pressed');
        checkMerge();
    };
    
    const checkMerge = () => {
        if (leftPressed && rightPressed) {
            setTimeout(() => {
                left.style.opacity = '0';
                right.style.opacity = '0';
                setTimeout(() => {
                    heart.style.display = 'block';
                    heart.style.animation = 'heartGrow 1s ease-out';
                    msg.textContent = page.message;
                    msg.style.display = 'block';
                    btn.style.display = 'block';
                }, 500);
            }, 500);
        }
    };
};
