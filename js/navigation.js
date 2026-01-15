const updateProgress = (pageNum) => {
    const dots = document.querySelectorAll('.progress-dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('active', 'completed');
        if (i + 1 < pageNum) dot.classList.add('completed');
        if (i + 1 === pageNum) dot.classList.add('active');
    });
};

export const nextPage = (pageNum) => {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page${pageNum}`).classList.add('active');
    updateProgress(pageNum);
};

export const moveButton = (btnId) => {
    const btn = document.getElementById(btnId);
    btn.classList.add('moving');
    const maxX = window.innerWidth - btn.offsetWidth - 100;
    const maxY = window.innerHeight - btn.offsetHeight - 100;
    btn.style.left = Math.random() * maxX + 'px';
    btn.style.top = Math.random() * maxY + 'px';
};

export const initProgress = (totalPages) => {
    const tracker = document.getElementById('progress-tracker');
    for (let i = 1; i <= totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = 'progress-dot' + (i === 1 ? ' active' : '');
        tracker.appendChild(dot);
    }
};
