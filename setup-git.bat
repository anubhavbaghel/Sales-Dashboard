@echo off
echo Checking Git configuration...
"C:\Program Files\Git\bin\git.exe" config --global user.name
"C:\Program Files\Git\bin\git.exe" config --global user.email
echo.
echo Initializing Git repository...
"C:\Program Files\Git\bin\git.exe" init
echo.
echo Checking repository status...
"C:\Program Files\Git\bin\git.exe" status
