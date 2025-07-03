import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navegacao/AppNavegacao';
import { turmas } from '../dados/turmas'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = NativeStackScreenProps<RootStackParamList, 'Turmas'>;

const cores = {
  background: '#F3F4F6',
  textoPrincipal: '#1F2937',
  textoSecundario: '#6B7280',
  branco: '#FFFFFF',
  ativo: '#10B981', 
  inativo: '#EF4444',
  borda: '#E5E7EB',
};

// Definido a Stringo, e que é uma 'Turma' diretamente neste arquivo.
interface Turma {
    id: string;
    nome: string;
    dias: string;
    status: string;
}

interface TurmaCardProps {
  item: Turma;
  onPress: () => void;
}

const TurmaCard = ({ item, onPress }: TurmaCardProps) => (
  <Card style={estilos.card} onPress={onPress}>
    <Card.Content style={estilos.cardContent}>
      <View style={estilos.cardInfo}>
        <Text style={estilos.cardTitle}>{item.nome}</Text>
        <Text style={estilos.cardSubtitle}>Dias: {item.dias}</Text>
      </View>
      <View style={[estilos.statusBadge, { backgroundColor: item.status === 'ativa' ? cores.ativo : cores.inativo }]}>
        <Text style={estilos.statusTexto}>{item.status}</Text>
      </View>
      <MaterialCommunityIcons name="chevron-right" size={24} color={cores.textoSecundario} />
    </Card.Content>
  </Card>
);

export default function Turmas({ navigation }: Props) {
  return (
    <View style={estilos.container}>
      <FlatList<Turma>
        data={turmas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TurmaCard
            item={item}
            onPress={() => navigation.navigate('DetalhesTurma', { id: item.id })}
          />
        )}
        ListHeaderComponent={
          <Text style={estilos.headerTitle}>Minhas Turmas</Text>
        }
        contentContainerStyle={estilos.listContainer}
      />
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
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: cores.textoPrincipal,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: cores.textoSecundario,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginHorizontal: 12,
  },
  statusTexto: {
    color: cores.branco,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
