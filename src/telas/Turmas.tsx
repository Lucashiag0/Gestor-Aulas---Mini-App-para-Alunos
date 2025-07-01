import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navegacao/AppNavegacao';
import { turmas } from '../dados/turmas';

type Props = NativeStackScreenProps<RootStackParamList, 'Turmas'>;

export default function Turmas({ navigation }: Props) {
  return (
    <View style={estilos.container}>
      <FlatList
        data={turmas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            style={estilos.card}
            onPress={() => navigation.navigate('DetalhesTurma', { id: item.id })}
          >
            <Card.Title title={item.nome} />
            <Card.Content>
              <Text>Dias: {item.dias}</Text>
              <Text>Status: {item.status}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  card: {
    marginBottom: 12,
  },
});
