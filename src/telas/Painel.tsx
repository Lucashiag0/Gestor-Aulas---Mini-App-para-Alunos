import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navegacao/AppNavegacao';
// Para os ícones, você precisará instalar a biblioteca react-native-vector-icons - npm install react-native-vector-icons -
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


type Props = NativeStackScreenProps<RootStackParamList, 'Painel'>;

const nomeAluno = 'Lucas';
const proximaAula = {
  turma: 'Matemática Básica',
  horario: 'Segunda-feira, 18h',
  local: 'Sala 03',
};
const faturasPendentes = 2;


export default function Painel({ navigation }: Props) {
  return (
    <ScrollView style={estilos.container} contentContainerStyle={estilos.scrollContainer}>
      
      <View style={estilos.header}>
        <Text style={estilos.saudacao}>Olá, {nomeAluno}!</Text>
        <Text style={estilos.subtitulo}>Que bom te ver por aqui.</Text>
      </View>

      <Card style={estilos.card}>
        <Card.Content>
            <View style={estilos.cardTitleContainer}>
                <MaterialCommunityIcons name="calendar-clock" size={24} color={cores.primaria} />
                <Text style={estilos.cardTitle}>Próxima Aula</Text>
            </View>
            <View style={estilos.cardContent}>
                <Text style={estilos.infoText}><Text style={estilos.infoLabel}>Turma:</Text> {proximaAula.turma}</Text>
                <Text style={estilos.infoText}><Text style={estilos.infoLabel}>Horário:</Text> {proximaAula.horario}</Text>
                <Text style={estilos.infoText}><Text style={estilos.infoLabel}>Local:</Text> {proximaAula.local}</Text>
            </View>
        </Card.Content>
      </Card>

      <Card style={estilos.card}>
        <Card.Content>
            <View style={estilos.cardTitleContainer}>
                <MaterialCommunityIcons name="file-document-outline" size={24} color={cores.alerta} />
                <Text style={estilos.cardTitle}>Faturas Pendentes</Text>
            </View>
            <View style={estilos.faturaCardContent}>
                <Text style={estilos.infoText}>Você possui faturas em aberto.</Text>
                <View style={estilos.faturaBadge}>
                    <Text style={estilos.faturaBadgeTexto}>{faturasPendentes}</Text>
                </View>
            </View>
        </Card.Content>
      </Card>

      
      <View style={estilos.botaoContainer}>
        <Button
          mode="contained"
          style={[estilos.botao, estilos.botaoPrincipal]}
          onPress={() => navigation.navigate('Turmas')}
          icon="arrow-right"
          contentStyle={{ flexDirection: 'row-reverse' }}
        >
          Ver Minhas Turmas
        </Button>

        <Button
          mode="outlined"
          style={[estilos.botao, estilos.botaoSecundario]}
          onPress={() => navigation.navigate('Faturas')}
          icon="arrow-right"
          textColor={cores.primaria}
          contentStyle={{ flexDirection: 'row-reverse' }}
        >
          Ver Pagamentos
        </Button>
      </View>
    </ScrollView>
  );
}


// caso queira mudar de corr
const cores = {
    background: '#F3F4F6', 
    primaria: '#4F46E5',   
    alerta: '#F97316',
    textoPrincipal: '#1F2937',
    textoSecundario: '#6B7280',
    branco: '#FFFFFF',
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.background,
  },
  scrollContainer: {
    padding: 24,
  },
  header: {
    marginBottom: 32,
  },
  saudacao: {
    fontSize: 32,
    fontWeight: 'bold',
    color: cores.textoPrincipal,
  },
  subtitulo: {
    fontSize: 18,
    color: cores.textoSecundario,
  },
  card: {
    marginBottom: 20,
    backgroundColor: cores.branco,
    borderRadius: 16, 
    elevation: 4,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: cores.textoPrincipal,
    marginLeft: 8,
  },
  cardContent: {
    paddingTop: 8,
  },
  infoText: {
    fontSize: 16,
    color: cores.textoSecundario,
    lineHeight: 24,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: cores.textoPrincipal,
  },
  faturaCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  faturaBadge: {
    backgroundColor: cores.alerta,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  faturaBadgeTexto: {
    color: cores.branco,
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoContainer: {
    marginTop: 24,
  },
  botao: {
    borderRadius: 12,
    paddingVertical: 6,
    marginBottom: 12,
  },
  botaoPrincipal: {
    backgroundColor: cores.primaria,
  },
  botaoSecundario: {
    borderColor: cores.primaria,
  },
});
