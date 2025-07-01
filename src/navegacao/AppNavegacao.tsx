import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../telas/login';
import Painel from '../telas/Painel';
import Turmas from '../telas/Turmas';
import DetalhesTurma from '../telas/DetalhesTurma';
import Faturas from '../telas/Faturas';

export type RootStackParamList = {
  Login: undefined;
  Painel: undefined;
  Turmas: undefined;
  DetalhesTurma: { id: string };
  Faturas: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();



export default function AppNavegacao() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Painel" component={Painel} />
        <Stack.Screen name="Turmas" component={Turmas} />
        <Stack.Screen name="DetalhesTurma" component={DetalhesTurma} />
        <Stack.Screen name="Faturas" component={Faturas} />
        {/* as outras telas virão aqui depois */}
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
  
}
