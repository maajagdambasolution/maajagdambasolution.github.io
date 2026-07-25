# Maa Jagdamba Solution Pvt. Ltd. Website

This repository contains a Next.js website for:

Maa Jagdamba Solution Pvt. Ltd.  
Financial, accounting, taxation, compliance, and business advisory services in Ranchi, Jharkhand.

## Included Pages

- Home
- About Us
- Services
- Contact

## Local Development

1. Install dependencies:

	npm install

2. Start development server:

	npm run dev

3. Open:

	http://localhost:3000

## Production Build

Run:

npm run build

This project is configured for static export, so the generated static files are ready for GitHub Pages hosting.

## GitHub Pages Deployment

Repository name should be:

maajagdambasolution.github.io

Deployment steps (current setup used in this repository):

1. Build the static site:

	npm run build

2. Copy static export from out to repository root:

	Copy-Item -Path "out\*" -Destination "." -Recurse -Force

3. Ensure .nojekyll exists:

	New-Item -Path ".nojekyll" -ItemType File -Force

4. Commit and push:

	git add -A
	git commit -m "Republish Pages output"
	git push origin HEAD:main

5. Open the live site with a cache-busting query if needed:

	https://maajagdambasolution.github.io/?v=timestamp

## Git Commands Cheat Sheet

Common status/history commands:

	git status --short
	git status -sb
	git log --oneline -5
	git rev-parse HEAD
	git rev-parse origin/main

Fetch/pull/push commands:

	git fetch origin
	git pull origin main
	git push origin HEAD:main

Staging and commit commands:

	git add -A
	git add src/components/site-footer.tsx src/app/globals.css
	git commit -m "Your commit message"

## SEO Positioning

Primary positioning:

Maa Jagdamba Solution Pvt. Ltd. - Financial, Accounting, Taxation & Business Advisory Services in Ranchi, Jharkhand
