import React from 'react';
import NavigationApp from './src/navigations/NavigationsApp';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  SplashScreen.preventAutoHideAsync()
  setTimeout(async () => {
    await SplashScreen.hideAsync();
  }, 2000);
  return (
    <NavigationApp />
  );
}
