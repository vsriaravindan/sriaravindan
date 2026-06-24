/* ===== Theme Toggle, Smooth Scroll, Nav ===== */

document.addEventListener('DOMContentLoaded', () => {

    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const skillFills = document.querySelectorAll('.skill-fill');

    // --- Load saved theme ---
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        html.setAttribute('data-theme', 'dark');
        toggle.textContent = '☀️';
    } else {
        html.removeAttribute('data-theme');
        toggle.textContent = '🌙';
    }

    // --- Toggle ---
    toggle.addEventListener('click', () => {
        const isDark = html.getAttribute('data-theme') === 'dark';
        if (isDark) {
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            toggle.textContent = '🌙';
        } else {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            toggle.textContent = '☀️';
        }
    });

    // --- Mobile hamburger ---
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Close nav on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });

    // --- Animate skill bars on scroll ---
    const animateSkills = () => {
        skillFills.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                const target = bar.dataset.percent;
                bar.style.width = target + '%';
            }
        });
    };

    // Run on load and scroll
    animateSkills();
    window.addEventListener('scroll', animateSkills);
});
