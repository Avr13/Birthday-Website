let polaroidConfig = null;

export const setConfig = (cfg) => { polaroidConfig = cfg; };

export const initPolaroid = () => {
    const page = polaroidConfig.pages.page17;
    const polaroid = document.querySelector('.polaroid');
    const tapBtn = document.getElementById('tap-polaroid');
    const msg = document.getElementById('polaroid-message');
    const btn = document.querySelector('#page17 .primary-btn:last-of-type');
    
    if (page.imageUrl) {
        polaroid.style.backgroundImage = `url(${page.imageUrl})`;
        polaroid.style.backgroundSize = 'cover';
        polaroid.style.backgroundPosition = 'center';
        polaroid.textContent = '';
    }
    
    let shakes = 0;
    let lastShake = 0;
    
    const shake = () => {
        const now = Date.now();
        if (now - lastShake < 300) return;
        lastShake = now;
        shakes++;
        
        polaroid.style.filter = `blur(${Math.max(10 - shakes, 0)}px)`;
        polaroid.style.opacity = Math.min(0.3 + shakes * 0.1, 1);
        
        if (shakes >= page.shakesNeeded) {
            polaroid.style.filter = 'none';
            polaroid.style.opacity = 1;
            tapBtn.style.display = 'none';
            msg.textContent = page.message;
            msg.style.display = 'block';
            btn.style.display = 'block';
        }
    };
    
    tapBtn.onclick = shake;
    
    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', (e) => {
            const acc = e.accelerationIncludingGravity;
            if (Math.abs(acc.x) > 15 || Math.abs(acc.y) > 15) shake();
        });
    }
};
