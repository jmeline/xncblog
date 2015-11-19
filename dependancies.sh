#!/bin/bash

if [ ! -f package.json ]; then
    npm init
fi
# this is the npm install commands I used to create this environment
sudo npm install --save browserify reactify vinyl-source-stream bootstrap jquery gulp gulp-open gulp-concat gulp-connect gulp-eslint react react-router flux history@^1.12.0 lodash
