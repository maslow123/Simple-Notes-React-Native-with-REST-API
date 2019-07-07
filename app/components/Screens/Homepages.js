import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Item, Input, Container, 
         Fab, Header, Left, Body,
         Right,Title, Icon } from 'native-base';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import debounce from 'lodash.debounce';

import { getNotes } from '../../Publics/Redux/Actions/notes';
import Content from './Content';

/* REDUX */
import { connect } from 'react-redux';

class Homepages extends Component{
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
    sort: 'desc',
    searchActive : false
  }

/* SEARCH DATA METHOD */
 getNotesData = (keyword,sort) => {
   this.setState({search : keyword})
   this.props.dispatch(getNotes(this.state.search,sort))
 }
/* SORT DATA METHOD */ 
  getSortData = (sort) => {
    this.props.dispatch(sortNotes(sort));
  }

  render(){
    return(
      <Container>
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
              }>
                <MenuItem onPress={()=>this.getNotesData(this.state.search,'ASC')}>ASCENDING</MenuItem>
                <MenuDivider />
                <MenuItem onPress={()=>this.getNotesData(this.state.search,'DESC')}>DESCENDING</MenuItem>
              </Menu>
            </TouchableOpacity>
          </Right>
        </Header>
{/* SEARCH INPUT */}
        <View style={{width:"90%",marginTop:20,opacity:0.5,paddingTop:"1%",alignSelf:"center"}}>
          <Item style={{borderBottomColor:"transparent"}}>
            <Input 
              placeholder=" Search..." 
              style={styles.search}
              onChangeText={debounce(this.getNotesData,500)}>
            </Input>
          </Item>
        </View>
{/* CARD SECTION  */}
        <Content navigation={this.props.navigation}/>
        <Fab style={{backgroundColor:'white'}} 
             position='bottomRight'
             onPress={()=>this.props.navigation.navigate('Add')}
        >
          <Icon name="add" style={{color:"#000",fontWeight:'bold'}}/>
        </Fab>
      </Container>    
    )
  }
}

const mapStateToProps = ( state ) => {
  return{
      categories: state.categories,
      notes: state.notes
  }
}

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

export default connect (mapStateToProps)(Homepages);

