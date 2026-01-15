let enabledPages = [];

const updateProgress = (pageNum) => {
    const dots = document.querySelectorAll('.progress-dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('active', 'completed');
        const pageIndex = enabledPages.indexOf(pageNum);
        if (i < pageIndex) dot.classList.add('completed');
        if (i === pageIndex) dot.classList.add('active');
    });
};

export const nextPage = (pageNum) => {
    const currentIndex = enabledPages.indexOf(parseInt(document.querySelector('.page.active').id.replace('page', '')));
    const nextIndex = currentIndex + 1;
    const nextPageNum = nextIndex < enabledPages.length ? enabledPages[nextIndex] : pageNum;
    
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page${nextPageNum}`).classList.add('active');
    updateProgress(nextPageNum);
};

export const moveButton = (btnId) => {
    const btn = document.getElementById(btnId);
    btn.classList.add('moving');
    const maxX = window.innerWidth - btn.offsetWidth - 100;
    const maxY = window.innerHeight - btn.offsetHeight - 100;
    btn.style.left = Math.random() * maxX + 'px';
    btn.style.top = Math.random() * maxY + 'px';
};

export const initProgress = (pages) => {
    enabledPages = pages;
    const tracker = document.getElementById('progress-tracker');
    pages.forEach((pageNum, i) => {
        const dot = document.createElement('div');
        dot.className = 'progress-dot' + (i === 0 ? ' active' : '');
        tracker.appendChild(dot);
    });
    
    document.querySelectorAll('.page').forEach(page => {
        const pageNum = parseInt(page.id.replace('page', ''));
        if (!pages.includes(pageNum)) {
            page.style.display = 'none';
        } else if (pageNum === pages[0]) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
};
