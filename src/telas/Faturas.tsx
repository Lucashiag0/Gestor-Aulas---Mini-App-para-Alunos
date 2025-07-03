import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Text, Button, Dialog, Portal } from 'react-native-paper';
// A linha abaixo foi corrigida. Agora importamos apenas o array de dados.
import { faturas } from '../dados/faturas'; 
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navegacao/AppNavegacao';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = NativeStackScreenProps<RootStackParamList, 'Faturas'>;

// Cores para manter a consistência visual
const cores = {
  background: '#F3F4F6',
  textoPrincipal: '#1F2937',
  textoSecundario: '#6B7280',
  branco: '#FFFFFF',
  primaria: '#4F46E5',
  paga: '#10B981', // Verde
  pendente: '#F97316', // Laranja
};

// --- CORREÇÃO AQUI ---
// Definimos o que é uma 'Fatura' diretamente neste arquivo.
interface Fatura {
    id: string;
    turma: string;
    valor: number;
    vencimento: string;
    status: string;
}

interface FaturaCardProps {
  item: Fatura;
  onPagarPress: (id: string) => void;
}

const FaturaCard = ({ item, onPagarPress }: FaturaCardProps) => (
  <Card style={estilos.card}>
    <Card.Content>
      <View style={estilos.cardHeader}>
        <Text style={estilos.cardTitle}>{item.turma}</Text>
        <View style={[estilos.statusBadge, { backgroundColor: item.status === 'paga' ? cores.paga : cores.pendente }]}>
          <Text style={estilos.statusTexto}>{item.status}</Text>
        </View>
      </View>
      <View style={estilos.cardBody}>
        <Text style={estilos.infoText}>Valor: R$ {item.valor.toFixed(2)}</Text>
        <Text style={estilos.infoText}>Vencimento: {item.vencimento}</Text>
      </View>
      {item.status === 'pendente' && (
        <Button
          mode="contained"
          onPress={() => onPagarPress(item.id)}
          style={estilos.botaoPagar}
          labelStyle={{ fontWeight: 'bold' }}
          icon="currency-usd"
        >
          Pagar Agora
        </Button>
      )}
    </Card.Content>
  </Card>
);

export default function Faturas({}: Props) {
  const [visivel, setVisivel] = useState(false);
  const [faturaSelecionada, setFaturaSelecionada] = useState<Fatura | null>(null);

  const abrirModal = (id: string) => {
    const fatura = faturas.find(f => f.id === id);
    if (fatura) {
        setFaturaSelecionada(fatura);
        setVisivel(true);
    }
  };

  const fecharModal = () => {
    setFaturaSelecionada(null);
    setVisivel(false);
  };

  return (
    <View style={estilos.container}>
      <FlatList<Fatura>
        data={faturas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FaturaCard item={item} onPagarPress={abrirModal} />
        )}
        ListHeaderComponent={
          <Text style={estilos.headerTitle}>Pagamentos</Text>
        }
        contentContainerStyle={estilos.listContainer}
      />

      <Portal>
        <Dialog visible={visivel} onDismiss={fecharModal} style={estilos.dialog}>
          <Dialog.Icon icon="check-circle" size={48} color={cores.paga} />
          <Dialog.Title style={estilos.dialogTitle}>Pagamento Confirmado!</Dialog.Title>
          <Dialog.Content>
            <Text style={estilos.dialogText}>
              O pagamento da fatura para a turma "{faturaSelecionada?.turma}" foi simulado com sucesso.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={fecharModal} textColor={cores.primaria} labelStyle={{fontWeight: 'bold'}}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.background,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: cores.textoPrincipal,
    paddingBottom: 16,
    paddingTop: 8,
  },
  listContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  card: {
    marginBottom: 16,
    backgroundColor: cores.branco,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: cores.textoPrincipal,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusTexto: {
    color: cores.branco,
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  cardBody: {
    marginBottom: 16,
  },
  infoText: {
    fontSize: 16,
    color: cores.textoSecundario,
    lineHeight: 24,
  },
  botaoPagar: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: cores.primaria,
  },
  // Estilos do Modal (Dialog)
  dialog: {
    backgroundColor: cores.branco,
    borderRadius: 16,
  },
  dialogTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: cores.textoPrincipal,
  },
  dialogText: {
    fontSize: 16,
    textAlign: 'center',
    color: cores.textoSecundario,
    lineHeight: 24,
  },
});
