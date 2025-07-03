import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navegacao/AppNavegacao';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

// Cores para manter manutenção 
const cores = {
  primaria: '#4F46E5',
  background: '#FFFFFF',
  texto: '#1F2937',
  placeholder: '#6B7280',
  borda: '#D1D5DB',
};

export default function Login({ navigation }: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={estilos.container}
    >
      <View style={estilos.innerContainer}>
        <Text style={estilos.titulo}>
          Gestor Aulas
        </Text>
        <Text style={estilos.subtitulo}>
          Bem-vindo! Faça o login para continuar.
        </Text>

        <TextInput
          label="E-mail"
          mode="outlined"
          style={estilos.input}
          outlineColor={cores.borda}
          activeOutlineColor={cores.primaria}
          left={<TextInput.Icon icon="email-outline" />}
        />
        <TextInput
          label="Senha"
          mode="outlined"
          secureTextEntry
          style={estilos.input}
          outlineColor={cores.borda}
          activeOutlineColor={cores.primaria}
          left={<TextInput.Icon icon="lock-outline" />}
        />

        <Button
          mode="contained"
          onPress={() => navigation.navigate('Painel')}
          style={estilos.botao}
          labelStyle={estilos.botaoTexto}
        >
          Entrar
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.background,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: cores.primaria,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    color: cores.placeholder,
    marginBottom: 40,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#F9FAFB'
  },
  botao: {
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: cores.primaria,
  },
  botaoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
