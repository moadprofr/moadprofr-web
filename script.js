document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle deep links (Optional: provide fallback if app not installed)
    const deepLinkBtn = document.querySelector('.btn-primary');
    if (deepLinkBtn) {
        deepLinkBtn.addEventListener('click', (e) => {
            const now = new Date().getTime();
            
            // This is a simple fallback: if after 2 seconds the page hasn't lost focus, 
            // the app is probably not installed, so we redirect to Google Play.
            setTimeout(() => {
                if (new Date().getTime() - now < 2100) {
                    // console.log("L'application n'est pas installée");
                    // window.location.href = "https://play.google.com/store/apps/details?id=com.example.moadprofr";
                }
            }, 2000);
        });
    }

    // Scroll reveal animation (Simple version)
    const revealElements = document.querySelectorAll('.feature-card');
    
    const reveal = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = '0.6s ease-out';
    });

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check
});
