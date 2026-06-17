#!/bin/bash
# Usage: ./ship.sh "Your commit message"
set -e

if [ -z "$1" ]; then
  echo "Usage: ./ship.sh \"commit message\""
  exit 1
fi

echo "→ Staging all changes..."
git add -A

echo "→ Committing..."
git commit -m "$1"

echo "→ Building..."
npm run build

echo "→ Deploying to Cloudflare Pages..."
npx wrangler pages deploy out/ --project-name=vanessa-portfolio

echo "✓ Done — committed and deployed."
