let images = document.querySelectorAll('img')

images.forEach(img => {
    img.addEventListener('click', () => {

        const currentNewImg = document.querySelector('.new');

        if (!img.classList.contains('new')) {

            if (currentNewImg) {
                currentNewImg.classList.remove('new');
                currentNewImg.style.transform = 'scale(1)';
            }

            img.classList.add('new');
            img.style.transform = 'scale(2)';
        }
        else {
            currentNewImg.classList.remove('new');
            currentNewImg.style.transform = 'scale(1)';
        }
    });
});
