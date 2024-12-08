# Welcome to NovaDaily - Your new daily journaling log.

# Run Program

1. Open REACT_NATIVE_CRASH_COURSE in VSC.

2. Open Terminal 1 - REACT NATIVE TSX Frontend
   run "npx expo start -c" in the terminal.

3. Open Terminal 2 side by side - Python FLASK Backend Implementation
   run "python app.py"

4. Scan QR code for EXPO GO app or visit the url for pc.



# Basic structure

1. User creates entry on frontend. Hits submits. Terminal 1.

2. Submit button triggers data packets to be redirected locally to a different port
                  [would be a separate server eventually]
   that runs the calculations. Terminal 1 --> Terminal 2

3. Server performs calculations and return data packets back to client (currently local routing) Terminal 2 --> Terminal 1.

4. Displays results on clients end. Terminal 1.







# ============== AUTO-GENERATED BELOW =================
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
