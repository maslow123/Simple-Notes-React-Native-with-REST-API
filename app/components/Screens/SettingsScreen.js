import React, { Component } from 'react';
import {View,Text,Image} from 'react-native';
import{Header,Left,Right,Icon} from 'native-base';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        drawerIcon : ({tintColor})=>(
            <Image source={require('../../Assets/wishlist.png')} 
                   style={{width:20,height:20}}/>
        )
    }
  render() {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>SettingsScreen</Text>
        </View>
    );
  }
}

