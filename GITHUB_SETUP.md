# GitHub Setup Guide

Follow these steps to push your Sales Dashboard to GitHub.

## Step 1: Install Git

Git is not currently installed on your system. Download and install it:

1. Go to [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Download the installer (64-bit recommended)
3. Run the installer with default settings
4. **Important**: During installation, make sure "Git from the command line and also from 3rd-party software" is selected
5. Restart your terminal/PowerShell after installation

To verify installation, open a new PowerShell window and run:
```bash
git --version
```

## Step 2: Configure Git (First Time Only)

Set your name and email (these will appear in your commits):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 3: Initialize Git Repository

Navigate to your project directory and initialize Git:

```bash
cd C:\Users\anubh\.gemini\antigravity\scratch\sales_dashboard
git init
```

## Step 4: Create Initial Commit

Add all files and create your first commit:

```bash
git add .
git commit -m "Initial commit: Sales Dashboard with interactive charts"
```

## Step 5: Create GitHub Repository

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `sales-dashboard` (or your preferred name)
3. Description: "Premium sales dashboard with interactive data visualization"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 6: Connect to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/sales-dashboard.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 7: Verify

Visit your repository URL:
```
https://github.com/YOUR_USERNAME/sales-dashboard
```

You should see all your files uploaded!

## Future Updates

After making changes to your code, push updates with:

```bash
git add .
git commit -m "Description of your changes"
git push
```

## Common Issues

### Authentication Required
If GitHub asks for authentication:
- **Option 1**: Use GitHub CLI (`gh auth login`)
- **Option 2**: Use Personal Access Token instead of password
  - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Generate new token with `repo` scope
  - Use token as password when prompted

### Permission Denied
Make sure you're logged into the correct GitHub account and have permission to push to the repository.

## Quick Reference Commands

```bash
# Check status
git status

# View commit history
git log --oneline

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Pull latest changes
git pull

# View remote URL
git remote -v
```

## Next Steps

Once your repository is on GitHub:
- Add a screenshot to the README
- Set up GitHub Pages for demo (if desired)
- Add GitHub Actions for CI/CD
- Invite collaborators
- Create issues for future features

---

**Need Help?** Check out [GitHub's official guides](https://docs.github.com/en/get-started)
