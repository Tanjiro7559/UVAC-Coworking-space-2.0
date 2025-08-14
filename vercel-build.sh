#!/bin/bash

# Exit on error
set -e

echo "=== Starting Vercel Build ==="

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the client
echo "Building client..."
cd client
npm install
npm run build
cd ..

# Build the server
echo "Building server..."
cd server
npm install
npm run build
cd ..

echo "=== Build completed successfully ==="
