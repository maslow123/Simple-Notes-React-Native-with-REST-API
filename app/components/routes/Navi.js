import React from 'react';
import { Icon } from 'native-base';
import {
        createAppContainer,
        createDrawerNavigator,
        createStackNavigator,
      } from 'react-navigation';
      
import Homepages from '../Screens/Homepages'
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