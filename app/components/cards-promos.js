//chama dependencias
import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native';

//estilos
import * as styles from './../styles/default'
import * as guide from './../styles/guide'
const gCor = guide.appColors

//url e rotas
const url = 'http://localhost/server/'



//exibe cards das promos
export default class CardsPromos extends Component{
  constructor(props) {
    super(props)
  }

  _pegaItens() {
    let itens = []
    let imgName = require('./../images/icon-img.jpg')
    let text = 'Almoço grátis! Junte 10 cupons para ganhar. '
    numeroItens = 55

    for (var i=0; i < numeroItens; i++) {
        itens.push(
          <CardPromoItem
            key={i}
            img={imgName}
            desc={text + i}
          />
        );
    }
    return itens

  }

  render() {
    return(
      <View style={[styles.cardPromoWrap]}>
        <ScrollView style={styles.cardScrollView}>
          <View style={styles.cardPromoGallery}>
            {this._pegaItens()}
          </View>
        </ScrollView>
      </View>

    )
  }
}



class CardPromoItem extends Component{
  render() {
    return (
        <TouchableOpacity style={styles.cardPromoItem}>
          <Image source={this.props.img} />
          <Text style={styles.cardPromoItemText}>
            {this.props.desc}
          </Text>
        </TouchableOpacity>
    )
  }

}
