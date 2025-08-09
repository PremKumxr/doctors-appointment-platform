#!/bin/bash

set -x  # Enable command logging

cd "$HOME/site/wwwroot"

echo "Node version:"
node -v

echo "NPM version:"
npm -v

echo "Installing dependencies..."
npm install

echo "Building app..."
npm run build

echo "Starting server..."
npm start