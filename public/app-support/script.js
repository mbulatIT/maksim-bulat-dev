// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

const EMAIL_SERVICE = 'EMAILJS'; // Change to 'EMAILJS' or 'NETLIFY_FORMS' if needed

// EMAILJS Configuration (if using EmailJS)
// Sign up at https://www.emailjs.com/
   const EMAILJS_CONFIG = {
       serviceID: 'service_8b4vot3',      // Your Service ID
       templateID: 'template_nu0o12v',     // Your Template ID
       publicKey: 'nyBg3sqiD6iwo7VV1'  // Your Public Key
   };

// Your email address (for mailto fallback)
const YOUR_EMAIL = 'maksim.bulat.help@gmail.com';

// ========================================
// FORM HANDLING
// ========================================

const supportForm = document.getElementById('supportForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const btnLoader = document.getElementById('btnLoader');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');

supportForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Disable button and show loader
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'block';

    // Hide previous messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Get form data
    const formData = new FormData(supportForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        app: formData.get('app'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        device: formData.get('device') || 'Not specified'
    };

    try {
        let success = false;

        // Route to appropriate email service
        if (EMAIL_SERVICE === 'FORMSPREE') {
            success = await sendViaFormspree(data);
        } else if (EMAIL_SERVICE === 'EMAILJS') {
            success = await sendViaEmailJS(data);
        } else if (EMAIL_SERVICE === 'NETLIFY_FORMS') {
            success = await sendViaNetlify(formData);
        }

        if (success) {
            showSuccess();
            supportForm.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Error sending message:', error);
        showError(error.message);
    } finally {
        // Re-enable button
        submitBtn.disabled = false;
        btnText.style.display = 'block';
        btnLoader.style.display = 'none';
    }
});

// ========================================
// EMAIL SERVICE IMPLEMENTATIONS
// ========================================

/**
 * Send email via Formspree
 * Setup: Sign up at https://formspree.io and create a form
 */
async function sendViaFormspree(data) {
    if (FORMSPREE_ENDPOINT === 'YOUR_FORM_ID_HERE') {
        throw new Error('Please configure your Formspree endpoint in script.js');
    }

    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ENDPOINT}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email,
            app: data.app,
            subject: data.subject,
            message: data.message,
            device: data.device
        })
    });

    if (!response.ok) {
        throw new Error('Failed to send message via Formspree');
    }

    return true;
}

/**
 * Send email via EmailJS
 * Setup: Sign up at https://www.emailjs.com/ and configure your service
 */
async function sendViaEmailJS(data) {
    // Check if EmailJS library is loaded
    if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS library not loaded. Add the script tag to your HTML.');
    }

    try {
        await emailjs.send(
            EMAILJS_CONFIG.serviceID,
            EMAILJS_CONFIG.templateID,
            {
                from_name: data.name,
                from_email: data.email,
                app_name: data.app,
                subject: data.subject,
                message: data.message,
                device_info: data.device
            },
            EMAILJS_CONFIG.publicKey
        );
        return true;
    } catch (error) {
        throw new Error('Failed to send message via EmailJS: ' + error.text);
    }
}

/**
 * Send via Netlify Forms
 * Setup: Add 'netlify' attribute to your form in HTML
 */
async function sendViaNetlify(formData) {
    const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
    });

    if (!response.ok) {
        throw new Error('Failed to send message via Netlify Forms');
    }

    return true;
}

// ========================================
// UI FEEDBACK FUNCTIONS
// ========================================

function showSuccess() {
    successMessage.style.display = 'block';
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showError(message) {
    errorText.textContent = message || `Something went wrong. Please try again or email me directly at ${YOUR_EMAIL}`;
    errorMessage.style.display = 'block';
    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ========================================
// ADDITIONAL FEATURES
// ========================================

// Auto-detect device information
window.addEventListener('load', () => {
    const deviceInput = document.querySelector('input[name="device"]');
    if (deviceInput && !deviceInput.value) {
        const userAgent = navigator.userAgent;
        let deviceInfo = '';

        // Try to detect device
        if (/iPhone/.test(userAgent)) {
            deviceInfo = 'iPhone';
        } else if (/iPad/.test(userAgent)) {
            deviceInfo = 'iPad';
        } else if (/Mac/.test(userAgent)) {
            deviceInfo = 'Mac';
        }

        // Add iOS version if available
        const iosVersion = userAgent.match(/OS (\d+)_(\d+)/);
        if (iosVersion) {
            deviceInfo += `, iOS ${iosVersion[1]}.${iosVersion[2]}`;
        }

        if (deviceInfo) {
            deviceInput.placeholder = `Auto-detected: ${deviceInfo}`;
        }
    }
});

// Smooth scroll for anchor links
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

// Form validation feedback
const inputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');
inputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = 'var(--error-color)';
        } else {
            input.style.borderColor = 'var(--glass-border)';
        }
    });

    input.addEventListener('input', () => {
        input.style.borderColor = 'var(--glass-border)';
    });
});

console.log('App Support page loaded successfully!');
console.log(`Email service configured: ${EMAIL_SERVICE}`);
