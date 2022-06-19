#!/bin/bash

ENABLE_CSP=true
if [ $ENABLE_CSP ]
then ./cspCompliance.sh && npm run start
else npm run start
fi