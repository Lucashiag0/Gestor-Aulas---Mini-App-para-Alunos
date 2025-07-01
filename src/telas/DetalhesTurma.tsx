import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navegacao/AppNavegacao';
import { turmas } from '../dados/turmas';

type Props = NativeStackScreenProps<RootStackParamList, 'DetalhesTurma'>;

export default function DetalhesTurma({ route }: Props) {
  const { id } = route.params;

  const turma = turmas.find((t) => t.id === id);

  if (!turma) {
    return (
      <View style={estilos.container}>
        <Text>Turma não encontrada.</Text>
      </View>
    );
  }

  return (
    <View style={estilos.container}>
      <Card>
        <Card.Title title={turma.nome} />
        <Card.Content>
          <Text style={estilos.label}>Professor:</Text>
          <Text>{turma.professor}</Text>

          <Text style={estilos.label}>Horário:</Text>
          <Text>{turma.horario}</Text>

          <Text style={estilos.label}>Descrição:</Text>
          <Text>{turma.descricao}</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
  label: {
    marginTop: 12,
    fontWeight: 'bold',
  },
});
