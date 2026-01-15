let wellConfig = null;

export const setConfig = (cfg) => { wellConfig = cfg; };

export const initWell = () => {
    const page = wellConfig.pages.page19;
    const well = document.getElementById('wishing-well');
    const wishes = document.getElementById('wishes-list');
    const btn = document.querySelector('#page19 .primary-btn');
    
    let tossed = 0;
    
    well.onclick = () => {
        if (tossed >= page.wishes.length) return;
        
        const coin = document.createElement('div');
        coin.className = 'coin';
        coin.textContent = '🪙';
        coin.style.left = Math.random() * 80 + 10 + '%';
        well.appendChild(coin);
        
        setTimeout(() => coin.remove(), 1000);
        
        const wish = document.createElement('p');
        wish.className = 'wish-item';
        wish.textContent = page.wishes[tossed];
        wishes.appendChild(wish);
        
        tossed++;
        if (tossed === page.wishes.length) {
            btn.style.display = 'block';
        }
    };
};
