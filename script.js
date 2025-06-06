const features = document.querySelectorAll('.feature');
const mainImage = document.querySelector('.main-image');

features.forEach(feature => {
    feature.addEventListener('mouseover', () => {
        const newImage = feature.getAttribute('data-image');
        mainImage.src = newImage;
    });

    feature.addEventListener('mouseout', () => {
        mainImage.src = 'img/FarmAssist.png';
    });
});

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    });
});

// Функция для изменения языка при клике на флаг
function changeLanguage(languageUrl) {
  // Переход на соответствующую страницу с выбранным языком
  window.location.href = languageUrl;
}
