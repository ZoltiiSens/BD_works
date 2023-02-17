#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

<<<<<<< HEAD
=======
# if you are deploying to https://<USERNAME>.github.io
#git push -f git@github.com:whtspoint.github.io.git master

>>>>>>> c8dae47 (У Сани мышцы как Вавилонская башня)
# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/ZoltiiSens/BD_works master:gh-pages

cd -
