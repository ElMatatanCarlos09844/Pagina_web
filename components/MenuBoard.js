import React, { Component } from 'react';
import { Image, StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import logo from '../assets/logo.png';
import BoardScreen from './BoardScreen';
class MenuBoard extends Component {
  
  constructor() {
    super();
  }

  render() {
    return(
        <View styles = {styles.container}>
            <Text>!Bienvenid@!</Text>
            <Image source={logo} style={{width: 305, height: 159}} />
            <Button
                title= "Siguiente"
                buttonStyle={{ width: 150, height: 42, padding: 10, backgroundColor: '#5D6D7E' }}
                onPress={() => { this.props.navigation.push('Board') }}
            />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default MenuBoard;