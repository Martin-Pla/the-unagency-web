// Initialize Lucide Icons
lucide.createIcons();

// Fluid Background Logic
const initFluidBg = () => {
    const canvas = document.getElementById('fluid-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;

    const resize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    let particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1
        });
    }

    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(197, 160, 89, 0.1)'; // Gold dust
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animate);
    };
    animate();
};

document.addEventListener('DOMContentLoaded', () => {
    initFluidBg();
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // 1. Precise Loader Sequence
    const loaderTL = gsap.timeline();
    loaderTL.to('.loader-logo', {
        scale: 1.05,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out"
    })
        .to('.loader', {
            yPercent: -100,
            duration: 1.6,
            ease: "expo.inOut",
            delay: 0.5
        });

    // 2. Navigation & Full-Screen Menu Logic
    const menuBtn = document.querySelector('.nav-menu-btn');
    const closeBtn = document.querySelector('.nav-overlay-close');
    const overlay = document.querySelector('.nav-overlay');
    const menuLinks = document.querySelectorAll('.nav-link');

    const overlayTL = gsap.timeline({ paused: true });

    overlayTL.to(overlay, { display: 'flex', opacity: 1, duration: 0.1 })
        .from('.nav-link', {
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "expo.out"
        });

    menuBtn.addEventListener('click', () => {
        overlayTL.play();
    });

    const closeOverlay = () => {
        overlayTL.reverse();
    };

    closeBtn.addEventListener('click', closeOverlay);
    menuLinks.forEach(link => link.addEventListener('click', closeOverlay));

    // 3. Hero Entrance (Delayed for Loader)
    const heroTL = gsap.timeline({ delay: 1.8 });
    heroTL.from('.hero-bg-text', {
        scale: 0.9,
        opacity: 0,
        duration: 3,
        ease: "power2.out"
    })
        .to('.nav-logo img', {
            opacity: 1,
            duration: 1.5,
            ease: "expo.out"
        }, "-=2")
        .from('.hero-main-logo', {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: "expo.out"
        }, "-=2")
        .from('.hero-subtitle', {
            y: 40,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out"
        }, "-=1.5");

    // 4. Portfolio Reveal & Smooth Parallax
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 95%",
                toggleActions: "play none none none"
            },
            y: 100,
            opacity: 0,
            duration: 1.8,
            ease: "expo.out"
        });

        const img = item.querySelector('img');
        const speed = parseFloat(item.dataset.speed) || 0.05;
        gsap.to(img, {
            scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            },
            yPercent: speed * 40,
            ease: "none"
        });
    });

    // 5. Section Specific Reveals
    gsap.from('.about-main-text', {
        scrollTrigger: {
            trigger: '.about-section',
            start: "top 80%"
        },
        y: 60,
        opacity: 0,
        duration: 2,
        ease: "expo.out"
    });

    gsap.from('.about-description p', {
        scrollTrigger: {
            trigger: '.about-section',
            start: "top 70%"
        },
        y: 40,
        opacity: 0,
        stagger: 0.3,
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.from('.stat-item', {
        scrollTrigger: {
            trigger: '.about-stats',
            start: "top 90%"
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "expo.out"
    });

    // 6. Contact Section Reveal
    gsap.from('.section-label', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: "top 85%"
        },
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out"
    });

    gsap.from('.contact-grid > *', {
        scrollTrigger: {
            trigger: '.contact-grid',
            start: "top 90%"
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "expo.out"
    });

    // 7. Brand Marquee (Pure GSAP for better performance)
    gsap.to('.brand-track-gsap', {
        xPercent: -50,
        repeat: -1,
        duration: 30,
        ease: "none"
    });

    // 8. Scroll Progress Bar
    gsap.to('.scroll-progress', {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
            scrub: 0.3
        }
    });

    // 9. Portfolio View All Logic
    const viewAllBtn = document.getElementById('view-all-btn');
    const hiddenProjects = document.querySelectorAll('.hidden-project');
    let projectsVisible = false;

    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            projectsVisible = !projectsVisible;

            if (projectsVisible) {
                hiddenProjects.forEach((p, idx) => {
                    p.style.display = 'flex';
                    gsap.from(p, {
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        delay: idx * 0.1,
                        ease: "power2.out"
                    });
                });
                viewAllBtn.innerText = 'SHOW LESS';
            } else {
                hiddenProjects.forEach(p => {
                    p.style.display = 'none';
                });
                viewAllBtn.innerText = 'VIEW ALL PROJECTS';
                // Scroll back to portfolio top if person is way down
                document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
            }

            // Refresh ScrollTrigger as height of page changed
            ScrollTrigger.refresh();
        });
    }
});

// Subtle Magnetic Effect for Menu Button
const menuBtn = document.querySelector('.nav-menu-btn');
if (menuBtn) {
    menuBtn.addEventListener('mousemove', (e) => {
        const rect = menuBtn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(menuBtn, { x: x * 0.3, y: y * 0.3, duration: 0.4 });
    });
    menuBtn.addEventListener('mouseleave', () => {
        gsap.to(menuBtn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
    });
}
