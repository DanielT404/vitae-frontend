#!/bin/bash
BUNDLED_CSS_FILENAME=$(find ./build -type f -name bundle.\*.css -exec basename {} \;)

touch ./build/csp-compliance.js
echo "
function insertCss() {
  document
    .getElementsByTagName('head')[0]
    .insertAdjacentHTML(
      'beforeend',
      '<link rel="preload" href="$BUNDLED_CSS_FILENAME" media="all" as="style" />'
    );
}
if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', insertCss);
}
else if(document.readyState === 'interactive' || document.readyState === 'complete') {
  insertCss();
}
" >> ./build/csp-compliance.js

REPLACE_INLINE_STYLE="<style>.*</style>"
WITH_CSP_COMPLIANT="<script src='./csp-compliance.js' defer='defer'></script>"
sed -i "s#$REPLACE_INLINE_STYLE#$WITH_CSP_COMPLIANT#g" ./build/index.html

