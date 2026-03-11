// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const nav = document.querySelector('.nav');

mobileMenuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// ========================================
// EMAIL CONFIGURATION
// ========================================
const EMAILJS_CONFIG = {
    serviceID: 'service_8b4vot3',      // Your Service ID
    templateID: 'template_nu0o12v',     // Your Template ID
    publicKey: 'nyBg3sqiD6iwo7VV1'      // Your Public Key
};

const YOUR_EMAIL = 'maksim.bulat.opportunities@gmail.com';

// ========================================
// FORM HANDLING
// ========================================
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const btnLoader = document.getElementById('btnLoader');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Disable button and show loader
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoader.style.display = 'block';

        // Hide previous messages
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';

        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        try {
            // Check if EmailJS library is loaded
            if (typeof emailjs === 'undefined') {
                throw new Error('EmailJS library not loaded. Please refresh the page and try again.');
            }

            // Send email via EmailJS
            await emailjs.send(
                EMAILJS_CONFIG.serviceID,
                EMAILJS_CONFIG.templateID,
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message
                },
                EMAILJS_CONFIG.publicKey
            );

            // Show success message
            successMessage.style.display = 'block';
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            contactForm.reset();
        } catch (error) {
            console.error('Error sending message:', error);
            errorText.textContent = error.message || `Something went wrong. Please try again or email me directly at ${YOUR_EMAIL}`;
            errorMessage.style.display = 'block';
            errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            btnText.style.display = 'block';
            btnLoader.style.display = 'none';
        }
    });
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards and sections
document.querySelectorAll('.project-card, .skill-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add parallax effect to decorative blobs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const blob1 = document.querySelector('.blob-1');
    const blob2 = document.querySelector('.blob-2');

    if (blob1) {
        blob1.style.transform = `translate(-33%, -25%) translateY(${scrolled * 0.1}px)`;
    }
    if (blob2) {
        blob2.style.transform = `translate(16%, 16%) translateY(${-scrolled * 0.1}px)`;
    }
});

// Add cursor glow effect on glass cards
document.querySelectorAll('.glass-card, .project-card, .skill-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Enhanced mobile menu styles
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav.active {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 80px;
            right: 1.5rem;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(40px);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 1rem;
            padding: 1.5rem;
            z-index: 1000;
            gap: 1rem;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
        }
    }

    .glass-card::before,
    .project-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: inherit;
        background: radial-gradient(
            600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(255, 255, 255, 0.06),
            transparent 40%
        );
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
    }

    .glass-card:hover::before,
    .project-card:hover::before {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Add typing effect to hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.style.opacity = '1';
}

// Preload animations
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add active state to navigation on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add additional active state styles
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-link.active {
        color: var(--sky-300);
        position: relative;
    }

    .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(to right, var(--sky-500), var(--violet-500));
        border-radius: 2px;
    }
`;
document.head.appendChild(activeStyle);

console.log('Maksim Bulat - iOS Developer Portfolio loaded successfully!');
