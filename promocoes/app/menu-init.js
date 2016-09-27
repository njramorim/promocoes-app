import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import {
  Scene,
  Router,
  Actions,
  DefaultRenderer
} from 'react-native-router-flux'

import Login from './containers/login'
import Home from './containers/home'
import PromoMap from './containers/promo-map'
import SideMenu from './containers/side-menu'

//estilos
import * as guide from './styles/guide'
const gCor = guide.appColors



export default class MenuInit extends Component {
  backButtonIcon() {
    return (
      <TouchableOpacity
          onPress={Actions.pop}
          style={{
            paddingTop: 5,
            height:25,
            width:25
          }}
      >
        <View>
          <Image source={require('./images/icon-menu-back.png')} />
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <Router>
        <Scene key="drawer"
          component={SideMenu}
          open={false}
        >
            <Scene
              key="root"
              navigationBarStyle = {{
                backgroundColor: gCor.first,
              }}
              titleStyle = {{
                color: gCor.clean,
                fontSize: 17
              }}
              drawerImage={require('./images/icon-menu-burguer.png')}
            >
                <Scene
                  key="login"
                  component={Login}
                  title="Login"
                  type="reset"
                  hideNavBar={true}
                />
                <Scene
                  key="home"
                  component={Home}
                  title="Buscar Promoções"
                  hideNavBar={false}
                  type="reset"
                />
                <Scene
                  key="promomap"
                  component={PromoMap}
                  title="Promo Map"
                  hideNavBar={false}
                  renderBackButton={this.backButtonIcon}
                />
            </Scene>

        </Scene>
      </Router>

    )
  }
}
