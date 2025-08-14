const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('=== Starting Vercel Build ===');

function runCommand(command, cwd = '.') {
  console.log(`$ ${command}`);
  try {
    execSync(command, { stdio: 'inherit', cwd });
    return true;
  } catch (error) {
    console.error(`Error executing: ${command}`);
    process.exit(1);
  }
}

// Install root dependencies
console.log('Installing root dependencies...');
runCommand('npm install');

// Build client
console.log('Building client...');
runCommand('npm install', 'client');
runCommand('npm run build', 'client');

// Build server
console.log('Building server...');
runCommand('npm install', 'server');
runCommand('npm run build', 'server');

// Create output directories
const outputDir = path.join(process.cwd(), '.vercel', 'output');
const staticDir = path.join(outputDir, 'static');
const functionsDir = path.join(outputDir, 'functions', 'api');

fs.mkdirSync(staticDir, { recursive: true });
fs.mkdirSync(functionsDir, { recursive: true });

// Copy client files
console.log('Copying client files...');
const clientDist = path.join(process.cwd(), 'client', 'dist');
if (fs.existsSync(clientDist)) {
  const files = fs.readdirSync(clientDist);
  for (const file of files) {
    const srcPath = path.join(clientDist, file);
    const destPath = path.join(staticDir, file);
    if (fs.lstatSync(srcPath).isDirectory()) {
      fs.cpSync(srcPath, destPath, { recursive: true });
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy server files
console.log('Setting up serverless function...');
const serverDist = path.join(process.cwd(), 'server', 'dist');
if (fs.existsSync(serverDist)) {
  const files = fs.readdirSync(serverDist);
  for (const file of files) {
    const srcPath = path.join(serverDist, file);
    const destPath = path.join(functionsDir, file);
    if (fs.lstatSync(srcPath).isDirectory()) {
      fs.cpSync(srcPath, destPath, { recursive: true });
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Create Vercel function config
const functionConfig = {
  runtime: 'nodejs18.x',
  handler: 'index.js',
  launcherType: 'Nodejs',
  shouldAddHelpers: true
};

fs.mkdirSync(path.join(functionsDir, '.func'), { recursive: true });
fs.writeFileSync(
  path.join(functionsDir, '.func', 'vc-config.json'),
  JSON.stringify(functionConfig, null, 2)
);

console.log('=== Build completed successfully ===');
