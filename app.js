function toggleMode() {
    const body = document.body;
    const container = document.querySelector('.container');
    const windowElement = document.querySelector('.window');
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');
    const clouds = document.querySelectorAll('.cloud, .cloud2');
    const lightSource = document.querySelector('.light');
    const stars = document.querySelectorAll('.star');
    const rain = document.querySelector('.rain');

    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    windowElement.classList.toggle('dark-mode');
    lightSource.classList.toggle('dark-mode');
    rain.classList.toggle('dark-mode');

    clouds.forEach(cloud => cloud.classList.toggle('dark-mode'));
    stars.forEach(star => star.classList.toggle('dark-mode'));

    if (sun.style.display === 'none') {
        sun.style.display = 'block';
        moon.style.display = 'none';
    } else {
        sun.style.display = 'none';
        moon.style.display = 'block';
    }
}
