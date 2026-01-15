let countdownConfig = null;

export const setConfig = (cfg) => { countdownConfig = cfg; };

export const initCountdown = () => {
    const page = countdownConfig.pages.page20;
    const display = document.getElementById('countdown-display');
    const msg = document.getElementById('countdown-message');
    const btn = document.querySelector('#page20 .primary-btn');
    
    const startDate = new Date(page.startDate);
    
    const update = () => {
        const now = new Date();
        const diff = now - startDate;
        
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        display.innerHTML = `
            <div class="time-unit"><span>${years}</span><br>Years</div>
            <div class="time-unit"><span>${days}</span><br>Days</div>
            <div class="time-unit"><span>${hours}</span><br>Hours</div>
            <div class="time-unit"><span>${minutes}</span><br>Minutes</div>
            <div class="time-unit"><span>${seconds}</span><br>Seconds</div>
        `;
    };
    
    update();
    setInterval(update, 1000);
    
    msg.textContent = page.message;
    msg.style.display = 'block';
};