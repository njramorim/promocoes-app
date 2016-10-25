//chama dependencias
import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  AsyncStorage
} from 'react-native';

//actions
import {saveUser} from './../actions/save-user'
import { Actions } from 'react-native-router-flux';

//elementos
import LoginBtn from './../components/login-btn'

//url e rotas
const url = 'http://localhost/server/'

//estilos
import * as guide from './../styles/guide'
const gCor = guide.appColors
import * as styles from './../styles/default'

export default class Login extends Component{
  constructor(props) {
    super(props)
    this.state = {
      logado: true,
      username: '',
      password: '',
      passwordConfirm: '',
      isLoading: false,
      error: false,
      componentName: 'Login'
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
    this.goToHome()
  }


  goToHome() {
    Actions.home()
  }


  toggleMenu() {
    Actions.refresh({key: 'drawer', open: value => !value });
  }

  async findLoggedUser(result) {
    try {
      const value = await AsyncStorage.getItem('LOGIN');
      if (value != undefined){
        this.goToHome()
      }

    } catch (error) {
      // Error retrieving data
    }
  }

  componentWillMount() {
    this.findLoggedUser(this.state.logado)

    Actions.refresh({key: 'drawer', open: false })
  }

  render() {

    return(
      <View style = {styles.mainContainer}>
        <TextInput
          style = {[styles.loginInput, styles.inputBgLeft]}
          type = "text"
          placeholder = "Login"
          value = {this.state.username}
          onChange = {this.handleChange.bind(this, 'username')}
        />
          <Image
            style = {[styles.absolute, styles.inputImgLeft, styles.inputImg1]}
            source={require('./../images/icon-input-person.png')}
          />
        <TextInput
          style = {[styles.loginInput, styles.notFirstInput, styles.inputBgLeft]}
          type = "password"
          placeholder = "Senha"
          secureTextEntry
          value = {this.state.password}
          onChange = {this.handleChange.bind(this, 'password')}
        />
          <Image
            style = {[styles.absolute, styles.inputImgLeft, styles.inputImg2]}
            source={require('./../images/icon-input-password.png')}
          />
        <TextInput
          style = {[styles.loginInput, styles.notFirstInput, styles.inputBgLeft]}
          type = "password"
          placeholder = "Confirmar Senha"
          secureTextEntry
          value = {this.state.passwordConfirm}
          onChange = {this.handleChange.bind(this, 'passwordConfirm')}
        />
          <Image
            style = {[styles.absolute, styles.inputImgLeft, styles.inputImg3]}
            source={require('./../images/icon-input-password.png')}
          />



        <LoginBtn submitAction={this.handleSubmit.bind(this)}/>
      </View>
    )
  }


}




/*

        <LoginBtn submitAction={this.handleSubmit.bind(this)}/>

*/
