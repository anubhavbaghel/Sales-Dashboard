@echo off
echo Adding all files to Git...
"C:\Program Files\Git\bin\git.exe" add .
echo.
echo Creating initial commit...
"C:\Program Files\Git\bin\git.exe" commit -m "Initial commit: Sales Dashboard with interactive charts"
echo.
echo Renaming branch to main...
"C:\Program Files\Git\bin\git.exe" branch -M main
echo.
echo Repository is ready to push!
echo.
"C:\Program Files\Git\bin\git.exe" log --oneline -n 1
