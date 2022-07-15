#!/bin/sh
echo "PREACT_APP_MODE=$1" >> .env;
npm run dev -- -p $2;