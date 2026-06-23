# Lingua 🌍🦉

Lingua is a Duolingo-inspired AI language learning mobile application built with React Native and Expo. It teaches users new languages through interactive lessons, AI-powered tutors, and gamified progress tracking.

This project is built to demonstrate how to implement a modern AI-powered mobile app feature by feature.

## Features ✨

- **AI Teacher Lessons**: Video-based interactive lessons powered by Stream Vision Agents.
- **Audio Lessons**: Practice pronunciation and listening skills.
- **Chat-based AI Tutor**: Real-time conversation practice.
- **Vocabulary Review**: Interactive flashcards and quizzes.
- **Gamification**: Local XP tracking, lesson completion streaks, and playful UI.
- **Language Selection**: Choose from multiple languages to learn.
- **Beautiful Mobile-first UI**: Designed with modern mobile aesthetics using NativeWind.

## Tech Stack 🛠️

- **Framework**: [Expo](https://expo.dev/) & [React Native](https://reactnative.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/)
- **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Local Storage**: [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Video & Real-time**: [Stream](https://getstream.io/) / GetStream
- **AI Integration**: Stream Vision Agents

## Getting Started 🚀

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn
- Expo Go app on your physical device, or an iOS Simulator / Android Emulator.

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lingua
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add the required keys:
   ```env
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   EXPO_PUBLIC_POSTHOG_API_KEY=your_posthog_key
   EXPO_PUBLIC_POSTHOG_HOST=your_posthog_host
   STREAM_API_KEY=your_stream_key
   STREAM_API_SECRET_KEY=your_stream_secret
   ```

4. **Start the development server**
   ```bash
   npx expo start
   ```

## Development Philosophy 💡

Lingua is designed as a practical learning project. 
- **Simplicity First**: Code is kept clean, readable, and easy to explain.
- **Feature by Feature**: Built progressively without overengineering.
- **Pixel-Perfect UI**: The design emphasizes a playful, polished, and friendly mobile experience.

## Contributing 🤝

Contributions are welcome! If you'd like to improve the app, please check out the issues or submit a pull request. Make sure to follow the existing coding style and run linting/typechecking before submitting:

```bash
npm run lint
npm run typecheck
```

## License 📄

This project is licensed under the MIT License.
