@echo off
echo ========================================
echo   Push Sales Dashboard to GitHub
echo ========================================
echo.

REM TODO: Replace these with your actual values
set GITHUB_USERNAME=YOUR_USERNAME
set REPO_NAME=sales-dashboard

echo Connecting to GitHub repository...
"C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/%GITHUB_USERNAME%/%REPO_NAME%.git

echo.
echo Pushing to GitHub...
"C:\Program Files\Git\bin\git.exe" push -u origin main

echo.
echo ========================================
echo   Done! Check your repository at:
echo   https://github.com/%GITHUB_USERNAME%/%REPO_NAME%
echo ========================================
pause
