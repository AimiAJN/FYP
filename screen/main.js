import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Button, Icon} from 'native-base';
import AutoHeightImage from 'react-native-auto-height-image';

class mainScreen extends React.Component {
  static navigationOptions = {
        title: 'Dashboard',
        //headerLeft: null
        headerLeft: ( <Icon name="ios-menu" style={{margin: 10}}/>),
      }
    
  render() {
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.boxOne}>
                <AutoHeightImage width={150} style={{margin: 13}} source={{uri:'http://imaluum.iium.edu.my/assets/images/full-typeface.png'}}/>
            </View>
            <View style={styles.boxTwo}>
                <Text style={{fontSize: 17, margin: 7}}>Dashboard</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30, marginBottom: 10}}>
                <View style={styles.fav}></View>
                <View style={styles.summary}></View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={styles.fav}></View>          
                <View style={styles.summary}></View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginBottom: 30}}>
                <View style={styles.fav}></View>
                <View style={styles.summary}></View>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={styles.announcement}>Announcement</Text>
                    <View style={{width: 340, height: 340, marginBottom: 30, backgroundColor: '#FFFFFF'}}></View>
            </View>
            
        </View> 
        </ScrollView>
    ); 
  }
}

export default mainScreen;

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
  fav: {
    width: 90, 
    height: 100, 
    backgroundColor: '#FD996B',
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
});