@echo off
echo Configuring Git user...
"C:\Program Files\Git\bin\git.exe" config --global user.name "Anubhav Baghel"
"C:\Program Files\Git\bin\git.exe" config --global user.email "code.anubhavbaghel@gmail.com"
echo.
echo Git configuration complete!
echo.
echo User: 
"C:\Program Files\Git\bin\git.exe" config --global user.name
echo Email: 
"C:\Program Files\Git\bin\git.exe" config --global user.email
