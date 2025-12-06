#!/bin/bash

# Build all 6 apps for GitHub Pages deployment

echo "🏗️  Building all Language Learning Reader apps for GitHub Pages..."
echo ""

apps=("zen-reader" "scholar" "editorial" "neon" "vintage" "lexicon")

# Build each app
for app in "${apps[@]}"; do
  if [ -d "$app" ]; then
    echo "🔨 Building $app..."
    (cd "$app" && npm run build)

    if [ $? -eq 0 ]; then
      echo "✅ $app built successfully"
    else
      echo "❌ $app build failed"
      exit 1
    fi
    echo ""
  else
    echo "⚠️  Directory $app not found, skipping..."
  fi
done

# Create deployment directory
echo "📦 Creating deployment directory..."
rm -rf dist
mkdir -p dist

# Copy all built apps to deployment directory
for app in "${apps[@]}"; do
  if [ -d "$app/dist" ]; then
    echo "📁 Copying $app to deployment directory..."
    cp -r "$app/dist" "dist/$app"
  fi
done

# Copy landing page (if it exists)
if [ -f "index.html" ]; then
  echo "📄 Copying landing page..."
  cp index.html dist/
fi

echo ""
echo "✅ All apps built and copied to ./dist/"
echo ""
echo "Deployment structure:"
echo "  dist/"
echo "  ├── index.html           # Landing page"
echo "  ├── zen-reader/"
echo "  ├── scholar/"
echo "  ├── editorial/"
echo "  ├── neon/"
echo "  ├── vintage/"
echo "  └── lexicon/"
echo ""
echo "Ready to deploy to GitHub Pages!"
