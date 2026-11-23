# Maksym Dziuba — 3D artist portfolio (Lab 20)

Live URL: https://YOUR-GITHUB-USERNAME.github.io/  <!-- replace after deploying -->

A fast, accessible static portfolio in plain HTML, CSS and a little JS. No build step, no dependencies.

## Tech stack

- Semantic HTML5 (landmarks, skip link, alt text on every image)
- CSS custom properties, one font family, 5-color palette, light/dark theme
- Vanilla JS: theme toggle and an accessible lightbox (`<dialog>`, keyboard arrows, focus return)
- Renders optimized to WebP (full size + thumbnails)

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a **public** repo named `YOUR-GITHUB-USERNAME.github.io` (no README/.gitignore).
2. In this folder:
   ```bash
   git init
   git add .
   git commit -m "Add portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-GITHUB-USERNAME/YOUR-GITHUB-USERNAME.github.io.git
   git push -u origin main
   ```
3. Repo → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)` → Save.
4. After about a minute the site is live at `https://YOUR-GITHUB-USERNAME.github.io/`.

## After the first deploy

- [ ] Replace `yourname.github.io` in the OpenGraph tags (`og:url`, `og:image`) in `index.html` and `about.html`
- [ ] Open the URL in incognito and on your phone
- [ ] Run Lighthouse (Chrome DevTools) and aim for 95+
- [ ] Paste the link in Telegram to check the preview card
- [ ] Write one case study (problem → approach → what was hard → what you'd change) for your best render

## Updating

Edit files, then `git add . && git commit -m "Update" && git push`. Pages redeploys automatically.
