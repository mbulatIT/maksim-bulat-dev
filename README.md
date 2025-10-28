# Maksim Bulat - iOS Developer Portfolio

A modern, responsive landing page for iOS developer Maksim Bulat, featuring a liquid glass (glassmorphism) design aesthetic.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready%20to%20Deploy-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## Features

### Design
- **Liquid Glass Effect** - Modern glassmorphism UI with frosted glass cards
- **Animated Gradient Blobs** - Floating background elements with parallax scrolling
- **Smooth Animations** - Fade-in effects, hover states, and scroll-triggered animations
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices

### Sections
- **Hero** - Professional introduction with key stats (7+ years experience)
- **Projects** - Showcase of iOS apps (Sleepy, AutoSelect, TrackWell)
- **Skills** - Core expertise including Swift, SwiftUI, and architecture patterns
- **About** - Professional background and availability
- **Contact** - Integrated contact form with social links

### Technical Highlights
- Pure HTML/CSS/JavaScript - No build tools or dependencies required
- Lightweight and fast loading
- SEO-friendly structure
- Cross-browser compatible
- Accessible navigation

---

## Quick Start

### Local Preview

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/maksim-bulat-portfolio.git
   cd maksim-bulat-portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (if you have npx)
   npx serve
   ```
   Then visit `http://localhost:8000`

---

## Deployment

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for detailed step-by-step instructions on deploying to:
- GitHub Pages (Free & Easy)
- Netlify (Advanced Features)
- Vercel (Modern & Fast)
- Traditional Web Hosting

**Fastest way to deploy:** Use Netlify drag & drop - live in 60 seconds!

---

## Customization

### Update Personal Information

**index.html** - Edit your details:
```html
<!-- Update name, title, description -->
<h1 class="hero-title">
    Maksim Bulat
    <span class="gradient-text">iOS Developer</span>
</h1>

<!-- Update contact information -->
<a href="mailto:YOUR_EMAIL@example.com">
```

### Update Projects

**index.html** - Modify project cards:
```html
<div class="project-card">
    <div class="project-title">Your App Name</div>
    <div class="project-tagline">App description</div>
    <span class="tech-tag">SwiftUI</span>
</div>
```

### Customize Colors

**styles.css** - Change color scheme in CSS variables:
```css
:root {
    --sky-500: #0ea5e9;      /* Primary blue */
    --violet-500: #8b5cf6;   /* Primary purple */
    --text-primary: #f1f5f9; /* Main text color */
}
```

### Add App Store Links

Replace `#` placeholders in the HTML with actual links:
```html
<a href="https://apps.apple.com/app/YOUR_APP_ID">
```

---

## File Structure

```
DeveloperPage/
├── index.html          # Main HTML structure
├── styles.css          # All styles and animations
├── script.js           # Interactive functionality
├── README.md           # This file
├── DEPLOYMENT.md       # Deployment guide
└── sample              # Original React reference code
```

---

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android)

---

## Performance

This landing page is optimized for performance:
- **No external dependencies** - All code is self-contained
- **Minimal HTTP requests** - Only 3 files to load
- **Optimized animations** - Uses CSS transforms for 60fps
- **Lazy loading** - Elements animate in as you scroll

Expected PageSpeed Insights score: **90+**

---

## Integrating Contact Form

The contact form is currently set up with a basic handler. To make it functional:

### Option 1: Netlify Forms (Easiest)
Add `netlify` attribute to the form:
```html
<form netlify class="contact-form">
```
Deploy to Netlify - forms work automatically!

### Option 2: Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Update form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Add EmailJS script to HTML
3. Update `script.js` with EmailJS integration code

### Option 4: Custom Backend
Connect to your own API endpoint in `script.js`

---

## Adding Analytics

### Google Analytics
Add to `<head>` in `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## SEO Optimization

### Add Meta Tags
Add to `<head>` in `index.html`:
```html
<meta name="description" content="Maksim Bulat - Senior iOS Developer with 7+ years experience in Swift, SwiftUI, and mobile app development">
<meta name="keywords" content="iOS Developer, Swift, SwiftUI, Mobile Apps, App Developer">
<meta property="og:title" content="Maksim Bulat - iOS Developer">
<meta property="og:description" content="Senior iOS Developer specializing in Swift and SwiftUI">
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourdomain.com">
<meta name="twitter:card" content="summary_large_image">
```

---

## Roadmap / Future Enhancements

- [ ] Add blog section for technical articles
- [ ] Integrate with App Store API to show real-time app ratings
- [ ] Add dark/light theme toggle
- [ ] Include downloadable resume/CV
- [ ] Add testimonials section
- [ ] Create case studies for major projects
- [ ] Add multilingual support

---

## Credits

**Design Concept:** Liquid glass / Glassmorphism aesthetic
**Developer:** Maksim Bulat
**Technology Stack:** HTML5, CSS3, Vanilla JavaScript

---

## License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio!

---

## Contact

- **Email:** hello@maksimbulat.dev
- **GitHub:** github.com/maksim
- **LinkedIn:** linkedin.com/in/maksim-bulat

---

## Support This Project

If you found this portfolio template helpful:
- ⭐ Star this repository
- 🍴 Fork it for your own use
- 📢 Share with other developers
- 💬 Provide feedback or suggestions

---

**Ready to launch?** Check out [DEPLOYMENT.md](DEPLOYMENT.md) to get your site live in minutes!
