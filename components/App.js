import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, YellowBox } from 'react-native';
import _ from 'lodash';
import BoardScreen from './components/BoardScreen';
import BoardDetailScreen from './components/BoardDetailScreen';
import AddBoardScreen from './components/AddBoardScreen';
import EditBoardScreen from './components/EditBoardScreen';
import MenuBoard from './components/MenuBoard';
import {Button } from 'react-native-elements';
//import EditBoardScreen from './components/EditBoardScreenRxdb';
import {decode, encode} from 'base-64';
import logo from './assets/logo.png'; 

// este código es por un bug que tiene la librería para conectarse a firestore
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

// este código es para eliminar una advertencia que aparece en la aplicación
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
}; 

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuBoard">
        <Stack.Screen name="MenuBoard" component={MenuBoard}
          options={{title: 'Inicio'}}/>
        <Stack.Screen name="Board" component={BoardScreen}
                      options={({ navigation }) => ({ 
                          title: 'Board',
                          headerRight: () => (
                            
                            <Button
                              buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
                              icon={{ name: 'add-circle', style: { marginRight: 0, fontSize: 28 } }}
                              onPress={() => { navigation.push('AddBoard') }}
                            />
                          ),
                          })} />
        <Stack.Screen name="BoardDetails" component={BoardDetailScreen} 
          options={{ title: 'Board Details' }}/>
        <Stack.Screen name="AddBoard" component={AddBoardScreen} 
          options={{ title: 'Add Board' }}/>
        <Stack.Screen name="EditBoard" component={EditBoardScreen} 
          options={{ title: 'Edit Board' }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
