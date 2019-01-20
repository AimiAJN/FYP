import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import CheckBox from 'react-native-check-box';

class loginScreen extends React.Component {
    static navigationOptions = {
        //title: 'Login',
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
            <View style={{flexDirection: 'row'}}>
                <Image style={styles.icon} source={{uri:'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/International_Islamic_University_Malaysia_logo.svg/220px-International_Islamic_University_Malaysia_logo.svg.png'}}/>
                <Image style={styles.icon} source={{uri:'http://imaluum.iium.edu.my/assets/images/logo-landing-page.png'}} />
            </View>        
            <Text style={styles.welcome}>{'Welcome to\niMaluum Mobile Application\n'}</Text>            
            <TextInput
                style={{height: 40, width: 250,  backgroundColor: 'white', textAlign: 'center', marginBottom:10}}
                onChangeText={(matricno) => this.setState({matricno})}
                placeholder="matric no."
            />
            <TextInput
                style={{height: 40, width: 250,  backgroundColor: 'white', textAlign: 'center'}}
                onChangeText={(pword) => this.setState({pword})}
                placeholder="password"
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
            <Text>{'\n'}</Text>           
            <Button buttonStyle={styles.button} titleStyle={{color: "black"}} onPress={() => navigate('main')} title="Login"></Button>
        </View>
        );
    }
}

export default loginScreen;

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
  },
});
