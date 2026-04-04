# Manuel's AC & Cooling — Website

A clean, professional static website for Manuel's AC & Cooling, a solo AC business in San Antonio, TX.

## Pages

| File | Description |
|---|---|
| `index.html` | Homepage — hero, services overview, why choose us |
| `services.html` | Detailed services listing |
| `about.html` | About Manuel, credentials, service area |
| `contact.html` | Contact info + service request form |
| `css/style.css` | All styles |
| `js/main.js` | Mobile nav, form handling, scroll animations |

## Setup

### Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/manuels-ac.git
cd manuels-ac
```

### Run locally
No build steps needed — this is plain HTML/CSS/JS.

Open `index.html` directly in a browser, or use a local server:
```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Deploy

### GitHub Pages (free)
1. Push to GitHub
2. Go to repo **Settings → Pages**
3. Set source to `main` branch, root folder
4. Site will be live at `https://YOUR_USERNAME.github.io/manuels-ac`

### Netlify (free, drag & drop)
1. Go to [netlify.com](https://netlify.com) → Add new site
2. Drag the project folder onto the Netlify deploy box
3. Done — you'll get a live URL instantly

## Customization Checklist

- [ ] Replace `(210) 555-0000` with Manuel's real phone number
- [ ] Replace `manuel@manuelsac.com` with real email
- [ ] Add a real photo to the About page (replace the placeholder block)
- [ ] Update business name/branding if needed
- [ ] Connect the contact form (see options below)
- [ ] Add Google Analytics or similar if needed

## Contact Form

The form currently shows a success message client-side (demo mode).  
To make it actually send emails, pick one of these free options:

### Formspree (easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form — you'll get an endpoint like `https://formspree.io/f/abc123`
3. In `js/main.js`, uncomment the fetch block and replace the demo timeout

### EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Follow their setup guide to connect your email
3. Call `emailjs.send(...)` in the form submit handler

## Tech Stack

- Vanilla HTML5 / CSS3 / JavaScript
- Google Fonts (Barlow Condensed + Barlow)
- No frameworks, no dependencies, no build step
- Mobile-responsive
