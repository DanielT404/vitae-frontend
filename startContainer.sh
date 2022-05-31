#!/bin/bash
ENABLE_CSP=true

#build app
npm run build

if $ENABLE_CSP
then /bin/bash -c ./cspCompliance.sh && npm run start ;
else /bin/bash -c npm run start
fi
