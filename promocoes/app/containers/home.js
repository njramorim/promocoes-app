//chama dependencias
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  Picker,
  TextInput
} from 'react-native';

//actions
import { Actions } from 'react-native-router-flux';

//estilos
import * as styles from './../styles/default'

//elementos
import SelectBox from './../components/select-box'

//cria container Login e o exporta
export default class Home extends Component{
  //define props/states do componente Login
  constructor(props) {
      super(props)
      this.state = {
        logado: true,
        username: '',
        password: '',
        isLoading: false,
        error: false,
        componentName: 'Init'
      }
  }

  handleNextPress() {
    Actions.map({text: 'Hello Map!'})
  }

  toggleMenu() {
    Actions.refresh({key: 'drawer', open: value => !value });
  }

  //marcacao que sera renderizada
  render() {
    return(
      <View style = {styles.fullContainer}>
        <SelectBox />
      </View>
    )
  }
}


/*
<Text onPress={this.handleNextPress.bind(this)} style = {styles.title}> Go to Map </Text>

*/
