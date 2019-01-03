import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';
import AutoHeightImage from 'react-native-auto-height-image';

class myAcademicScreen extends React.Component {
  static navigationOptions = {
    title: 'My Academic',
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
                <Text style={{fontSize: 17, margin: 7}}>My Academic</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{margin: 5}}></Text>
                <Text style={styles.list}>Class Timetable</Text>
                <Text style={styles.list}>Continuous Assessment Marks</Text>
                <Text style={styles.list}>Final Exam</Text>
                <Text style={styles.list}>Result</Text>
                <Text style={styles.list}>Study Plan</Text>
                <Text style={styles.list}>Pre Reg</Text>
                <Text style={styles.list}>Partial Transcript</Text>
            </View>
        </View> 
    ); 
  }
}

export default myAcademicScreen;

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