document.addEventListener('DOMContentLoaded', () => {
    // ─── Toast Logic ──────────────────────────────────────────────────────────
    const toast = document.getElementById('toast');
    const showToast = (message) => {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    };

    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ─── Button: "Ouvrir l'App" Logic ─────────────────────────────────────────
    const openAppBtn = document.getElementById('open-app-btn');
    if (openAppBtn) {
        openAppBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const deepLink = "moadprofr://home";
            const start = Date.now();
            window.location.href = deepLink;
            
            setTimeout(() => {
                if (Date.now() - start < 2200) {
                    showToast("Cette application n'est pas installée sur votre téléphone.");
                }
            }, 2000);
        });
    }

    // ─── Button: "Télécharger" Logic (Google Play) ───────────────────────────
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showToast("À bientôt !");
        });
    }

    // Scroll reveal animation
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
        el.style.transition = '0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });

    window.addEventListener('scroll', reveal);
    reveal(); 
});
