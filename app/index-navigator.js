//chama dependencias
import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'


//elementos
import Login from './containers/login'
import Home from './containers/home'
import MenuInit  from './menu-init'

//url e rotas
const url = 'http://localhost/server/'

//css
import * as guide from './styles/guide'
const gCor = guide.appColors
const topBarPadding = 15


export default class IndexNavigator extends Component {
  render() {
    return (
       <MenuInit />
    )
  }
}
