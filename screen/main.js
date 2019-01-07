import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Button, Icon} from 'native-base';
import AutoHeightImage from 'react-native-auto-height-image';

class mainScreen extends React.Component {
  static navigationOptions = {
        title: 'Dashboard',
        headerLeft: null
        // headerLeft: ( <Icon name='ios-menu' style={{margin: 10}}/>),
        // headerRight: ( <Icon name='ios-contact' style={{padding: 10}}/>),
      }
 
  render() {
    const {navigate} = this.props.navigation;
    return(
        <View style={styles.container}>
            <View style={styles.boxOne}>
                <Icon name='ios-menu' style={{margin: 10}} onPress={() => this.props.navigation.openDrawer()}/>
                <AutoHeightImage width={150} style={{margin: 13}} source={{uri:'http://imaluum.iium.edu.my/assets/images/full-typeface.png'}}/>
                <Icon name='ios-contact' style={{margin: 10}}/>
            </View>
            <View style={styles.boxTwo}>
                <Text style={{fontSize: 17, margin: 7}}>Dashboard</Text>
            </View>
            <ScrollView>
            <Text style={{margin: 5}}></Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 10}}>
                <View style={styles.fav}>
                  <Icon name='calendar'/>
                  <Text style={{textAlign: 'center'}}>{'Class\nTimetable'}</Text>
                </View>
                <View style={styles.summary}></View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <View style={styles.fav}>
                  <Icon name='md-paper'/>
                  <Text style={{textAlign: 'center'}}>{'Result'}</Text>
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
                <Text style={styles.title}>Announcement</Text>
                <View style={{width: 340, height: 340, marginBottom: 30, backgroundColor: '#FFFFFF'}}></View>
            </View>
            </ScrollView>
        </View> 
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
  title: {
    fontSize: 17, 
    padding: 5, 
    backgroundColor: '#6BCDFD', 
    textAlign: 'center', 
    width: 340,
  },
});
