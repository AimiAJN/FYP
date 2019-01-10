import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import {Input, Button} from 'react-native-elements';
import CheckBox from 'react-native-check-box';

class loginScreen extends React.Component {
    static navigationOptions = {
        //title: 'Login',
    };

    constructor() {
        super()
        this.state = {
            isChecked: false,
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
            
            <Text style={styles.welcome}>{'Welcome to\niMaluum Mobile Application\n\n'}</Text>
            
            <Input placeholder='Matric No.'/>
            <Input placeholder='Password' style={{textAlign: 'center'}}/>

            <View style={{flexDirection: 'row', padding: 5}}>
                <CheckBox
                    style={{margin: 5}}
                    onClick={()=>{
                    this.setState({
                        isChecked:!this.state.isChecked
                    })
                    }}
                    isChecked={this.state.isChecked}
                />
                <Text style={{marginTop: 9}}>Remember password</Text>
            </View>
            
            <Text>{'\n'}</Text>
            
            <Button onPress={() => navigate('main')} title="Login"></Button>
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
    backgroundColor: '#F5FCFF',
  },
  icon: {
    width: 100,  
    height: 100,
    margin: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
});
