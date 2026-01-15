let starConfig = null;

export const setConfig = (cfg) => { starConfig = cfg; };

export const initStars = () => {
    const page = starConfig.pages.page16;
    const canvas = document.getElementById('star-canvas');
    const ctx = canvas.getContext('2d');
    const msg = document.getElementById('star-message');
    const btn = document.querySelector('#page16 .primary-btn');
    const skipBtn = document.getElementById('skip-stars');
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const stars = page.pattern === 'heart' ? [
        {x: 0.5, y: 0.3}, {x: 0.35, y: 0.2}, {x: 0.2, y: 0.3}, {x: 0.15, y: 0.5},
        {x: 0.2, y: 0.7}, {x: 0.35, y: 0.85}, {x: 0.5, y: 0.95}, {x: 0.65, y: 0.85},
        {x: 0.8, y: 0.7}, {x: 0.85, y: 0.5}, {x: 0.8, y: 0.3}, {x: 0.65, y: 0.2}
    ] : page.stars;
    
    const points = stars.map(s => ({ x: s.x * canvas.width, y: s.y * canvas.height, connected: false }));
    let connected = [];
    
    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        points.forEach((p, i) => {
            ctx.fillStyle = p.connected ? '#ffd700' : '#fff';
            ctx.beginPath();
            ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
            ctx.fill();
        });
        for (let i = 0; i < connected.length - 1; i++) {
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(connected[i].x, connected[i].y);
            ctx.lineTo(connected[i + 1].x, connected[i + 1].y);
            ctx.stroke();
        }
    };
    
    canvas.onclick = (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left, y = e.clientY - rect.top;
        const clicked = points.find(p => Math.hypot(p.x - x, p.y - y) < 15);
        
        if (clicked && !clicked.connected) {
            clicked.connected = true;
            connected.push(clicked);
            draw();
            
            if (connected.length === points.length) {
                msg.textContent = page.message;
                msg.style.display = 'block';
                btn.style.display = 'block';
                skipBtn.style.display = 'none';
            }
        }
    };
    
    draw();
};
