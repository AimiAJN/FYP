import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import CheckBox from 'react-native-check-box';

class logoutScreen extends React.Component {
    static navigationOptions = {
        //title: 'Login',
        header: null,
    };

    constructor() {
        super()
        this.state = {
            isChecked: false,
            matricno: 0,
            pword: 'password',
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        
        return (
        <View style={styles.container}>
           <Text>You are logged out</Text>
            <Button buttonStyle={styles.button} titleStyle={{color: "black"}} onPress={() => navigate('main')} title="Login"></Button>
        </View>
        );
    }
}

export default logoutScreen;

const styles = StyleSheet.create({
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
});