#!/bin/bash
# Deploy to github pages
# v1.0.0

# VERSION=$(npm version patch)
# VERSION=$(echo $VERSION | cut -c 2-)


export $(cat ./deploy/.env | xargs)
yarn build
sls s3deploy --aws-profile pandemiia
aws cloudfront create-invalidation --profile pandemiia --distribution-id $CLOUD_FRONT --paths "/*"
./deploy/telegram.sh https://pandemiia.in.ua/