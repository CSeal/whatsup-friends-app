#!/bin/bash

echo "Clearing iOS pods is starting..."
cd ios
rm Podfile.lock
rm -rf Pods
rm -rf ./build
pod cache clean --all
rm -rf ~/.cocoapods
pod repo update
pod install
cd ..
echo "Clearing iOS pods is finishing"