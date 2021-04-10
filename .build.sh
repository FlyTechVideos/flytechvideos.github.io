#!/bin/bash -e

# This script is ONLY for automatic GitHub Pages deployment.

yarn install

## Variables
export SOURCE_DATE_EPOCH=$(git log -1 --pretty=%ct)
export docroot=$(mktemp -d)

## Build
yarn run lint # Check if everything is styled correctly
yarn run build:production

## Upload to GitHub Pages
git config --global user.name "${GITHUB_ACTOR}"
git config --global user.email "${GITHUB_ACTOR}@users.noreply.github.com"
rsync -av "./public/" "$docroot/"

pushd $docroot

git init
git remote add deploy "https://token:${G_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
git checkout -b gh-pages

touch .nojekyll

cat > README.md <<EOF
# GitHub Pages data
Not much else here.
EOF

echo "flytech.video" > CNAME

git add .

msg="Build for commit ${GITHUB_SHA} made on `date -d"@${SOURCE_DATE_EPOCH}" --iso-8601=seconds` from ${GITHUB_REF} by ${GITHUB_ACTOR}"
git commit -am "$msg"

git push deploy gh-pages --force

popd
rm -rf $docroot
