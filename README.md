Push Notification App – React Native + Firebase (FCM)

📱 Project Overview

This project is a simple React Native app that demonstrates **Firebase Cloud Messaging (FCM)** push notifications using `@react-native-firebase/messaging`. When the app is launched, it requests notification permissions, retrieves the device's FCM token, and listens for foreground push messages.

## Features

- Request and display FCM token on app start.
- Handle incoming notifications in the foreground with `Alert.alert`.
- Integrated with Firebase using `google-services.json`.

## Tech Stack

- React Native (v0.80)
- TypeScript
- Firebase Cloud Messaging (FCM)
- Android Emulator (Pixel 7a)
- Firebase Console

## Setup Instructions

1. Clone or unzip the project folder.

2. Install dependencies.

3. Run the Android app.

4. Allow permissions and note the FCM token in the terminal output or log.

## How to Test Notifications

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Navigate to:
3. Paste the FCM token retrieved from the app.
4. Send a test push message like:
- Title: "Hello"
- Body: "This is a test message"

5. You will see a pop-up notification in the emulator/app with the title.

## Demo Video

A demo video ("Demo_Video.mp4") is included in this submission, showcasing:
- App launch
- FCM token generation
- Firebase Console message sending
- Notification popup on emulator

## Folder Contents

- 'PushNotifApp/' – Full React Native project
- 'README.txt' – This file
- 'Demo_Video.mp4' – App demonstration

##  Notes

- Ensure you are using **JDK 17**.
- 'google-services.json' is placed under 'android/app/' correctly.
- The app only handles **foreground notifications**.
