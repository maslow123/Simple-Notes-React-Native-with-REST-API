import React, { Component } from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
// import Icon from '@expo/vector-icons/Ionicons';
import {Icon} from 'native-base';

// import Homepage from './app/components/Screens/Homepages';
import {createSwitchNavigator,
        createAppContainer,
        createDrawerNavigator,
        createBottomTabNavigator,
        createStackNavigator
      } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
      // <Homepage/>
    );
  }
}

class WelcomeScreen extends Component{
  render(){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Button title="login" 
                onPress={()=>this.props.navigation.navigate('Dashboard')}/>
        <Button title="register" onPress={()=>alert('button pressed !')}/>
      </View>
    )
  }
}


class DashboardScreen extends Component{
  render(){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Dashboard Screen</Text>
        <Button title="Back"
                onPress= {()=>this.props.navigation.navigate('Welcome')}/>
      </View>
    )
  }
}

class Feed extends Component{
  render(){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Feed</Text>
      </View>
    )
  }
}

class Settings extends Component{
  render(){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Settings</Text>
      </View>
    )
  }
}
class Profile extends Component{
  render(){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Profile</Text>
      </View>
    )
  }
}
// Menu bottom
const DashboardTabNavigator = createBottomTabNavigator({
  Feed,
  Profile,
  Settings
},{
  navigationOptions: ({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index]
    return{
      headerTitle:routeName
    }
  }
});
// Menu Header
const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator:DashboardTabNavigator
},{
  defaultNavigationOptions:({navigation})=>{
    return{
      headerLeft:(
        <Icon name="md-menu" size={20} 
              style={{paddingLeft:10}}
              onPress={()=>navigation.openDrawer()}/>
      )
    }
  }
})
// Menu sidebar
const AppDrawerNavigator = createDrawerNavigator({
  Dashboard:{
    screen : DashboardStackNavigator
  }
})
// Menu homepage
const AppSwitchNavigator = createSwitchNavigator({
  Welcome : {screen:WelcomeScreen},
  Dashboard : {screen:AppDrawerNavigator}
});

const AppContainer = createAppContainer(AppSwitchNavigator)
