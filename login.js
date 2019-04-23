import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, ScrollView  } from 'react-native';
import { Button} from 'react-native-elements';
import {  Icon } from 'native-base';
import AutoHeightImage from 'react-native-auto-height-image';
import Dialog, { DialogTitle, DialogContent } from 'react-native-popup-dialog';
import Menu, { MenuItem } from 'react-native-material-menu';
import CheckBox from 'react-native-check-box';
import { StackNavigator } from 'react-navigation';

class loginScreen extends React.Component {
    static navigationOptions = {
        //title: 'LoginActivity',
        header: null,
    };

    constructor(props) {
        super(props)
        this.state = {
          UserMatricNo: '',
          UserPassword: ''
        }
      }
     
    UserLoginFunction = () =>{
     
     const { UserMatricNo }  = this.state ;
     const { UserPassword }  = this.state ;
     
    fetch('http://10.111.211.214/iMaluum_Site/User_Login.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({    
        matric_no: UserMatricNo,
        password: UserPassword
      })
     
    }).then((response) => response.json())
    
          .then((responseJson) => {
           
            // If server response message same as Data Matched
           if(responseJson === 'Data Matched')
            {
                //Then open Profile activity and send user email to profile activity.
                this.props.navigation.navigate('Second', { MatricNo: UserMatricNo });
                //this.props.navigation.navigate('main');
            }
            else{
              Alert.alert(responseJson);
            }  
          }).catch((error) => {
            console.error(error);
          });     
      }
    
    render() {
        const {navigate} = this.props.navigation;
        
        return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Image style={styles.icon} source={{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/International_Islamic_University_Malaysia_logo.svg/220px-International_Islamic_University_Malaysia_logo.svg.png'}}/>
                <Image style={styles.icon} source={{uri:'http://imaluum.iium.edu.my/assets/images/logo-landing-page.png'}} />
            </View>        
           
            <Text style={styles.welcome}>{'Welcome to\niMaluum Mobile Application\n'}</Text>            
            <TextInput
                style={{height: 40, width: 250,  backgroundColor: 'white', textAlign: 'center', marginBottom:10}}
                onChangeText={UserMatricNo => this.setState({UserMatricNo})}
                placeholder="matric no."
            />
            <TextInput
                style={{height: 40, width: 250,  backgroundColor: 'white', textAlign: 'center'}}
                onChangeText={UserPassword => this.setState({UserPassword})}
                placeholder="password"
                secureTextEntry={true}
            />
                    
            <View style={{flexDirection: 'row', padding: 5}}>
                <CheckBox
                    style={{margin: 5}}
                    onClick={()=>{
                    this.setState({
                        isChecked:!this.state.isChecked
                    })
                    }}
                    isChecked={this.state.isChecked}
                    checkBoxColor='white'
                />
                <Text style={{marginTop: 9, color: 'white', }}>Remember password</Text>
            </View>                 
            <Button buttonStyle={styles.button} titleStyle={{color: "black"}} onPress={this.UserLoginFunction} title="Login"></Button>
        </View>
        );
    }
}

class mainScreen extends React.Component {
    static navigationOptions = {
      //title: 'DashboardActivity',
      
      header: null,
    //   headerLeft: null,
      headerLeft: ( <Icon name='ios-menu' style={{margin: 10}}/>),
      headerRight: ( <Icon name='ios-contact' style={{padding: 10}}/>),
      drawerIcon:(<Icon name='ios-home'/>),
    }
    
    state = {
      visible: false,
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
          <View >
              <View style={styles.boxOne}>
                  <Icon name='ios-menu' style={{margin: 0}} onPress={() => this.props.navigation.openDrawer()}/>
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
                  <Text style={{fontSize: 17, margin: 7}}>Dashboard</Text>
              </View>
              <ScrollView>
              <Text style={{margin: 5}}></Text>
              <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 10}}>
                  <View style={styles.fav}>
                    <Icon name='calendar' onPress={() => navigate('classTimetable')}/>
                    <Text style={{textAlign: 'center'}} onPress={() => navigate('classTimetable')}>{'Class\nTimetable'}</Text>
                  </View>
                  <View style={styles.summary}></View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <View style={styles.fav}>
                    <Icon name='md-paper' onPress={() => navigate('result')}/>
                    <Text style={{textAlign: 'center'}} onPress={() => navigate('result')}>{'Result'}</Text>
                  </View>          
                  <View style={styles.summary}></View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginBottom: 30}}>
                  <View style={styles.fav}>
                    <Icon name='logo-usd'/>
                    <Text style={{textAlign: 'center'}}>{'Finance'}</Text>
                  </View>
                  <View style={styles.summary}></View>
              </View>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <Text style={styles.announcement}>Announcement</Text>
                  <View style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: 340, height: 340, marginBottom: 30, backgroundColor: '#FFFFFF'}}>
                    <Text style={styles.title} onPress={() => {this.setState({ visible: true });}}>Example Announcement</Text>
                    <Dialog
                      visible={this.state.visible}
                      dialogTitle={<DialogTitle title="Example Announcement" />}
                      onTouchOutside={() => {
                        this.setState({ visible: false });
                      }}
                    >
                      <DialogContent>
                        <Text>{'\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</Text>
                      </DialogContent>
                    </Dialog>
                  </View>
              </View>
              </ScrollView>
          </View> 
      ); 
    }
  }
  
  export default MainProject = StackNavigator({
       First: { screen: loginScreen },      
       Second: { screen: mainScreen }
  },{
       headerMode: 'none'
    }
);
      
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
    fav: {
      width: 90, 
      height: 100, 
      backgroundColor: '#FD996B',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', 
    },
    summary: {
      width: 250, 
      height: 100, 
      backgroundColor: '#FFFFFF',
    },
    announcement: {
      fontSize: 17, 
      padding: 5, 
      backgroundColor: '#6BCDFD', 
      textAlign: 'center', 
      width: 340,
    },
    title: {
      fontSize: 16, 
      padding: 5, 
      backgroundColor: '#D9D9D9', 
      textAlign: 'center', 
      width: 320,
      margin: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00A65A',
      },
      icon: {
        width: 100,  
        height: 100,
        margin: 10,
        marginTop: 0,
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        padding: 20,
        color: 'white',
        fontWeight: 'bold',
      },
      button: {
        backgroundColor: '#ffe3af',
        width: 180,
        height: 35,
        padding: 3,
      },
      TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 5 ,
        
        }       
    });
