import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';
import {Button} from 'react-native-elements';
import AutoHeightImage from 'react-native-auto-height-image';

class finalExamScreen extends React.Component {
  static navigationOptions = {
    title: 'Co-Curriculum',
    headerLeft: null,
    //headerLeft: ( <Icon name="ios-menu" style={{margin: 10}}/>),
    drawerIcon:(<Icon name='ios-trophy'/>),
  };
    
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
                <Text style={{fontSize: 17, margin: 7}}>Final Exam</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{margin: 10}}></Text>
                <View style={{width: 340, height: 200, marginBottom: 30, backgroundColor: '#FFFFFF'}}></View>
            </View>
            <View style={styles.download}>
                <Button title="Download"></Button>
            </View>
        </View> 
    ); 
  }
}

export default finalExamScreen;

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
  download: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 35,
  },
});