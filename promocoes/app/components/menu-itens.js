//chama dependencias
import React, { Component } from 'react'
import {
  AsyncStorage
} from 'react-native'

import {Actions, DefaultRenderer} from 'react-native-router-flux'

import LogoutBtn from './logout-btn'

export default class MenuItens extends Component {
  logout(){
    AsyncStorage.removeItem('LOGIN')
    Actions.login()
  }

  render(){
    const state = this.props.navigationState;
    return(
      <LogoutBtn submitAction={this.logout.bind(this)}/>
    )
  }
}
