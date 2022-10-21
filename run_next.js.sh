#!/bin/sh


npm ci
npm run build
npm run export
touch ./out/.nojekyll
npm run dev


