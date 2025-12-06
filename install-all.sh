#!/bin/bash

# Install dependencies for all apps

echo "📦 Installing dependencies for all prototypes..."
echo ""

apps=("zen-reader" "scholar" "editorial" "neon" "vintage" "lexicon")

for app in "${apps[@]}"; do
  if [ -d "$app" ]; then
    echo "📥 Installing dependencies for $app..."
    (cd "$app" && npm install)
    echo "✅ $app dependencies installed"
    echo ""
  else
    echo "⚠️  Directory $app not found, skipping..."
  fi
done

echo "✅ All dependencies installed!"
echo ""
echo "Run './launch-all.sh' to start all apps"
