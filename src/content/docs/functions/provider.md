---
title: State management
description: Some description
---
As explained in Flutter docs, consider state as "whatever data you need in order to rebuild your UI at any moment in time". 
State management refers to the way you manage the state of your application. It is required to share data across different parts of the app. In Flutter, state management is crucial because it helps you manage the state of your widgets and ensures that your UI updates in response to state changes.

Flutter builds its user interface to reflect the current state of your app:
![State management](../../../assets/flutter-ui.png)

## Provider Package
The Provider package is a popular state management solution in Flutter. It allows you to manage and propagate state across your application efficiently. It uses the ChangeNotifier class to notify listeners about state changes, which then rebuilds the UI accordingly.

#### How it works?
1. **Data Model:** The data model represents the state that you want to manage and share across your application. It contains the data and logic to update the state.
2. **ChangeNotifier Class:** The ChangeNotifier class is a part of the Flutter framework that provides a simple way to manage state. It extends the ChangeNotifier class to provide the ability to notify listeners about state changes.
3. **Notify Listeners:** When the state changes, the ChangeNotifier class calls the `notifyListeners()` method to notify all registered listeners. This triggers a rebuild of the UI components that are listening to the state.
4. **Consumer:** The Consumer widget listens to changes in the state and rebuilds the UI accordingly. It helps to optimize the performance by rebuilding only the specific parts of the UI that depend on the state.
5. **ChangeNotifierProvider:** The ChangeNotifierProvider widget provides an instance of the ChangeNotifier class to the widget tree, making it available to all descendant widgets.

## Code up
1. Add `provider` dependency to `pubspec.yaml`
2. Create a class/object to represent the state. Examples:
    - `ThemeData` contains the theme data (light or dark).
    - `CartItem` contains the cart item data (product, quantity and method to update the quantity).
    - `Auth` contains the authentication data of the user. This is already defined by `firebase_auth` package.
3. Create provider class that extends `ChangeNotifier` class. It extends `ChangeNotifier` to provide the ability to notify listeners about state changes.
    - `ThemeProvider` class manages the theme state (`ThemeData`)
    - `CartProvider` class manages the shopping cart state (`Map<String, CartItem> _itemsMap`)
    - `UserAuthProvider` class manages the authentication state (`Auth`) by using `AuthService` to get the current user's authentication state.
4. Create a ChangeNotifierProvider widget
5. Use a Consumer widget to build the UI
## Summary
1. State Management: Managing the state of your application to ensure the UI updates in response to state changes.
2. Provider Package: A popular state management solution in Flutter using ChangeNotifier to notify listeners about state changes.
3. ThemeProvider: Manages the theme state, allowing toggling between light and dark modes.
4. CartProvider: Manages the state of the shopping cart.
5. AuthProvider: Manages the authentication state

## Reference
1. https://docs.flutter.dev/data-and-backend/state-mgmt/intro