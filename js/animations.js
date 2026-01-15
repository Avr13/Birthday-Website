export const initFloatingHearts = () => {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '💗';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (4 + Math.random() * 4) + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 8000);
    }, 600);
};

export const createConfetti = () => {
    const colors = ['#ff4d6d', '#ffd6e8', '#fff0f5', '#ff8fab'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
};
