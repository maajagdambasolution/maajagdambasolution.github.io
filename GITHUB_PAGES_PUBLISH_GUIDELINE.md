# GitHub Pages Publishing Guideline

This guide is for the repository:
https://github.com/maajagdambasolution/maajagdambasolution.github.io

Use this process to pull latest code, make updates, and publish to GitHub Pages.

## 1) One-time setup (new machine)

1. Clone repository

    git clone https://github.com/maajagdambasolution/maajagdambasolution.github.io.git

2. Open project folder

    cd maajagdambasolution.github.io

3. Verify remote

    git remote -v

4. Install dependencies

    npm install

## 2) Normal update and publish flow

1. Go to project folder

    cd C:\Users\Z003E1PZ\OneDrive - Siemens Healthineers\Workspace\Learning\nikesh-portfolio\maajagdambasolution.github.io

2. Switch to master branch

    git checkout master

3. Pull latest changes

    git pull origin master

4. Make your code/content changes.

5. Build static export

    npm run build

6. Copy export output from out folder to repository root

    Copy-Item -Path "out\*" -Destination "." -Recurse -Force

7. Ensure .nojekyll file exists

    New-Item -Path ".nojekyll" -ItemType File -Force

8. Check changed files

    git status --short

9. Stage all files

    git add -A

10. Commit changes

    git commit -m "Your update message"

11. Push to master

    git push origin master

12. Push the same commit to main (Pages serving branch)

    git push origin master:main

13. Confirm both branches point to same commit

    git rev-parse HEAD
    git rev-parse origin/master
    git rev-parse origin/main

14. Open site with cache-busting query and hard refresh

    https://maajagdambasolution.github.io/?v=timestamp

    Then press Ctrl+F5.

## 3) Quick publish (short version)

    npm run build
    Copy-Item -Path "out\*" -Destination "." -Recurse -Force
    New-Item -Path ".nojekyll" -ItemType File -Force
    git add -A
    git commit -m "Update site"
    git push origin master
    git push origin master:main

## 4) Troubleshooting

### A) Push rejected (non-fast-forward)

1. Pull latest updates first

    git fetch origin
    git pull origin master

2. Try push again

    git push origin master
    git push origin master:main

### B) Remote URL is wrong

1. Set correct remote

    git remote set-url origin https://github.com/maajagdambasolution/maajagdambasolution.github.io.git

2. Verify

    git remote -v

### C) Website shows old content

1. Verify latest commit is on main

    git rev-parse HEAD
    git rev-parse origin/main

2. Open with version query and hard refresh

    https://maajagdambasolution.github.io/?v=your_commit_hash

    Then press Ctrl+F5.

## 5) Optional checks before publishing

Run lint and build checks:

    npx eslint src
    npm run build

## 6) Notes

- This repository uses static export, so copying out content to root is required for Pages in this setup.
- Keep commit messages meaningful so rollback and tracking are easy.
