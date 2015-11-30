#!/bin/bash

if [ ! -f package.json ]; then
    npm init
fi
# this is the npm install commands I used to create this environment
# sudo npm install --save browserify reactify vinyl-source-stream bootstrap jquery gulp gulp-open gulp-concat gulp-connect gulp-eslint react react-router flux history@^1.12.0 lodash

sudo npm install --save bootstrap \
browserify@^11.0.1 \
flux@^2.0.3 \
gulp@^3.9.0 \
gulp-concat@^2.6.0 \
gulp-connect@^2.2.0 \
gulp-eslint@^0.15.0 \
gulp-open@^1.0.0 \
jquery@^2.1.4 \
lodash@^3.10.1 \
react@^0.13.3 \
react-router@^0.13.3 \
reactify@^1.1.1 \
toastr@^2.1.0 \
vinyl-source-stream@^1.1.0 \
