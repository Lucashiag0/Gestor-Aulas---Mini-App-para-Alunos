import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navegacao/AppNavegacao';
import { turmas } from '../dados/turmas';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = NativeStackScreenProps<RootStackParamList, 'DetalhesTurma'>;

const cores = {
  background: '#F3F4F6',
  textoPrincipal: '#1F2937',
  textoSecundario: '#6B7280',
  branco: '#FFFFFF',
  primaria: '#4F46E5',
};

interface DetalheItemProps {
    icon: string;
    label: string;
    value: string;
}

const DetalheItem = ({ icon, label, value }: DetalheItemProps) => (
  <View style={estilos.detalheItemContainer}>
    <MaterialCommunityIcons name={icon} size={24} color={cores.primaria} style={estilos.detalheIcon} />
    <View style={estilos.detalheTextoContainer}>
      <Text style={estilos.detalheLabel}>{label}</Text>
      <Text style={estilos.detalheValor}>{value}</Text>
    </View>
  </View>
);

export default function DetalhesTurma({ route }: Props) {
  const { id } = route.params;
  const turma = turmas.find((t) => t.id === id);

  if (!turma) {
    return (
      <View style={estilos.container}>
        <Text style={estilos.notFoundText}>Turma não encontrada.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={estilos.container}>
      <View style={estilos.header}>
        <Text style={estilos.headerTitle}>{turma.nome}</Text>
      </View>

      <View style={estilos.contentCard}>
        <DetalheItem icon="account-tie-outline" label="Professor" value={turma.professor} />
        <DetalheItem icon="clock-time-four-outline" label="Horário" value={turma.horario} />


        <View style={estilos.detalheItemContainer}>
          <MaterialCommunityIcons name="text-box-outline" size={24} color={cores.primaria} style={estilos.detalheIcon} />
          <View style={estilos.detalheTextoContainer}>
            <Text style={estilos.detalheLabel}>Descrição</Text>
            <Text style={estilos.descricaoValor}>{turma.descricao}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.background,
  },
  header: {
    padding: 24,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: cores.textoPrincipal,
  },
  contentCard: {
    backgroundColor: cores.branco,
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  detalheItemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  detalheIcon: {
    marginRight: 16,
    marginTop: 4,
  },
  detalheTextoContainer: {
    flex: 1,
  },
  detalheLabel: {
    fontSize: 14,
    color: cores.textoSecundario,
    marginBottom: 4,
  },
  detalheValor: {
    fontSize: 18,
    color: cores.textoPrincipal,
    fontWeight: '500',
  },
  descricaoValor: {
    fontSize: 16,
    color: cores.textoPrincipal,
    lineHeight: 24, 
  },
  notFoundText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: cores.textoSecundario,
  },
});
