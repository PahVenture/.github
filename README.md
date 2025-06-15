# PahVenture Organization Repository

This repository contains the GitHub organization assets and website for **PahVenture** - a forward-thinking software development and venture capital company.

## 🏗️ Repository Structure

```
.
├── .github/
│   └── workflows/
│       └── static.yml          # GitHub Pages deployment workflow
├── branding/
│   └── horizontal_normal.png   # Company logo assets
├── profile/
│   └── README.md              # Organization profile (displays on GitHub)
├── public/                    # Coming soon website
│   ├── index.html            # Main website page (Spanish)
│   ├── style.css             # Styling and animations
│   ├── script.js             # Countdown timer and particles.js
│   ├── logo.svg              # Website logo
│   └── favicon.ico           # Website favicon
└── README.md                 # This file
```

## 🌐 Website

The `public/` directory contains a **coming soon** website deployed automatically to GitHub Pages at [pahventure.com](https://pahventure.com). 

### Features
- **Countdown Timer**: Dynamic countdown to company launch
- **Particle Effects**: Interactive background animations using particles.js
- **Responsive Design**: Mobile-friendly layout
- **Social Media Integration**: Links to company social platforms
- **Bilingual Content**: Primary content in Spanish

### Technologies Used
- HTML5, CSS3, JavaScript (ES6+)
- [Particles.js](https://vincentgarreau.com/particles.js/) for background effects
- Google Fonts (Montserrat, Exo 2)
- Font Awesome icons
- CSS animations and responsive design

## 🚀 Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions:

- **Trigger**: Push to `main` branch
- **Workflow**: `.github/workflows/static.yml`
- **Source**: Files from `public/` directory
- **URL**: Configured to serve from organization's domain

## 🎨 Branding

Brand assets and visual identity elements are stored in the `branding/` directory for consistent use across projects.

## 👥 Organization Profile

The `profile/README.md` file defines the content displayed on PahVenture's GitHub organization page, including:

- Company overview and mission
- Service offerings (Software Development & Venture Capital)
- Featured projects
- Contact information
- Social impact initiatives

## 🛠️ Development

### Local Development

To run the website locally:

```bash
# Navigate to the public directory
cd public/

# Serve files using any static server, e.g.:
python -m http.server 8000
# or
npx serve .

# Open http://localhost:8000 in your browser
```

### Modifying the Countdown

The countdown timer in `script.js` is set to 11 days from the current date. To modify:

```javascript
// Edit these lines in script.js
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 11); // Change the number of days
futureDate.setHours(16, 59, 59, 0); // Set specific launch time
```

### Color Scheme

The website uses a consistent color palette defined in CSS custom properties:

- **Dark Blue**: `#012323` (Primary background)
- **Golden Yellow**: `#E0AF4E` (Accent/brand color)
- **Off White**: `#F5F7F7` (Text color)
- **Mint Green**: `#04BFA9` (Secondary accent)

## 📱 Social Media

Connect with PahVenture on social platforms:

- **Facebook**: [@PahVenture](https://facebook.com/PahVenture)
- **Instagram**: [@PahVenture](https://instagram.com/PahVenture)
- **LinkedIn**: [Company/PahVenture](https://linkedin.com/company/PahVenture)
- **X (Twitter)**: [@PahVenture](https://x.com/PahVenture)

## 📧 Contact

- **Business Inquiries**: [dev@pahventure.com](mailto:dev@pahventure.com)
- **Partnership Opportunities**: [partnerships@pahventure.com](mailto:partnerships@pahventure.com)
- **Investment Proposals**: [invest@pahventure.com](mailto:invest@pahventure.com)

## 🤝 Contributing

This repository manages PahVenture's organizational presence on GitHub. For contributions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally (especially for website changes)
5. Submit a pull request

---

<p align="center">
  <i>Rompiendo barreras, inspirando innovación.</i><br>
  <i>Breaking barriers, inspiring innovation.</i>
</p>