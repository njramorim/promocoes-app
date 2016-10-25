//chama dependencias
import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

//actions
import { Actions } from 'react-native-router-flux';

//componentes
import KmSelectOptions from './select-box-km'
import TipoSelectOptions from './select-box-options'
import BuscarPromosBtn from './select-box-btn'
import CardsPromos from './cards-promos'

//estilos
import * as styles from './../styles/default'
import * as guide from './../styles/guide'
const gCor = guide.appColors

//url e rotas
const url = 'http://localhost/server/'





export default class SelectBox extends Component{
  constructor(props) {
    super(props);
    //define propriedades para exibir elementos
    //se customType for km, valorInput sera usado em busca, se for outros, valorEscolhido sera usado na busca
    this.state = {
      ultimoTipoBusca: 'name', //name,lugar,local,km
      ultimaFraseBusca: "Nome estabelecimento",
      customType: 'name',
      valorInput: "Nome estabelecimento",
      valorEscolhido: '',
      kmOpen: false,
      overlay: false,
    }
  }

  /*MUDANCAS NOS STATES*/
  /*MUDANCAS NOS STATES*/
  /*MUDANCAS NOS STATES*/

    //controllers gerais
    _screenOverlay() {
      if(this.state.overlay){
        return styles.screenOverlay
      }else{
        return styles.screenOverlayOff
      }
    }

    _customType(){
      if(this.state.customType === 'name'){
        return styles.nameSelectContainer
      }else if(this.state.customType === 'km'){
        return styles.kmSelectContainer
      }
    }

    _toggleItens(depara) {
      if(this.state.customType !== depara){
        return styles.offItem
      }
    }

    _selectTextColor() {
      let depara = this.state.customType
      if(depara  !== 'km'){
        return styles.nameSelectText

      } else {
        return styles.kmSelectText

      }
    }

    _lockInput() {
        if(this.state.customType === 'km' || this.state.customType === 'tipo')
          return false
        else return true
    }

    _selectPlaceholderColor() {
      let depara = this.state.customType
      if(depara  !== 'km'){
        return gCor.cleanDark

      } else {
        return gCor.clean

      }
    }

    _changeToEscolha(tipo, valor) {
      this.setState({
        customType: tipo,
        valorInput: valor,
        ultimoTipoBusca: tipo,
        ultimaFraseBusca: valor,
      })
    }

    _changeButtonText() {
      if(this.state.customType === 'name'){
        return 'Buscar por nome'

      }else if(this.state.customType === 'lugar'){
        return 'Buscar por lugar'

      }else if(this.state.customType === 'local'){
        return 'Buscar pela localização'

      }else if(this.state.customType === 'km'){
        return 'Buscar próximos'
      }
    }



    //controllers dos tipos de busca
    _showTiposOptions() {
      this.setState({
        customType: 'tipo',
        valorInput: "Selecione o tipo de busca",
        overlay: true,
        valorEscolhido: '',
      })
    }

    _hideTipoOptions() {
      this.setState({
        overlay: false,
        customType: this.state.ultimoTipoBusca,
        valorInput: this.state.ultimaFraseBusca,
      })
    }



    //controllers da busca por km
    _showKmOptions() {
      if(this.state.customType !== 'km'){
        this.setState({
          valorInput: "Escolha a distância",
        })
      }
      this.setState({
        customType: 'km',
        kmOpen: true,
        overlay: true,
      })
    }

    _hideKmOptions() {
      this.setState({
        customType: 'km',
        kmOpen: false,
        overlay: false,
      })
    }

    _onKmSelect(valorNow) {
      console.log('valorInput confirmada: ', valorNow);
      this.setState({
        customType: 'km',
        valorInput: valorNow,
        kmOpen: false,
        overlay: false,
      })
    }
    _goToPromoMap() {
      Actions.promomap()
    }

  /*FIM MUDANCAS NOS STATES*/
  /*FIM MUDANCAS NOS STATES*/
  /*FIM MUDANCAS NOS STATES*/

  /*INJETA ELEMENTOS*/
  /*INJETA ELEMENTOS*/
  /*INJETA ELEMENTOS*/
    //mostra as opcoes de busca
    _tipoSelectItens() {
      if (this.state.customType === 'tipo') {
        return (
          <View >
            <TouchableOpacity
              onPress={this._hideTipoOptions.bind(this)}
              style={this._screenOverlay()}
            />

            <TipoSelectOptions
              esteTipo = 'Nome do estabelecimento'
              passaTipo={this._changeToEscolha.bind(this, 'name', 'Nome do estabelecimento')}   >
              <Image
                style={[
                  styles.absolute,
                  styles.optionListImgBorder,
                ]}
                source={require('./../images/icon-option-list-border.png')}
              />
            </TipoSelectOptions>

            <TipoSelectOptions
              esteTipo = 'Tipo do estabelecimento'
              passaTipo={this._changeToEscolha.bind(this, 'lugar', 'Tipo do estabelecimento')}   >
              <Image
                style={[
                  styles.absolute,
                  styles.optionListImgBorder,
                ]}
                source={require('./../images/icon-option-list-border.png')}
              />
            </TipoSelectOptions>

            <TipoSelectOptions
              esteTipo = 'Localização do estabelecimento'
              passaTipo={this._changeToEscolha.bind(this, 'local', 'Localização do estabelecimento')}    >
              <Image
                style={[
                  styles.absolute,
                  styles.optionListImgBorder,
                ]}
                source={require('./../images/icon-option-list-border.png')}
              />
            </TipoSelectOptions>

            <TipoSelectOptions
              esteTipo = 'Estabelecimentos próximos'
              passaTipo={this._changeToEscolha.bind(this, 'km', 'Escolha a distância')}
            />
          </View>
        )
      }else{
        return null
      }
    }

    //mostra as opcoes de km
    _kmSelectItens() {
      if (this.state.kmOpen) {
        return (
          <View>
            <TouchableOpacity
              onPress={this._hideKmOptions.bind(this)}
              style={this._screenOverlay()}
            />

            <View style={styles.kmOptionsContainer}>
              <KmSelectOptions
                valor = {1}
                passaValor={this._onKmSelect.bind(this, '1 km')}
              />
              <KmSelectOptions
                valor = {2}
                stylers = {styles.kmSelectOption2}
                passaValor={this._onKmSelect.bind(this, '2 km')}
              />
              <KmSelectOptions
                valor = {3}
                passaValor={this._onKmSelect.bind(this, '3 km')}
              />
              <KmSelectOptions
                valor = {5}
                stylers = {styles.kmSelectOption2}
                passaValor={this._onKmSelect.bind(this, '5 km')}
              />
              <KmSelectOptions
                valor = {10}
                passaValor={this._onKmSelect.bind(this, '10 km')}
              />
            </View>
          </View>
        )
      } else {
          return null;
      }
    }

  /*FIM INJETA ELEMENTOS*/
  /*FIM INJETA ELEMENTOS*/
  /*FIM INJETA ELEMENTOS*/




  //todo o componente
  render() {
    return(
      <View >
        <View style={[
          styles.selectContainer,
          this._customType(),
        ]}>
          <TouchableOpacity onPress={
            this.state.customType === 'km' ? this._showKmOptions.bind(this) : null
          }>
            <TextInput
              style={[
                styles.selectText,
                this._selectTextColor()
              ]}
              editable={this._lockInput()}
              placeholder={this.state.valorInput}
              placeholderTextColor = {this._selectPlaceholderColor()}
              onChangeText={(valorEscolhido) =>this.setState({valorEscolhido})}
              value={this.state.valorEscolhido}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this._showTiposOptions.bind(this)}
            activeOpacity={0.9}
            style={[styles.absolute, styles.kmSelectImg]} >
            <Image
              source={require('./../images/icon-select-list.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this._goToPromoMap.bind(this)}
            activeOpacity={0.9}
            style={[styles.absolute, styles.kmSelectImg2, this._toggleItens('km')]} >
            <Image
              source={require('./../images/icon-select-pin.png')}
            />
          </TouchableOpacity>
        </View>


        <View >
          <BuscarPromosBtn buttonText={this._changeButtonText()}/>

          <CardsPromos />
        </View>

        <View style={styles.dropDownArea}>
          {this._tipoSelectItens()}
          {this._kmSelectItens()}
        </View>


      </View>
    )
  }
}






/*


<Text
  onPress={this.state.customType === 'km' ? this._showKmOptions.bind(this) : null}
  style={[
    styles.selectText,
    this._selectTextColor()
  ]}>
  {this.state.valorInput}
</Text>


*/
