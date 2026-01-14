Initialize Lucide Icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // 1. Loader Logic
    const loaderTL = gsap.timeline();
    loaderTL.to('.loader-logo', {
        scale: 1.1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out"
    })
        .to('.loader', {
            yPercent: -100,
            duration: 1.4,
            ease: "expo.inOut",
            delay: 0.8
        });

    // 2. Navigation & Menu Overlay Logic
    const menuBtn = document.querySelector('.nav-menu-btn');
    const closeBtn = document.querySelector('.nav-overlay-close');
    const overlay = document.querySelector('.nav-overlay');
    const overlayBg = document.querySelector('.nav-overlay-bg');
    const overlayContent = document.querySelector('.nav-overlay-content');
    const menuLinks = document.querySelectorAll('.nav-link');

    const overlayTL = gsap.timeline({ paused: true });

    overlayTL.to(overlay, { display: 'flex', duration: 0 })
        .to(overlayBg, { yPercent: 100, duration: 1.2, ease: "expo.inOut" })
        .to(overlayContent, { opacity: 1, y: 0, duration: 1, ease: "expo.out" }, "-=0.6");

    menuBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        overlayTL.play();
    });

    const closeOverlay = () => {
        overlayTL.reverse().then(() => {
            overlay.classList.remove('active');
        });
    };

    closeBtn.addEventListener('click', closeOverlay);

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeOverlay();
        });
    });

    // 3. Hero Animations
    const heroTL = gsap.timeline({ delay: 2 });
    heroTL.from('.hero-bg-text', {
        scale: 1.1,
        opacity: 0,
        duration: 2.5,
        ease: "power2.out"
    })
        .to('.nav-logo img', {
            opacity: 1,
            duration: 1.2,
            ease: "expo.out"
        }, "-=1.5")
        .from('.hero-main-logo', {
            y: 60,
            opacity: 0,
            duration: 1.8,
            ease: "expo.out"
        }, "-=1.8")
        .from('.hero-subtitle', {
            y: 30,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out"
        }, "-=1.4");

    // 4. Portfolio Parallax & Reveal
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            y: 80,
            opacity: 0,
            duration: 1.6,
            ease: "expo.out"
        });

        const img = item.querySelector('img');
        const speed = item.dataset.speed || 0.05;
        gsap.to(img, {
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            },
            yPercent: speed * 50,
            ease: "none"
        });
    });

    // 5. About Section Reveal
    gsap.from('.about-main-text', {
        scrollTrigger: {
            trigger: '.about-section',
            start: "top 70%"
        },
        y: 50,
        opacity: 0,
        duration: 1.8,
        ease: "expo.out"
    });

    gsap.from('.about-description p', {
        scrollTrigger: {
            trigger: '.about-section',
            start: "top 60%"
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1.4,
        ease: "power2.out"
    });

    gsap.from('.stat-item', {
        scrollTrigger: {
            trigger: '.about-stats',
            start: "top 85%"
        },
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power2.out"
    });

    // 6. Contact Section Reveal
    gsap.from('.contact-title', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: "top 80%"
        },
        x: -60,
        opacity: 0,
        duration: 1.8,
        ease: "expo.out"
    });

    gsap.from('.contact-form > *', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: "top 85%"
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.4,
        ease: "expo.out"
    });

    gsap.from('.location-item', {
        scrollTrigger: {
            trigger: '.office-locations',
            start: "top 85%"
        },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power2.out"
    });

    // Glitch Effect (Subtle)
    const glitch = document.querySelector('.glitch-text');
    if (glitch) {
        setInterval(() => {
            gsap.to(glitch, {
                x: Math.random() * 4 - 2,
                y: Math.random() * 4 - 2,
                duration: 0.05,
                ease: "none",
                onComplete: () => {
                    gsap.to(glitch, { x: 0, y: 0, duration: 0.05 });
                }
            });
        }, 4000);
    }
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-main');
    if (window.scrollY > 100) {
        gsap.to(nav, { backgroundColor: 'rgba(0, 0, 0, 0.9)', duration: 0.3 });
    } else {
        gsap.to(nav, { backgroundColor: 'transparent', duration: 0.3 });
    }
});
