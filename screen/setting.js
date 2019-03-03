import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Icon } from 'native-base';
import AutoHeightImage from 'react-native-auto-height-image';
import Menu, { MenuItem } from 'react-native-material-menu';
import ToggleSwitch from 'toggle-switch-react-native';

class settingScreen extends React.Component {
  static navigationOptions = {
    title: 'Setting',
    headerLeft: null,
    //headerLeft: ( <Icon name="ios-menu" style={{margin: 10}}/>),
    drawerIcon:(<Icon name='ios-settings'/>),
  };
  
  _menu = null;
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideViewProfile = () => {
    this._menu.hide();
    this.props.navigation.navigate('viewProfile');
  };

  hideSetting = () => {
    this._menu.hide();
    this.props.navigation.navigate('setting');
  };

  hideLogout = () => {
    this._menu.hide();
    this.props.navigation.navigate('login');
  };
 
  showMenu = () => {
    this._menu.show();
  };

  state = {
    isOnDefaultToggleSwitch: false,
  };

  render() {
    const {navigate} = this.props.navigation;
    
    return(
        <View style={styles.container}>
            <View style={styles.boxOne}>
                <Icon name='ios-menu' style={{margin: 10}} onPress={() => this.props.navigation.openDrawer()}/>
                <AutoHeightImage width={150} style={{margin: 13}} source={{uri:'http://imaluum.iium.edu.my/assets/images/full-typeface.png'}}/>
                <Menu
                  ref={this.setMenuRef}
                  button={<Icon name='ios-contact' style={{marginRight: 10, fontSize:35}} onPress={this.showMenu}/>}
                >
                  <MenuItem onPress={this.hideViewProfile}>View Profile</MenuItem>
                  <MenuItem onPress={this.hideSetting}>Setting</MenuItem>
                  <MenuItem onPress={this.hideLogout} style={{backgroundColor: '#ff4747'}}>Logout</MenuItem>
                </Menu>          
            </View>
            <View style={styles.boxTwo}>
                <Text style={{fontSize: 17, margin: 7}}>Setting</Text>
            </View>
            <Text style={{margin: 5}}></Text>
            <View style={{flexDirection: 'row', alignItem: 'center'}}>
                <ToggleSwitch
                  onColor='#82e3ff'
                  offColor='#ff7c7c'
                  label='Push Notification'
                  labelStyle={{color: 'black', fontWeight: '500', marginHorizontal: 70}}
                  size='medium'
                  isOn={this.state.isOnDefaultToggleSwitch}
                  onToggle={isOnDefaultToggleSwitch => {
                    this.setState({ isOnDefaultToggleSwitch });
                  }}
                />
            </View>
        </View> 
    ); 
  }
}

export default settingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFEFD1',
    margin: 0,
  },
  boxOne: {
    alignItems: 'center', 
    backgroundColor: '#6ACA6B',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxTwo: {
    alignItems: 'center',
    backgroundColor: '#FDCA45',
  },
});
