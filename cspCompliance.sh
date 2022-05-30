#!/bin/bash
BUNDLED_CSS_FILENAME=$(find ./build -type f -name bundle.\*.css -exec basename {} \;)

touch ./build/csp-compliance.js
echo "
window.onload = () => {
  document
    .getElementsByTagName('head')[0]
    .insertAdjacentHTML(
      'beforeend',
      '<link rel="stylesheet" href="$BUNDLED_CSS_FILENAME" media="all" />'
    );
  this.media = 'all';
};
" >> ./build/csp-compliance.js

REPLACE_INLINE_STYLE="<style>.*</style>"
WITH_CSP_COMPLIANT="<script src='./csp-compliance.js' defer='defer'></script>"
sed -i "s#$REPLACE_INLINE_STYLE#$WITH_CSP_COMPLIANT#g" ./build/index.html

