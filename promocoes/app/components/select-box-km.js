//chama dependencias
import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';


//estilos
import * as styles from './../styles/default'
import * as guide from './../styles/guide'
const gCor = guide.appColors

//url e rotas
const url = 'http://localhost/server/'


//exibe opcoes de KM
export default class KmSelectOptions extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <TouchableOpacity activeOpacity={0.9}
          onPress={this.props.passaValor}
          style={[styles.kmSelectContainer, styles.kmSelectOption, this.props.stylers]}>
          <Text style={[styles.selectText, styles.kmSelectText, styles.kmSelectTextOption]}>
            {this.props.valor}
            <Text style={{fontSize: 20}}> km</Text>
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
