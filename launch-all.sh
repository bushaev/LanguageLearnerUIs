#!/bin/bash

# Launch all 6 React apps in parallel

echo "🚀 Launching all Language Learning Reader prototypes..."
echo ""

# Array of app directories
apps=("zen-reader" "scholar" "editorial" "neon" "vintage" "lexicon")
ports=("5174" "5176" "5175" "5178" "5177" "5179")

# Launch each app in background
for i in "${!apps[@]}"; do
  app="${apps[$i]}"
  port="${ports[$i]}"

  if [ -d "$app" ]; then
    echo "📱 Starting $app on port $port..."
    (cd "$app" && npm run dev) &
  else
    echo "⚠️  Directory $app not found, skipping..."
  fi
done

echo ""
echo "✅ All apps launched!"
echo ""
echo "📊 Running apps:"
echo "  • Zen Reader:  http://localhost:5174"
echo "  • Scholar:     http://localhost:5176"
echo "  • Editorial:   http://localhost:5175"
echo "  • Neon:        http://localhost:5178"
echo "  • Vintage:     http://localhost:5177"
echo "  • Lexicon:     http://localhost:5179"
echo ""
echo "Press Ctrl+C to stop all servers"

# Wait for all background processes
wait
