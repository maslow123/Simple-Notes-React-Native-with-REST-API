import React, { Component } from 'react';
import { Image, View, Text, FlatList, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem, Container, Content, Left, List } from 'native-base';

/* REDUX */
import { delCategories } from '../../Publics/Redux/Actions/categories';
import { getNotesById } from '../../Publics/Redux/Actions/notes';
import { connect } from 'react-redux';

import Modal from './Modal';

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            isLoading : false
        }
    }

    deleteCategory = (id) => {
        this.props.dispatch(delCategories(id))
    } 
    render(){   
        return(
            <Container>
                <Content>
                    <View style={{
                        justifyContent : 'center',
                        alignItems: 'center',
                        margin : 25,
                    }}>
                        <Image style={{ marginTop: 20, height: 130, width: 130, borderRadius: 80}}
                               source={ require('../../Assets/Foto.jpg')}
                        />
                        <Text style={{
                            marginTop: 10,
                            marginBottom: 20,
                            fontSize: 20,
                            color:'#000',
                        }}>
                            M.Fadhly Noor Rizqi
                        </Text>
                    </View>
                    <FlatList
                        data= { this.props.categories.data }
                        renderItem= {({ item,index }) => {
                                      
                            return(
                                <ListItem 
                                    bordered
                                    onPress={()=> {this.props.dispatch(getNotesById(item.category_id))
                                    this.props.navigation.closeDrawer()}}
                                    onLongPress={
                                        ()=>{
                                            Alert.alert(
                                              'Warning !',
                                              'Are you sure delete this data ? ',
                                              [
                                                {
                                                  text: 'Cancel',
                                                  onPress: () => console.warn('Cancel Pressed'),
                                                  style: 'cancel',
                                                },
                                                {text: 'OK', 
                                                 onPress: () => this.deleteCategory(item.category_id)
                                                },
                                                 
                                              ],
                                              {cancelable: false},
                                            );
                                          }}
                                    >
                                    <Left>
                                        <Image source={{uri: item.image_url}} style={{width:20,height:20}}/>
                                        <Text  style={{paddingLeft:10,fontSize: 15,color:'#000'}}>
                                        { item.category_name }</Text>
                                    </Left>    

                                </ListItem>
                            );
                        }
                    }     
                    keyExtractor={(item,index)=>item.category_id+" "}
                />
                <List>
                    <ListItem noBorder>
                        
                    <Left>
                        <Icon name={'plus-circle'} style={{color:"#000",fontSize:28,width:38}}/>
                        <Modal/>
                    </Left>
                    </ListItem>
                </List>
                
                </Content>
            </Container>
        )
    }
}
const mapStateToProps = ( state ) => {
    return {
        categories : state.categories
    }
}

export default connect(mapStateToProps)(Sidebar);