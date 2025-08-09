#!/bin/bash

# Navigate to the app directory
cd "$HOME/site/wwwroot"

# Install dependencies
echo "Installing Node.js dependencies..."
npm install

# Build the app
echo "Running 'next build'..."
npm run build

# Start the app
echo "Starting server with 'npm start'..."
npm start