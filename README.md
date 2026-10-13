# 🌐 Website Demo

My personal website with a complete CI/CD pipeline using GitHub Actions.

**Live site:** https://SharoonNasimNJ.github.io/website-demo/

![Deploy](https://github.com/SharoonNasimNJ/website-demo/actions/workflows/deploy.yml/badge.svg)

## 🔧 What This Project Demonstrates

- Static website (HTML, CSS, JavaScript)
- Automated testing (HTML validation)
- Automated deployment to GitHub Pages
- CI/CD with GitHub Actions

## 🚀 How It Works

Every push to `main` triggers:

1. **Test** — Validates HTML structure
2. **Build** — Prepares files for deployment
3. **Deploy** — Publishes to GitHub Pages

## 📁 Structure
.
├── .github/workflows/deploy.yml # CI/CD pipeline
├── src/ # Source files
│ ├── index.html
│ ├── style.css
│ └── script.js
└── README.md

## 🖥️ Run Locally

```bash
cd src
python3 -m http.server 8000
# Visit http://localhost:8000

