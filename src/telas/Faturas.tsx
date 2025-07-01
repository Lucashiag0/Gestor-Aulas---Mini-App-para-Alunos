import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Dialog, Portal } from 'react-native-paper';
import { faturas } from '../dados/faturas';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navegacao/AppNavegacao';

type Props = NativeStackScreenProps<RootStackParamList, 'Faturas'>;

export default function Faturas({}: Props) {
  const [visivel, setVisivel] = useState(false);
  const [faturaSelecionada, setFaturaSelecionada] = useState<string | null>(null);

  const abrirModal = (id: string) => {
    setFaturaSelecionada(id);
    setVisivel(true);
  };

  const fecharModal = () => {
    setFaturaSelecionada(null);
    setVisivel(false);
  };

  return (
    <View style={estilos.container}>
      <FlatList
        data={faturas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={estilos.card}>
            <Card.Title title={item.turma} />
            <Card.Content>
              <Text>Valor: R$ {item.valor.toFixed(2)}</Text>
              <Text>Vencimento: {item.vencimento}</Text>
              <Text>Status: {item.status}</Text>
              {item.status === 'pendente' && (
                <Button mode="contained" onPress={() => abrirModal(item.id)} style={estilos.botao}>
                  Pagar
                </Button>
              )}
            </Card.Content>
          </Card>
        )}
      />

      <Portal>
        <Dialog visible={visivel} onDismiss={fecharModal}>
          <Dialog.Title>Pagamento</Dialog.Title>
          <Dialog.Content>
            <Text>Pagamento da fatura {faturaSelecionada} simulado com sucesso.</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={fecharModal}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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
  botao: {
    marginTop: 10,
  },
});
