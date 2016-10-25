import React, { Component } from 'react'

//elementos
import IndexNavigator from './index-navigator'

//url e rotas
const url = 'http://localhost/server/'



//cria container InitApp e define a rota inicial de navegacao
export default class IndexApp extends Component{
  render() {
    return <IndexNavigator/>
  }
}
