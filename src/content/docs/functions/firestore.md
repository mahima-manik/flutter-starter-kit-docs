---
title: Storage in Flutter
description: Some description
---
Firebase offers a variety of storage options for Flutter apps. The most commonly used are Firebase Storage and Cloud Firestore.

- Firebase Storage: Used for storing files which can be images, videos, audio, and more. They are usually not changed often.
- Cloud Firestore: Used for storing structured data which can be used to create a NoSQL database.

## Cloud Firestore
You need to follow steps [here](https://firebase.google.com/docs/firestore/quickstart#dart) to get started. You should create Cloud Firestore in Firebase Console first.

Pay attention to Cloud Firestore rules. Here is the one to allow read operation for everyone:
```json
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
    }
  }
}
```

## Firebase Storage
