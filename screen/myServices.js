import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Linking} from 'react-native';
import {Icon} from 'native-base';
import AutoHeightImage from 'react-native-auto-height-image';

class myServicesScreen extends React.Component {
  static navigationOptions = {
    title: 'My Services',
    //headerLeft: null
    headerLeft: ( <Icon name="ios-menu" style={{margin: 10}}/>),
  };
    
  render() {
    const {navigate} = this.props.navigation;
    
    return(
        <View style={styles.container}>
            <View style={styles.boxOne}>
                <AutoHeightImage width={150} style={{margin: 13}} source={{uri:'http://imaluum.iium.edu.my/assets/images/full-typeface.png'}}/>
            </View>
            <View style={styles.boxTwo}>
                <Text style={{fontSize: 17, margin: 7}}>My Services</Text>
            </View>
            <ScrollView>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{margin: 5}}></Text>
                <Text style={styles.list}>Finance</Text>
                <Text style={styles.list} onPress={ ()=> Linking.openURL('https://italeem.iium.edu.my/') }>iTa'leem</Text>
                <Text style={styles.list} onPress={ ()=> Linking.openURL('http://sfs.iium.edu.my/sfs-cas/') }>SFS</Text>
                <Text style={styles.list} onPress={ ()=> Linking.openURL('http://iium.ent.sirsidynix.net.au/client/en_GB/iiumlib/?dt=list') }>Library</Text>
                <Text style={styles.list} onPress={ ()=> Linking.openURL('https://login.microsoftonline.com/common/oauth2/authorize?client_id=4345a7b9-9a63-4910-a426-35363201d503&response_mode=form_post&response_type=code+id_token&scope=openid+profile&state=OpenIdConnect.AuthenticationProperties%3dvvDHRUVDU9iUCe__RdT_kyHuhBJrTAMvN5s9yicNmyl0hF_lRptg03gvFeUfD5M36wM-gTwAhdMlPPsdZrd70qD2Gx2aoEp3Q7vNAIDNsAvHmD78EQufkg4F5ySCDgf0&nonce=636821323977884463.YzVmM2UyNWItY2U5ZC00ZGIxLTk2N2YtY2E3NDY0MDUzZjQ5OTRkMTNkOWItM2QyZi00NzMxLTlkN2ItMDUxMDkwYTY1ZWI3&redirect_uri=https%3a%2f%2fwww.office.com%2f&ui_locales=en-US&mkt=en-US') }>Mail</Text>
                <Text style={styles.list} onPress={ ()=> Linking.openURL('') }>Office 365 (Reset Password)</Text>
                <Text style={styles.list} onPress={ ()=> Linking.openURL('') }>Office 365 (Self Register)</Text>
                <Text style={styles.list} onPress={ ()=> Linking.openURL('') }>COP (Change of Programme)</Text>
                <Text style={styles.list} onPress={ ()=> Linking.openURL('') }>Intern</Text>
                <Text style={styles.list} onPress={ ()=> Linking.openURL('') }>SCS (Student Clearance System)</Text>
                <Text style={styles.list} onPress={ ()=> Linking.openURL('') }>i-Grad</Text>
                <Text style={styles.list} onPress={ ()=> Linking.openURL('') }>Counselling Session</Text>
            </View>
            </ScrollView>
        </View> 
    ); 
  }
}

export default myServicesScreen;

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
