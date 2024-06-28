---
title: Run the Project
description: Learn how to run the project
---

Flutter provider quite intensive guide on installation for different platforms: https://docs.flutter.dev/get-started/install

Choose your development environment and target device to get started. 

### Overview

1. Make sure you are working with system with minimum 8GB RAM, 4 core CPU and enough free disk space. This is to ensure enough resources and speed when running the project locally.
2. You need to install Git for cloning project and running some flutter commands. Here is the guide in case you need it: https://github.com/git-guides/install-git
3. Android Studio for Windows and XCode for Mac is necessary to debug and compile code. CocoaPods are additionally required for iOS.
4. Download Flutter SDK and add it to the PATH. For Mac, CocoaPods is also required in the PATH.
5. Download the device emulators for Android/iOS to run the code locally.
6. Download your favourite IDE: VSCode or Cursor or Android Studio. I encourage you to try Cursor IDE. 

### Verify Installation

Whether you followed Windows/Mac setup, run `flutter doctor` to verify that flutter is setup correctly. Don’t worry - everything may not be check for you. It depends on the development environment you have chosen.

![Screenshot 2024-06-27 at 1.25.40 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/15829d13-6887-445c-bf7c-475c31411b7d/d443d919-53d6-44ec-8658-bf69a5e0a114/Screenshot_2024-06-27_at_1.25.40_PM.png)

### Start with Flutter Dev Kit

1. Go to the directory where you want to place your project.
    
    ```bash
    git clone https://github.com/mahima-manik/flutter-starter-kit.git
    cd flutter-starter-kit
    ```
    

1. To download all project dependencies listed in `pubspec.yaml`, run this:
    
    ```bash
    flutter pub get
    ```
    
    Notice it will generate `build/` folder in project root directory
    
2. Select a device from bottom-right corner of your VSCode editor. 
    
    ![Screenshot 2024-06-27 at 1.40.16 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/15829d13-6887-445c-bf7c-475c31411b7d/4269c8c6-19f2-40a7-a258-21c1ed192f82/6b73c6c1-8dc7-482d-821d-8f7346af4238.png)
    
3. Go to `lib/main.dart` , you will see a debug and run button on top-right corner of IDE. It performs the build, installs and run the application on selected device.
    
    ![Run button on top-right](https://prod-files-secure.s3.us-west-2.amazonaws.com/15829d13-6887-445c-bf7c-475c31411b7d/ae8b74e8-2fef-431e-a8f1-db36b848e598/Screenshot_2024-06-27_at_2.26.36_PM.png)
    
    Run button on top-right
    
    Or you can run using the command: 
    
    ```bash
    flutter run
    ```
    
    ![Screenshot 2024-06-27 at 2.25.07 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/15829d13-6887-445c-bf7c-475c31411b7d/824f5898-b27a-489e-93f5-718a951f58ec/Screenshot_2024-06-27_at_2.25.07_PM.png)
    

Congratulations! 🥳 You have successfully run the project! Now we will make it feature rich step by step.
