
//chama dependencias
import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'

import IndexApp from './app/index-app'

class LoadApp extends Component{
  render() {
    return(
      <IndexApp />
    )
  }
}


//registra e renderiza o componente
AppRegistry.registerComponent('promocoes-app', () => LoadApp);
