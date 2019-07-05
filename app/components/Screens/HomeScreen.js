import React, { Component } from 'react';
import {View,Text,Image} from 'react-native';
import{Header,Left,Right,Icon} from 'native-base';

export default class HomeScreen extends Component {
    // static navigationOptions = {
    //     drawerIcon : ({tintColor})=>(
    //         <Image source={require('../../Assets/category.png')} 
    //                style={{width:20,height:20}}/>
    //     )
    // }
    static navigationOptions = ({navigation}) =>({
        headerTitle : 'Add Note',
        headerTitleStyle:{
            textAlign:'center',
            flexGrow:1,
            alignSelf:'center'
        },
        headerRight:(    
          <Image source={require('../../Assets/checklist.png')}
          style={{width:35,height:35,paddingRight:30}}/>
        )
    })
    render() {
    return (
        <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
            <Text>HomeScreen</Text>
        </View>
    );
  }
}

