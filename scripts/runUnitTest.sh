#! /bin/bash

./scripts/runApptest.sh
node ./test/patternUtilTest.js
node ./test/patternLibTest.js
