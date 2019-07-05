import React, { Component } from 'react';
import { View, StyleSheet,TextInput,Image, TouchableOpacity } from 'react-native';
import { Item,Input } from 'native-base';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

import { Container, Fab, Header, Left,Body, Right,Title } from 'native-base';
import debounce from 'lodash.debounce';

/* REDUX */
import { searchNotes } from '../../Publics/Redux/Actions/notes';
import { connect } from 'react-redux';

class Search extends Component{
  _menu = null;
  setMenuRef = ref=>{
    this._menu = ref;
  };

  hideMenu = ()=>{
    this._menu.hide();
  };

  showMenu = ()=>{
    this._menu.show();
  };
   state = {
     search : '',
     searchActive : false
   }

  getSearchData = (keyword,sort) => {
    this.setState({search : keyword})
    this.props.dispatch(searchNotes(this.state.search,sort))
  } 
  onChangeText = (text) => {
    console.warn(text)
  }
    render(){
      return(
        <View>
          <Header style={{backgroundColor:'white'}}>
          <Left>
            <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}>
              <Image 
                  source={require('../../Assets/Foto.jpg')}
                  style={{width:40,height:40,borderRadius:20}}
              />
            </TouchableOpacity>
          </Left>
          <Body style={{paddingLeft:'30%',width:'100%'}}>
            <Title style={{color:'black',fontSize:20,fontWeight:'bold'}}>
              NOTE APP
            </Title>
          </Body>
          <Right>
            <TouchableOpacity>
              <Menu
                ref={this.setMenuRef}
                button={
                <TouchableOpacity onPress={this.showMenu}>
                  <Image 
                    source={require('../../Assets/sort.png')}       
                    style={{width:25,height:25}}/>
                </TouchableOpacity>
                }
                >
                <MenuItem onPress={()=>this.getSearchData(this.state.search,'ASC')}>ASCENDING</MenuItem>
                <MenuDivider />
                <MenuItem onPress={()=>this.getSearchData(this.state.search,'DESC')}>DESCENDING</MenuItem>
              </Menu>
            </TouchableOpacity>
          </Right>
        </Header>
        <View style={{width:"90%",marginTop:20,opacity:0.5,paddingTop:"1%",alignSelf:"center"}}>
          <Item style={{borderBottomColor:"transparent"}}>
            <Input 
              placeholder=" Search..." 
              style={styles.search}
              onChangeText={debounce(this.getSearchData,500)}>
            </Input>
            {/* <Input 
              placeholder=" Tes lodas debounce" 
              style={styles.search}
              onChangeText={}/> */}
          </Item>
        </View>
     </View>
      )
    }
  }
 const mapStateToProps = ( state ) => {
    return{
        categories: state.categories,
        notes: state.notes
    }
}
export default connect (mapStateToProps)(Search); 
const styles = StyleSheet.create({
    search:{
        paddingLeft:"5%",
        shadowOpacity:0.5,
        borderRadius:15,
        shadowColor:"#E5E5E5",
        shadowOffset:{
            width:0,
            height:7,
        },
        shadowOpacity:0.43,
        shadowRadius:9.51,
        elevation:5,      
    }
})