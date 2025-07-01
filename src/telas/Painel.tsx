import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navegacao/AppNavegacao';

type Props = NativeStackScreenProps<RootStackParamList, 'Painel'>;

export default function Painel({ navigation }: Props) {
  const nomeAluno = 'Lucas';
  const proximaAula = {
    turma: 'Matemática Básica',
    horario: 'Segunda-feira, 18h',
    local: 'Sala 03',
  };

  const faturasPendentes = 2;

  return (
    <View style={estilos.container}>
      <Text variant="headlineSmall" style={estilos.saudacao}>
        Olá, {nomeAluno}!
      </Text>

      <Card style={estilos.card}>
        <Card.Title title="Próxima Aula" />
        <Card.Content>
          <Text>Turma: {proximaAula.turma}</Text>
          <Text>Horário: {proximaAula.horario}</Text>
          <Text>Local: {proximaAula.local}</Text>
        </Card.Content>
      </Card>

      <Card style={estilos.card}>
        <Card.Title title="Faturas Pendentes" />
        <Card.Content>
          <Text>Total: {faturasPendentes}</Text>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        style={estilos.botao}
        onPress={() => navigation.navigate('Turmas')}
      >
        Ver Minhas Turmas
      </Button>

      <Button
        mode="outlined"
        style={estilos.botao}
        onPress={() => navigation.navigate('Faturas')}
      >
        Ver Pagamentos
      </Button>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
  saudacao: {
    marginBottom: 24,
  },
  card: {
    marginBottom: 16,
  },
  botao: {
    marginTop: 8,
  },
});
