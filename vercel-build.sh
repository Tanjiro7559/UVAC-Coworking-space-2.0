#!/bin/bash

# Exit on error
set -e

echo "=== Starting Vercel Build ==="

# Install root dependencies
echo "Installing root dependencies..."
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

# Create output directory
mkdir -p ../.vercel/output/static

# Copy client files
cp -r ../client/dist/* ../.vercel/output/static/

# Create serverless function
echo "Creating serverless function..."
mkdir -p ../.vercel/output/functions/api
cp -r dist/* ../.vercel/output/functions/api/

# Create the function config
cat > ../.vercel/output/functions/api/index.func/.vc-config.json << 'EOL'
{
  "runtime": "nodejs18.x",
  "handler": "index.js",
  "launcherType": "Nodejs",
  "shouldAddHelpers": true
}
EOL

cd ..

echo "=== Build completed successfully ==="
