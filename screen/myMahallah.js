import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { Icon } from 'native-base';
import AutoHeightImage from 'react-native-auto-height-image';
import Menu, { MenuItem } from 'react-native-material-menu';

class myMahallahScreen extends React.Component {
  static navigationOptions = {
    title: 'My Mahallah',
    headerLeft: null,
    //headerLeft: ( <Icon name="ios-menu" style={{margin: 10}}/>),
    drawerIcon:(<Icon name='md-bed'/>),
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
                  <MenuItem onPress={this.hideLogout}>Logout</MenuItem>
                </Menu>           
            </View>
            <View style={styles.boxTwo}>
                <Text style={{fontSize: 17, margin: 7}}>My Mahallah</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{margin: 5}}></Text>
                <Text style={styles.list}>Check In Slip</Text>
                <Text style={styles.list}>Check Out Slip</Text>
                <Text style={styles.list}>Prereg Slip</Text>
                <Text style={styles.list} onPress={ ()=> Linking.openURL('http://prereg.iium.edu.my/regmahallah/') }>Online Pre-reg</Text>
            </View>
        </View> 
    ); 
  }
}

export default myMahallahScreen;

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
  list: {
    fontSize: 15, 
    padding: 7, 
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#D9D9D9', 
    textAlign: 'left', 
    width: 340,
  },
});
