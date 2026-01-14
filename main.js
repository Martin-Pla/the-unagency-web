lucide.createIcons();
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    // Animación de Entrada (Loader)
    const loaderTL = gsap.timeline();
    loaderTL.to('.loader-logo', { scale: 1.1, opacity: 1, duration: 1.2 })
            .to('.loader', { yPercent: -100, duration: 1.4, ease: "expo.inOut", delay: 0.8 });
    // Lógica del Menú
    const menuBtn = document.querySelector('.nav-menu-btn');
    const overlay = document.querySelector('.nav-overlay');
    
    menuBtn.addEventListener('click', () => {
        gsap.to(overlay, { display: 'flex', opacity: 1, duration: 0.5 });
    });
    // Efecto de Parallax en imágenes
    document.querySelectorAll('.project-item img').forEach(img => {
        gsap.to(img, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: img,
                scrub: true
            }
        });
    });
});
