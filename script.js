// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//Parallax scrolling
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const heroSection = document.querySelector('.hero-section');
    
    // Apply parallax effect to the background position
    heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Lazy loading images
document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img.lazy");
    
    if ("IntersectionObserver" in window) {
        const lazyImageObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(lazyImage => {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

// News slider for use cases
const useCasesContainer = document.querySelector('.use-cases-container');

useCasesContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    useCasesContainer.scrollLeft += evt.deltaY;
});
