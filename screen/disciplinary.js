import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';
import AutoHeightImage from 'react-native-auto-height-image';

class disciplinaryScreen extends React.Component {
  static navigationOptions = {
    title: 'Disciplinary',
    headerLeft: null,
    //headerLeft: ( <Icon name="ios-menu" style={{margin: 10}}/>),
  };
    
  render() {
    const {navigate} = this.props.navigation;
    
    return(
        <View style={styles.container}>
            <View style={styles.boxOne}>
                <Icon name='ios-menu' style={{margin: 10}}/>
                <AutoHeightImage width={150} style={{margin: 13}} source={{uri:'http://imaluum.iium.edu.my/assets/images/full-typeface.png'}}/>
                <Icon name='ios-contact' style={{margin: 10}}/>            
            </View>
            <View style={styles.boxTwo}>
                <Text style={{fontSize: 17, margin: 7}}>Disciplinary</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{margin: 5}}></Text>
                <Text style={styles.title}>Disciplinary Information</Text>
                <View style={{width: 340, height: 200, marginBottom: 30, backgroundColor: '#FFFFFF'}}></View>
                <Text style={styles.title}>{'Compound Information &\nTraffic Summon Information'}</Text>
                <View style={{width: 340, height: 200, marginBottom: 30, backgroundColor: '#FFFFFF'}}></View>
            </View>
        </View> 
    ); 
  }
}

export default disciplinaryScreen;

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
  title: {
    fontSize: 17, 
    padding: 5, 
    backgroundColor: '#6BCDFD', 
    textAlign: 'center', 
    width: 340,
  },
});
