#!/bin/bash
echo "Clearing android gradle is starting..."
cd android
rm -rf .gradle
rm -rf build
# rm -rf .idea need useing some flag
rm -rf app/build
rm -rf ~/.gradle
./gradlew clean
./gradlew build
./gradlew tasks --all
cd ..
echo "Clearing android gradle is finishing"