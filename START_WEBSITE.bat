@echo off
title SmartCLG - MGMCET Event Website
cd /d "%~dp0"

where py >nul 2>&1
if %errorlevel%==0 goto :py

where python >nul 2>&1
if %errorlevel%==0 goto :python

echo Python was not found on this computer.
echo You can still open START_HERE.html directly in your browser.
pause
exit /b

:py
start "SmartCLG server" /b py -m http.server 8765
timeout /t 2 /nobreak >nul
start "" http://localhost:8765
exit /b

:python
start "SmartCLG server" /b python -m http.server 8765
timeout /t 2 /nobreak >nul
start "" http://localhost:8765
exit /b
