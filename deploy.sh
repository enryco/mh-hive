#!bin/bash
ORANGE='\033[0;33m'
NC='\033[0m' # No Color

# remove maps
rm `find ./build/static/js -name '*.map'`
rm `find ./build/static/css -name '*.map'`

# insert new build paths
MAIN_JS=$(basename $(find ./build/static/js -name '*.js'))
MAIN_CSS=$(basename $(find ./build/static/css -name '*.css'))
cp ./wordpress/mh_hive/mh-hive_base.php ./wordpress/mh_hive/mh-hive.php
sed -i '' "s/\$main_script = \"\";/\$main_script = \"$MAIN_JS\";/g" ./wordpress/mh_hive/mh-hive.php
sed -i '' "s/\$main_css = \"\";/\$main_css = \"$MAIN_CSS\";/g" ./wordpress/mh_hive/mh-hive.php

# deploy build
firebase deploy
