# Blank React Native Project
## React Native Project with the implementation of standard third-party libraries
### Features

React Native Project with the implementation of standard third-party libraries:
 - React Native Navigation WIX
 - React Native Navigation Hooks WIX
 - UI Library WIX
 - SizeMatters
 - Reanimated
 - React Native Gesture Handler
 - React Native Blur
 - DotEnv
 - Patch Package
 - Net Info
 - Picker
 - Date Picker
 - React Native Testing Library

> Also, was fixed the problem with running the project on XCode 14.3
> Fixed the problem with running automatic tests on jest on React Native(regarding third-party libraries)
> Fixed the problem with ESlint

This project was created for forking and using any projects like the start platform for following projects from scratch

### Useful Scripts and Implemented Commands

Running current project on Android devices:

```sh
yarn android
```

Reverse port 8081 on Android(required for launching current project in debug mode):

```sh
yarn android:adb
```

Create an Android build:

```sh
yarn android:release
```

Running current project on IOS devices:

```sh
yarn ios
```

Reupdate Pods:

```sh
yarn ios:pods:ru
```

Create IOS build:

```sh
yarn ios:release
```

Rename Project:

```sh
yarn rename
```

ESlint checking:

```sh
yarn lint
```

Running automatic tests(must be into __test__ folder):

```sh
yarn test
```
Make patches for node_modules:

```sh
yarn postinstall
```

Prettier checking:

```sh
yarn format
```

Prettier checking and saving changes:

```sh
yarn format:write
```


Clearing Node Modules Cache:

```sh
yarn clear:native:cache
```

Reinstall current Project(Node_Modules, Gradly Sync, Pods reinstall):

```sh
yarn reinstall:project
```

Reinstall only IOS Part:

```sh
yarn reinstall:ios
```

Reinstall only Android Part:

```sh
yarn reinstall:android
```