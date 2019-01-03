import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
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
                <Text style={styles.list}>iTa'leem</Text>
                <Text style={styles.list}>SFS</Text>
                <Text style={styles.list}>Library</Text>
                <Text style={styles.list}>Mail</Text>
                <Text style={styles.list}>Office 365 (Reset Password)</Text>
                <Text style={styles.list}>Office 365 (Self Register)</Text>
                <Text style={styles.list}>COP (Change of Programme)</Text>
                <Text style={styles.list}>Intern</Text>
                <Text style={styles.list}>SCS (Student Clearance System)</Text>
                <Text style={styles.list}>i-Grad</Text>
                <Text style={styles.list}>Counselling Session</Text>
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
