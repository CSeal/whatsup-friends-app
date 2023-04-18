#!bin/bash

echo "Creating build started..."
cd android
./gradlew assembleRelease
cd ..
echo "Creating build finished"