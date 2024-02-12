document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const mainImg = document.getElementById('mainImg');
    const questionScreen = document.getElementById('questionScreen');
    const responseScreen = document.getElementById('responseScreen');


    yesBtn.addEventListener('mouseover', () => {
        mainImg.src = 'images/emoji flirt rose in mouth.jpg';
    });

    noBtn.addEventListener('mouseover', () => {
        if (!noBtn.disabled) {
            mainImg.src = 'images/Side eye.jpg';
        }
    });

    yesBtn.addEventListener('click', () => {
        questionScreen.style.display = 'none';
        responseScreen.style.display = 'block';
    });
});