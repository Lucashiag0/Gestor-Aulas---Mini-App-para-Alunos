import React from 'react';
import AppNavegacao from '../navegacao/AppNavegacao';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <AppNavegacao />
    </PaperProvider>
  );
}