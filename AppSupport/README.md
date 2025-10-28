# App Support Page

A dedicated support page for your App Store customers to contact you with questions, feedback, and support requests.

## Features

- **Modern Glassmorphism Design** - Matches your main landing page aesthetic
- **Comprehensive Support Form** - Captures all necessary information:
  - Name and email
  - Which app they're contacting about
  - Subject and detailed message
  - Device information (auto-detected)
- **Email Integration** - Multiple options to receive messages:
  - Formspree (recommended)
  - EmailJS
  - Netlify Forms
  - Custom backend
- **User-Friendly Interface**:
  - Quick help cards for common topics
  - FAQ section
  - Success/error messages
  - Loading states
  - Form validation
- **Responsive Design** - Works perfectly on all devices

## Files Included

```
AppSupport/
├── index.html          # Main support page
├── styles.css          # Styling with glassmorphism effects
├── script.js           # Form handling and email integration
├── EMAIL_SETUP.md      # Detailed setup instructions
└── README.md           # This file
```

## Quick Setup (5 minutes)

### Step 1: Configure Email Service

**Using Formspree (Recommended):**

1. Sign up at [https://formspree.io](https://formspree.io)
2. Create a new form and get your Form ID
3. Open `script.js`
4. Replace `YOUR_FORM_ID_HERE` with your actual Form ID:
   ```javascript
   const FORMSPREE_ENDPOINT = 'xyzabc123'; // Your form ID
   ```

**That's it!** Forms will now send to your email.

For other email services (EmailJS, Netlify), see **[EMAIL_SETUP.md](EMAIL_SETUP.md)** for detailed instructions.

### Step 2: Customize Your Information

Update these in `index.html`:

1. **Your apps** (line 119-126):
   ```html
   <option value="YourApp">Your App Name</option>
   ```

2. **Your email** throughout the page:
   ```html
   hello@maksimbulat.dev
   ```

3. **FAQ questions** to match your apps' common issues

### Step 3: Test

1. Open `index.html` in your browser
2. Fill out and submit the form
3. Check your email!

## Accessing the Support Page

The support page is linked from your main landing page in three places:

1. **Profile card** - "Support" button
2. **Contact sidebar** - "App Support" button
3. **Contact section** - "App Support Form" button

Direct URL (after deployment):
```
https://yourdomain.com/AppSupport/
```

## Form Fields

The support form collects:

- **Name** (required) - User's name
- **Email** (required) - For follow-up
- **Which App** (required) - Dropdown of your apps
- **Subject** (required) - Brief description
- **Message** (required) - Detailed inquiry
- **Device Info** (optional) - Auto-detected iOS/device info

## Email Delivery Options

### Formspree (Recommended)
- ✅ Easiest setup
- ✅ 50 free submissions/month
- ✅ Built-in spam protection
- ✅ No coding required

### EmailJS
- ✅ More customization
- ✅ 200 free emails/month
- ✅ Custom templates
- ⚠️ Requires adding script tag

### Netlify Forms
- ✅ Free if hosting on Netlify
- ✅ 100 submissions/month
- ✅ Built-in spam filtering
- ⚠️ Only works on Netlify

See **[EMAIL_SETUP.md](EMAIL_SETUP.md)** for complete setup guides.

## Customization

### Adding More Apps

Edit the dropdown in `index.html` (around line 119):

```html
<select name="app" class="form-select" required>
    <option value="">Select an app...</option>
    <option value="YourNewApp">Your New App Name</option>
    <!-- Add more options -->
</select>
```

### Changing Colors

Update CSS variables in `styles.css`:

```css
:root {
    --sky-500: #0ea5e9;      /* Primary blue */
    --violet-500: #8b5cf6;   /* Primary purple */
}
```

### Adding More FAQ Items

Add new FAQ items in `index.html` (around line 223):

```html
<div class="faq-item">
    <h3 class="faq-question">Your question?</h3>
    <p class="faq-answer">Your answer here.</p>
</div>
```

## Security Features

- ✅ Client-side form validation
- ✅ HTTPS required for production
- ✅ Email services have built-in spam protection
- ✅ No sensitive data stored client-side
- ✅ Rate limiting via email service

## Testing Checklist

Before going live:

- [ ] Email delivery works
- [ ] Success message appears after submission
- [ ] Form clears after successful submission
- [ ] Error handling works properly
- [ ] All links work correctly
- [ ] Mobile responsive design works
- [ ] Device auto-detection works
- [ ] FAQ answers are accurate

## Troubleshooting

### Form doesn't send emails
1. Check browser console for errors
2. Verify your Form ID/API keys are correct
3. Make sure you're online
4. Check email service dashboard for logs

### "Please configure your endpoint" error
- You haven't replaced `YOUR_FORM_ID_HERE` in `script.js`

### Success message shows but no email
- Check spam folder
- Verify email address in service settings
- Check service dashboard for delivery status

See **[EMAIL_SETUP.md](EMAIL_SETUP.md)** for more troubleshooting.

## Deployment

The AppSupport page deploys with your main site. No special configuration needed.

After deployment, access at:
- GitHub Pages: `https://username.github.io/repo/AppSupport/`
- Netlify: `https://yoursite.netlify.app/AppSupport/`
- Custom domain: `https://yourdomain.com/AppSupport/`

## Analytics (Optional)

To track support form usage, you can:

1. **Google Analytics** - Track form submissions as events
2. **Email service dashboards** - See submission counts
3. **Netlify Analytics** - View page traffic

## Maintenance

### Regular tasks:
- Monitor email delivery
- Update FAQ based on common questions
- Add new apps to the dropdown as you publish them
- Review and respond to support requests promptly

### Recommended:
- Respond to inquiries within 24-48 hours
- Keep FAQ section up to date
- Monitor spam submissions
- Track most common issues

## Support for This Page

If you need help setting up:
- Check **[EMAIL_SETUP.md](EMAIL_SETUP.md)** for detailed instructions
- Visit your email service's documentation
- Check browser console for error messages

---

**Ready to help your users?** Follow the Quick Setup above and you'll be receiving support requests in minutes!
