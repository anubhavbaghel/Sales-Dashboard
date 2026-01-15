@echo off
echo ========================================
echo   Pushing Sales Dashboard to GitHub
echo ========================================
echo.

echo Removing old remote (if exists)...
"C:\Program Files\Git\bin\git.exe" remote remove origin 2>nul

echo Adding remote repository (HTTPS)...
"C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/anubhavbaghel/Sales-Dashboard.git

echo.
echo Pushing to GitHub...
echo You may be prompted for credentials:
echo   Username: anubhavbaghel
echo   Password: [Use your Personal Access Token]
echo.
"C:\Program Files\Git\bin\git.exe" push -u origin main

echo.
echo ========================================
echo   Done! Check your repository at:
echo   https://github.com/anubhavbaghel/Sales-Dashboard
echo ========================================
pause
