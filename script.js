document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".feature-image");

    images.forEach(img => {
        let scale = 1;
        let direction = 1;

        setInterval(() => {
            scale += direction * 0.02;
            if (scale >= 1.1 || scale <= 1) direction *= -1;
            img.style.transform = `scale(${scale})`;
        }, 100);
    });
});
