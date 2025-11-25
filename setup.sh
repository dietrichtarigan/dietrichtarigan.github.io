#!/bin/bash

# Portfolio GitHub Pages Setup Script
# This script helps you initialize and deploy your portfolio to GitHub Pages

echo "🚀 Portfolio GitHub Pages Setup"
echo "================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Git and Node.js are installed"
echo ""

# Get user input
read -p "Enter your GitHub username: " GITHUB_USERNAME
read -p "Enter your repository name (e.g., portfolio): " REPO_NAME

echo ""
echo "📝 Configuration:"
echo "   GitHub Username: $GITHUB_USERNAME"
echo "   Repository Name: $REPO_NAME"
echo "   Website URL: https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo ""

read -p "Is this correct? (y/n): " CONFIRM

if [ "$CONFIRM" != "y" ]; then
    echo "❌ Setup cancelled"
    exit 1
fi

echo ""
echo "🔧 Setting up Git repository..."

# Initialize git if not already
if [ ! -d .git ]; then
    git init
    echo "✅ Git initialized"
fi

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio ready for deployment"

# Rename branch to main
git branch -M main

# Add remote (remove if exists)
git remote remove origin 2> /dev/null
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

echo "✅ Git configured"
echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "🏗️  Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please check for errors."
    exit 1
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo ""
echo "1. Create a new repository on GitHub:"
echo "   → Go to https://github.com/new"
echo "   → Repository name: $REPO_NAME"
echo "   → Make it Public"
echo "   → Don't add README, .gitignore, or license"
echo "   → Click 'Create repository'"
echo ""
echo "2. Push your code:"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   → Go to https://github.com/$GITHUB_USERNAME/$REPO_NAME/settings/pages"
echo "   → Source: Select 'GitHub Actions'"
echo ""
echo "4. Wait for deployment (2-3 minutes)"
echo "   → Check progress at: https://github.com/$GITHUB_USERNAME/$REPO_NAME/actions"
echo ""
echo "5. Visit your website:"
echo "   → https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo ""
echo "🎉 Happy coding!"
