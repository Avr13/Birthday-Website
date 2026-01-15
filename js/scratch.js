let scratchConfig = null;

export const setConfig = (cfg) => { scratchConfig = cfg; };

export const initScratch = () => {
    const page = scratchConfig.pages.page18;
    const canvas = document.getElementById('scratch-canvas');
    const ctx = canvas.getContext('2d');
    const msg = document.getElementById('scratch-message');
    const btn = document.querySelector('#page18 .primary-btn');
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    ctx.fillStyle = '#c0c0c0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#999';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Scratch Here!', canvas.width / 2, canvas.height / 2);
    
    let scratching = false, scratched = 0;
    
    const scratch = (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const y = (e.clientY || e.touches[0].clientY) - rect.top;
        
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();
        
        scratched++;
        if (scratched > 100) {
            canvas.style.display = 'none';
            msg.textContent = page.message;
            msg.style.display = 'block';
            btn.style.display = 'block';
        }
    };
    
    canvas.onmousedown = () => scratching = true;
    canvas.onmouseup = () => scratching = false;
    canvas.onmousemove = (e) => { if (scratching) scratch(e); };
    canvas.ontouchstart = (e) => { scratching = true; scratch(e); };
    canvas.ontouchend = () => scratching = false;
    canvas.ontouchmove = (e) => { if (scratching) scratch(e); };
};
