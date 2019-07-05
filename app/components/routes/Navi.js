import React from 'react';
import { View, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import { Icon } from 'native-base';
import {
        createAppContainer,
        createDrawerNavigator,
        DrawerItems,
        createStackNavigator,
      } from 'react-navigation';
      
import Search from '../Screens/Search';
import Homepages from '../Screens/Homepages'
import ScreenSettings from '../Screens/SettingsScreen';
import NoteAdd from '../Screens/NotesAdd';
import NoteEdit from '../Screens/NotesEdit';

import SideBar from '../Screens/Sidebar';
/**************************  Menu Header Drawer *************************************/
  

  // Make a stack
  const HomeStack = createStackNavigator({
    Home :{
      screen : Homepages,
      navigationOptions:{
        header:()=>null
      }
    },
    Data :{
      screen : Search,
      navigationOptions:{
        header:()=>null
      }
    },
    Add :{
      screen: NoteAdd,
      navigationOptions:{
        header:()=>null
      }
    },
    Edit :{
      screen : NoteEdit,
      navigationOptions:{
        header:()=>null
      }
    }
  })
  
  // Menu sidebar / drawer
  const AppDrawerNavigator = createDrawerNavigator({
    Personal:{
      screen : HomeStack,
      navigationOptions:{
        drawerIcon : ({tintColor})=>(
          <Icon name="md-person" size={20}/>
        )
      }
    },
    Work:{
      screen : ScreenSettings,
      navigationOptions:{
        drawerIcon : ({tintColor})=>(
          <Image source={require('../../Assets/work.png')} 
                 style={{width:20,height:20}}/>
        )
      }
    },
    Wishlist:{
      screen: ScreenSettings
    }
  },{
    contentComponent: props=><SideBar {...props}/>
},{
    contentOptions:{
      activeTintColor:'orange'
    }
  }
);

export default createAppContainer(AppDrawerNavigator);