#!/bin/bash
echo "Starting Next.js app..."
cd /home/site/wwwroot
ls -la  # Debug: see what's deployed
npm install --include=dev  # Optional: ensure deps (only dev needed if .next is pushed)
npm start