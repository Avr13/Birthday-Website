export let config = null;

export const loadConfig = async () => {
    const response = await fetch('config.json');
    config = await response.json();
    return config;
};

export const loadContent = async () => {
    await loadConfig();
    
    document.title = config.meta.title;
    
    // Page 1
    document.querySelector('#page1 h1').innerHTML = config.pages.page1.title;
    document.querySelector('#page1 p').innerHTML = config.pages.page1.text;
    document.querySelector('#page1 .btn-container .primary-btn').textContent = config.pages.page1.buttons.yes;
    document.querySelector('#no-btn').textContent = config.pages.page1.buttons.no;
    
    // Page 2
    document.querySelector('#page2 h1').textContent = config.pages.page2.title;
    const p2 = document.querySelectorAll('#page2 p');
    p2[0].textContent = config.pages.page2.text1;
    p2[1].textContent = config.pages.page2.text2;
    document.querySelector('#page2 button').textContent = config.pages.page2.button;
    
    // Page 3
    document.querySelector('#page3 h1').textContent = config.pages.page3.title;
    const p3 = document.querySelectorAll('#page3 p');
    p3[0].innerHTML = config.pages.page3.text1;
    p3[1].innerHTML = config.pages.page3.text2;
    document.querySelector('#page3 button').textContent = config.pages.page3.button;
    
    // Page 4
    document.querySelector('#page4 h1').textContent = config.pages.page4.title;
    const timeline = document.querySelectorAll('#page4 .timeline-item');
    config.pages.page4.timeline.forEach((item, i) => {
        if (timeline[i]) timeline[i].innerHTML = item;
    });
    document.querySelector('#page4 button').textContent = config.pages.page4.button;
    
    // Page 5
    document.querySelector('#page5 h1').textContent = config.pages.page5.title;
    document.querySelector('#cake-instruction').textContent = config.pages.page5.instruction;
    document.querySelector('#final-msg h2').textContent = config.pages.page5.wishGranted;
    document.querySelector('#final-msg p').textContent = config.pages.page5.message;
    document.querySelector('#final-msg button').textContent = config.pages.page5.button;
    
    // Page 6
    document.querySelector('#page6 h1').textContent = config.pages.page6.title;
    document.querySelector('#love-line').textContent = config.pages.page6.placeholder;
    const p6btns = document.querySelectorAll('#page6 button');
    p6btns[0].textContent = config.pages.page6.button1;
    p6btns[1].textContent = config.pages.page6.button2;
    
    // Page 7
    document.querySelector('#page7 h1').textContent = config.pages.page7.title;
    document.querySelector('#page7 > p').textContent = config.pages.page7.instruction;
    document.querySelector('#continue-btn').textContent = config.pages.page7.button;
    
    // Page 8
    document.querySelector('#page8 h1').textContent = config.pages.page8.title;
    document.querySelector('#affirmation').textContent = config.pages.page8.placeholder;
    const p8btns = document.querySelectorAll('#page8 button');
    p8btns[0].textContent = config.pages.page8.button1;
    p8btns[1].textContent = config.pages.page8.button2;
    
    // Page 9
    document.querySelector('#page9 h1').textContent = config.pages.page9.title;
    const p9 = document.querySelectorAll('#page9 p');
    p9[0].innerHTML = config.pages.page9.text1;
    p9[1].innerHTML = config.pages.page9.text2;
    document.querySelector('#page9 button').textContent = config.pages.page9.button;
    
    // Page 10
    document.querySelector('#page10 h1').textContent = config.pages.page10.title;
    document.querySelector('#page10 > p').textContent = config.pages.page10.subtitle;
    document.querySelector('#page10 .game-box strong').textContent = config.pages.page10.question;
    const p10btns = document.querySelectorAll('#page10 .game-box button');
    p10btns[0].textContent = config.pages.page10.correctAnswer;
    p10btns[1].textContent = config.pages.page10.wrongAnswer;
    document.querySelector('#quiz-next').textContent = config.pages.page10.button;
    
    // Page 11
    document.querySelector('#page11 h1').textContent = config.pages.page11.title;
    document.querySelector('#reactionText').textContent = config.pages.page11.instruction;
    document.querySelector('#reactionBtn').textContent = config.pages.page11.buttonWait;
    document.querySelector('#reaction-next').textContent = config.pages.page11.button;
    
    // Page 12
    document.querySelector('#page12 h1').textContent = config.pages.page12.title;
    document.querySelector('#secretText').textContent = config.pages.page12.placeholder;
    document.querySelector('#reveal-btn').textContent = config.pages.page12.button1;
    document.querySelector('#secret-next').textContent = config.pages.page12.button2;
    
    // Page 13
    document.querySelector('#page13 h1').textContent = config.pages.page13.title;
    document.querySelector('#page13 > p:nth-of-type(1)').textContent = config.pages.page13.instruction;
    document.querySelector('#page13 button').textContent = config.pages.page13.button;
    
    // Page 14
    document.querySelector('#page14 h1').textContent = config.pages.page14.title;
    document.querySelector('#page14 > p').textContent = config.pages.page14.instruction;
    document.querySelector('#page14 button').textContent = config.pages.page14.button;
    
    // Page 15
    document.querySelector('#page15 h1').textContent = config.pages.page15.title;
    document.querySelector('#page15 > p').textContent = config.pages.page15.instruction;
    document.querySelector('#page15 button').textContent = config.pages.page15.button;
    
    // Page 16
    document.querySelector('#page16 h1').textContent = config.pages.page16.title;
    document.querySelector('#page16 button').textContent = config.pages.page16.button;
    document.getElementById('video-player').src = config.pages.page16.videoUrl;
    
    // Page 17
    document.querySelector('#page17 h1').textContent = config.pages.page17.title;
    const p17 = document.querySelectorAll('#page17 p');
    p17[0].innerHTML = config.pages.page17.text1;
    p17[1].innerHTML = config.pages.page17.text3;
    document.querySelector('#page17 h2').textContent = config.pages.page17.text2;
};
