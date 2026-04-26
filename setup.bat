#!/bin/bash

@echo off
echo === Python-Abhängigkeiten installieren ===
cd python
pip install -r requirements.txt
cd ..

echo === JavaScript-Abhängigkeiten installieren ===
cd javascript
npm install
cd ..

echo === Fertig! ===
pause