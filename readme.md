## How to clean

cd android
./gradlew clean

## How to run

- cd to project folder
- npm install
- IF you use window: Open 2 terminal : 1/ npm run start 2/ npm run android

## Build apk release

- cd android
- ./gradlew assembleRelease
- File apk output : android/app/build/outputs/apk/release/app-release.apk

## Build aab release

- cd android
- ./gradlew bundleRelease

## Update in App code

- Cd project
- appcenter login , sau đó login trên web lấy token add vào
- release-ios : appcenter codepush release-react -a datnv.tudong-gmail.com/hosodientu-ios -d Production -t 2.0 --disable-duplicate-release-error
- release-android : appcenter codepush release-react -a datnv.tudong-gmail.com/hosodientu-android -d Production -t 1.1.4


<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>

    <application android:usesCleartextTraffic="true" tools:targetApi="28" tools:ignore="GoogleAppIndexingWarning" />
</manifest>