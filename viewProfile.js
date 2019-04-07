// import React, { Component } from 'react';
// import { StyleSheet, Text, View, ScrollView, ActivityIndicator, } from 'react-native';
// import { Icon } from 'native-base';
// import AutoHeightImage from 'react-native-auto-height-image';
// import Menu, { MenuItem } from 'react-native-material-menu';

// class viewProfileScreen extends React.Component {
//   static navigationOptions = {
//     title: 'View Profile',
//     headerLeft: null,
//     //headerLeft: ( <Icon name="ios-menu" style={{margin: 10}}/>),
//     drawerIcon:(<Icon name='md-person'/>),
//   };
  
//   _menu = null;
 
//   setMenuRef = ref => {
//     this._menu = ref;
//   };
 
//   hideViewProfile = () => {
//     this._menu.hide();
//     this.props.navigation.navigate('viewProfile');
//   };

//   hideSetting = () => {
//     this._menu.hide();
//     this.props.navigation.navigate('setting');
//   };

//   hideLogout = () => {
//     this._menu.hide();
//     this.props.navigation.navigate('login');
//   };
 
//   showMenu = () => {
//     this._menu.show();
//   };

//   render() {
//     const {navigate} = this.props.navigation;
    
//     return(
//         <View style={styles.container}>
//             <View style={styles.boxOne}>
//                 <Icon name='ios-menu' style={{margin: 10}} onPress={() => this.props.navigation.openDrawer()}/>
//                 <AutoHeightImage width={150} style={{margin: 13}} source={{uri:'http://imaluum.iium.edu.my/assets/images/full-typeface.png'}}/>
//                 <Menu
//                   ref={this.setMenuRef}
//                   button={<Icon name='ios-contact' style={{marginRight: 10, fontSize:35}} onPress={this.showMenu}/>}
//                 >
//                   <MenuItem onPress={this.hideViewProfile}>View Profile</MenuItem>
//                   <MenuItem onPress={this.hideSetting}>Setting</MenuItem>
//                   <MenuItem onPress={this.hideLogout}>Logout</MenuItem>
//                 </Menu>           
//             </View>
//             <View style={styles.boxTwo}>
//                 <Text style={{fontSize: 17, margin: 7}}>My Profile</Text>
//             </View>
//             <ScrollView>
//                 <View style={{flexDirection: 'column', alignItems: 'center'}}>
//                     <Text style={{margin: 5}}></Text>
//                     <View style={{width: 340, height: 150, marginBottom: 20, backgroundColor: '#FFFFFF'}}>
                    
                    
                    
//                     </View>
//                     <Text style={styles.title}>Personal Information</Text>
//                     <View style={{width: 340, height: 200, marginBottom: 20, backgroundColor: '#FFFFFF'}}></View>
//                     <Text style={styles.title}>Vehicle Registration Information</Text>
//                     <View style={{width: 340, height: 200, marginBottom: 30, backgroundColor: '#FFFFFF'}}></View>
//                 </View>
//             </ScrollView>
//         </View> 
//     ); 
//   }
// }

// export default viewProfileScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     backgroundColor: '#FFEFD1',
//     margin: 0,
//   },
//   boxOne: {
//     alignItems: 'center', 
//     backgroundColor: '#6ACA6B',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   boxTwo: {
//     alignItems: 'center',
//     backgroundColor: '#FDCA45',
//   },
//   title: {
//     fontSize: 17, 
//     padding: 5, 
//     backgroundColor: '#6BCDFD', 
//     textAlign: 'center', 
//     width: 340,
//   },
// });


import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator,ListView } from 'react-native';
import { Icon } from 'native-base';
import AutoHeightImage from 'react-native-auto-height-image';
import Menu, { MenuItem } from 'react-native-material-menu';

class viewProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'View Profile',
    headerLeft: null,
    //headerLeft: ( <Icon name="ios-menu" style={{margin: 10}}/>),
    drawerIcon:(<Icon name='md-person'/>),
  };
  
  _menu = null;

  constructor(props) {

    super(props);

    this.state = {

      isLoading: true,

    }

  }
 
  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideViewProfile = () => {
    this._menu.hide();
    this.props.navigation.navigate('viewProfile');
  };

  hideSetting = () => {
    this._menu.hide();
    this.props.navigation.navigate('setting');
  };

  hideLogout = () => {
    this._menu.hide();
    this.props.navigation.navigate('login');
  };
 
  showMenu = () => {
    this._menu.show();
  };

  componentDidMount(){
  
    return fetch('http://10.111.211.214/iMaluum_Site/std_profile.php')
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson),
      }, function() {
        // In this block you can do something with new state.
      });
    })
    .catch((error) => {
      console.error(error);
    });
  
  }
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "none",
        }}
      />
    );
  }

  render() {
    const {navigate} = this.props.navigation;
    
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 0}}>
          <ActivityIndicator />
          
        </View>
        
      );
    }

    return(
        <View style={styles.container}>
            <View style={styles.boxOne}>
                <Icon name='ios-menu' style={{margin: 10}} onPress={() => this.props.navigation.openDrawer()}/>
                <AutoHeightImage width={150} style={{margin: 13}} source={{uri:'http://imaluum.iium.edu.my/assets/images/full-typeface.png'}}/>
                <Menu
                  ref={this.setMenuRef}
                  button={<Icon name='ios-contact' style={{marginRight: 10, fontSize:35}} onPress={this.showMenu}/>}
                >
                  <MenuItem onPress={this.hideViewProfile}>View Profile</MenuItem>
                  <MenuItem onPress={this.hideSetting}>Setting</MenuItem>
                  <MenuItem onPress={this.hideLogout}>Logout</MenuItem>
                </Menu>           
            </View>
            <View style={styles.boxTwo}>
                <Text style={{fontSize: 17, margin: 7}}>My Profile</Text>
            </View>
            <ScrollView>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={{margin: 5}}></Text>
                    <View style={{width: 340, paddingRight:10,  marginBottom: 10, backgroundColor: '#FFFFFF'}}>
                    <ListView

   dataSource={this.state.dataSource}

  renderSeparator= {this.ListViewItemSeparator}

   enableEmptySections = {false}

   renderRow={(rowData) => <Text style={styles.rowViewContainer} 
   
    >{rowData.name}
    {"\n"}{rowData.matric_no}
    {"\n"}{"LEVEL "}{rowData.level}
    {"\n"}{rowData.kuliyyah}
    </Text>

    
  }
   

 />
                    
                    
                    </View>
                    <Text style={styles.title}>Personal Information</Text>
                    <View style={{width: 340,  marginBottom: 0, backgroundColor: '#FFFFFF'}}></View>
                    <ListView

                      dataSource={this.state.dataSource}

                      renderSeparator= {this.ListViewItemSeparator}

                      enableEmptySections = {true}

                      renderRow={(rowData) => <Text style={styles.rowViewContainer} 
   
                      >{rowData.name}
                      {"\n"}{"Name: "}{rowData.name}
                      {"\n"}{"Identity Card/ Passport No.: "}{rowData.IDcard_passport}
                      {"\n"}{"Gender: "}{rowData.gender}
                      {"\n"}{"Birthday: "}{rowData.birthday}
                      {"\n"}{"Religion: "}{rowData.religion}
                      {"\n"}{"Country: "}{rowData.country}
                      {"\n"}{"Marital Status: "}{rowData.marital_status}
                      {"\n"}{"Address: "}{rowData.address}
                      {"\n"}{"Email: "}{rowData.email}
                      {"\n"}{"Mobile: "}{rowData.mobile}
                      
                      </Text>
                        }
                      />
                    
                    <Text style={styles.title}>Vehicle Registration Information</Text>
                    <View style={{width: 340, marginBottom: 0, backgroundColor: '#FFFFFF'}}>
                    <ListView

                      dataSource={this.state.dataSource}

                      renderSeparator= {this.ListViewItemSeparator}

                      enableEmptySections = {true}

                      renderRow={(rowData) => <Text style={styles.rowViewContainer} 
   
                      >
                      {"Type: "}{rowData.v_type}
                      {"\n"}{"Reg No.: "}{rowData.v_reg_no}
                      {"\n"}{"Model: "}{rowData.v_model}
                
                      </Text>
                        }
                      />
                    
                    </View>
                    
                </View>
            </ScrollView>
        </View> 
    ); 
  }
}

export default viewProfileScreen;

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
    marginTop:15
  },
  MainContainer :{
    justifyContent: 'center',
    flex:1,
    paddingRight: 10,
    
    margin: 10,
    backgroundColor: '#FFFFFF'
  
    },
     
    rowViewContainer: {
      fontSize: 11,
      padding:15,
      backgroundColor: '#FFFFFF'
    }
});
