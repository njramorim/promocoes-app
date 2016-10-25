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



//exibe opcoes de Tipo de Busca
export default class BuscarPromosBtn extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.area2}>
        <TouchableOpacity  activeOpacity={0.75}  style={styles.bigButton}>
          <Text style={styles.bigButtonText}>
            {this.props.buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
