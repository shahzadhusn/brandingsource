@echo off
echo Connecting to GitHub...

:: Initialize Git repository (if not already initialized)
git init

:: Add GitHub remote repository
git remote add origin https://github.com/shahzadhusn/brandingsource.git

:: Configure user information (replace with your details)
:: git config user.name "Your Name"
:: git config user.email "your.email@example.com"

:: Add all files to staging
git add .

:: Create initial commit
git commit -m "Initial commit - Your Branding Source website"

:: Push to GitHub
git push -u origin main

echo.
echo If you see any errors above, you might need to:
echo 1. Make sure Git is installed and in your PATH
echo 2. Configure your Git username and email (uncomment the config lines)
echo 3. Log in to GitHub when prompted

pause 