#!/bin/bash

cd /vercel/share/v0-project

# Configure git
git config user.name "v0[bot]"
git config user.email "v0[bot]@users.noreply.github.com"

# Add all changes
git add -A

# Commit changes
git commit -m "Fix: Remove PhilosophySection, add scroll animations, improve carousel design

- Removed duplicate PhilosophySection and moved ExperiencesSection to 2nd position
- Replaced boxy carousel with elegant frosted glass design
- Added subtle fade-up scroll animations to page elements
- Fixed TypeScript baseUrl deprecation warning
- Updated RoomBookingModal carousel with improved arrow buttons"

# Push to the what-happened branch
git push origin what-happened

echo "Changes committed and pushed successfully!"
