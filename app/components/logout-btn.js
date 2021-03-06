//chama dependencias
import React, { Component } from 'react'
import {
  Text,
  TouchableHighlight
} from 'react-native'

import * as styles from './../styles/default'
import * as guide from './../styles/guide'
const gCor = guide.appColors

//cria componente LoginBtn e o exporta
export default class LogoutBtn extends Component{
  render(){
    return(
      <TouchableHighlight
        style = {styles.loginButton}
        onPress = {this.props.submitAction}
        underlayColor = {gCor.firstClean}
      >
        <Text
          style = {[styles.loginInput, styles.loginButtonText]}
        >
          Logout
        </Text>
      </TouchableHighlight>
    )
  }

}
