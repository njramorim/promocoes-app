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
export default class TipoSelectOptions extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.optionListContainer}>
        <TouchableOpacity
          style={styles.optionListItem}
          onPress={this.props.passaTipo}
        >
          <Text style={styles.optionListText}>
            {this.props.esteTipo}
          </Text>
          <Image
            style={[
              styles.absolute,
              styles.optionListImg
            ]}
            source={require('./../images/icon-option-list.png')}
          />
          {this.props.children}
        </TouchableOpacity>
      </View>
    )
  }
}
