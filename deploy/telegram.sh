#!/bin/bash
# Notification in telefram about deploy
# v1.0.1

# Version key/value should be on his own line
PACKAGE_VERSION=$(node -p -e "require('./package.json').version")

TIMESTAMP=$(date +%d.%m.%Y-%H:%M:%S)

BRANCH=$(git branch | grep \* | cut -d ' ' -f2)

MESSAGE="$TIMESTAMP: Deployed branch **$BRANCH** to $1 $PACKAGE_VERSION"

URL="https://api.telegram.org/bot$TOKEN/sendMessage"


curl -s -X POST $URL -d chat_id=$DEVELOPERS_CHAT_ID -d text="$MESSAGE"