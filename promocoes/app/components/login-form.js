//chama dependencias
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  NavigatorIOS,
  TextInput
} from 'react-native';

//actions
import {saveUser} from './../actions/save-user'

//estilos
import * as styles from './../styles/login'
import * as guide from './../styles/guide'
const gCor = guide.appColors

//elementos
import LoginBtn from './login-btn'


export default class LoginForm extends Component{
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isLoading: false,
      error: false,
      componentName: 'LoginForm'
    }
  }

  handleChange(state, event) {
    let value = event.nativeEvent.text
    this.setState({[state]: value})
  }

  handleSubmit() {
    this.setState({
      isLoading: true
    })

    let name = this.state.username
    let pass = this.state.password
    let mail = this.state.username + '@email.com'

    saveUser(name, pass, mail)
  }

   _handleBackPress() {
    this.props.navigator.pop();
  }

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
  }

  render() {

    return(
      <View style = {styles.mainContainer}>
        <Text style = {styles.title}> Login Screen </Text>
        <TextInput
          style = {[styles.loginInput, styles.userInput]}
          type = "text"
          placeholder = "Login"
          value = {this.state.username}
          onChange = {this.handleChange.bind(this, 'username')}
        />
        <TextInput
          style = {styles.loginInput}
          type = "password"
          placeholder = "Senha"
          secureTextEntry
          value = {this.state.password}
          onChange = {this.handleChange.bind(this, 'password')}
        />

        <LoginBtn submitAction={this.handleSubmit.bind(this)}/>
      </View>
    )
  }

}



/*
        <LoginBtn submitAction={this.handleSubmit.bind(this)}/>


        */
