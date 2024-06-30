--- 
title: Get Started
description: Learn how to get started with Flutter Starter Kit
---

Welcome to the fam!

## Who is this for?

Devs who want to use **Flutter + Firebase** tech stack to build mobile apps faster.

This will allow you to worry less about must-haves for any apps, like - user authentication flow, payment integration, email support and focus more on the core business logic of their application.

## Project Structure

📝 **pubspec.yaml**: This file contains all the project related details like name, description, dependencies, SDK version, assets used in project, etc. If you're from web background, consider this similar to `package.json`

📁 **lib:** This folder contains all the project related Dart code - app pages, components, state management, services to interact with Firebase, Stripe, Mailgun, etc. 

<div style="display: flex; align-items: flex-start;">
  <div style="flex: 1; padding-right: 20px;">
    <ul>
      <li><code>/pages</code>: This folder contains all the pages(screens) of the app. Example: Login page, Home page, Profile page, etc.</li>
      <li><code>/components</code>: Components are reusable UI parts of the app. They can be used across multiple pages. Example: buttons, sliders, text input field, cards, etc.</li>
      <li><code>/models</code>: Models are classes that define the structure of the data. It is used to validate we expect to receive from any service and also to define the structure of the data we are sending to any service. Example: User model, product model, etc.</li>
      <li><code>/services</code>: Service classes contain the code to interact with Firebase, Stripe, Mailgun, etc. Example: Auth service, Firestore service, etc.</li>
      <li><code>/theme</code>: This folder contains all the theme related code of the app. Example: Colors, Fonts, etc.</li>
    </ul>
  </div>
  <div style="flex: 1;">
    <img src="../../public/project-structure.png" alt="Project Structure" style="max-width: 100%;" />
  </div>
</div>
