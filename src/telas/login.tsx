import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navegacao/AppNavegacao';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({ navigation }: Props) {
  return (
    <View style={estilos.container}>
      <Text variant="headlineMedium" style={estilos.titulo}>
        Gestor Aulas
      </Text>

      <TextInput
        label="E-mail"
        mode="outlined"
        style={estilos.input}
      />
      <TextInput
        label="Senha"
        mode="outlined"
        secureTextEntry
        style={estilos.input}
      />

      <Button mode="contained" onPress={() => navigation.navigate('Painel')}>
        Entrar
      </Button>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#5779',
  },
  titulo: {
    marginBottom: 40,
    textAlign: 'center',
    color: 'white',
  },
  input: {
    marginBottom: 15,
  },
});