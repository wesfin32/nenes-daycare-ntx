#!/bin/bash

echo "🔧 Pushing final apostrophe fixes..."

git add .
git commit -m "Fix remaining apostrophes in contact page - final deployment fix"
git push

echo "✅ Final fixes pushed!"
echo "🚀 Vercel should now build successfully!"