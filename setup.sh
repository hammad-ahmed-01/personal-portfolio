#!/bin/bash

echo "🚀 Setting up Hammad Ahmed's Portfolio..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! You can now run:"
    echo "   npm run dev    # Start development server"
    echo "   npm run build  # Build for production"
    echo "   npm start      # Start production server"
    echo ""
    echo "🌐 Your portfolio will be available at: http://localhost:3000"
else
    echo "❌ Failed to install dependencies. Please check the error messages above."
    exit 1
fi
