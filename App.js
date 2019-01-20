import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import loginScreen from './screen/login';
import mainScreen from './screen/main';
import myAcademicScreen from './screen/myAcademic';
import myMahallahScreen from './screen/myMahallah';
import myServicesScreen from './screen/myServices';
import disciplinaryScreen from './screen/disciplinary';
import cocuScreen from './screen/cocu';
import viewProfileScreen from './screen/viewProfile';
import settingScreen from './screen/setting';
import classTimetableScreen from './screen/classTimetable';
import CAMScreen from './screen/CAM';
import finalExamScreen from './screen/finalExam';
import resultScreen from './screen/result';

export default class App extends Component {  
  render() {
      return (
        <Router1 />
      );
    }
}
 
const StackNav = createStackNavigator({
  login: {screen: loginScreen},
  main: {screen: mainScreen},
  myAcademic: {screen: myAcademicScreen},
  myMahallah: {screen: myMahallahScreen},
  myServices: {screen: myServicesScreen},
  disciplinary: {screen: disciplinaryScreen},
  cocu: {screen: cocuScreen},
  viewProfile: {screen: viewProfileScreen},
  setting: {screen: settingScreen},
  Logout: {screen: loginScreen, navigationOptions: () => ({headerLeft: null,})},
  classTimetable: {screen: classTimetableScreen},
  CAM: {screen: CAMScreen},
  finalExam: {screen: finalExamScreen},
  result: {screen: resultScreen},
});

const Router1 = createDrawerNavigator({
  login: {screen: StackNav, navigationOptions: {drawerLabel: () => null}},
  main: {screen: mainScreen},
  myAcademic: {screen: myAcademicScreen},
  myMahallah: {screen: myMahallahScreen},
  myServices: {screen: myServicesScreen},
  disciplinary: {screen: disciplinaryScreen},
  cocu: {screen: cocuScreen},
  viewProfile: {screen: viewProfileScreen},
  setting: {screen: settingScreen},
  Logout: {screen: loginScreen},
});

// const DrawerNav = DrawerNavigator({ 
//   login: {screen: loginScreen},
//   main: {screen: mainScreen}
// }, {
//     drawerPosition: 'left'
//   });

// const Router = StackNavigator({
//   login: {screen: DrawerNav},
//   login: {screen: loginScreen},
//   main: {screen: mainScreen},
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
