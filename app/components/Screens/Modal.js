import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, Alert, TextInput, StyleSheet,Button } from 'react-native';

/* REDUX */
import { addCategories } from '../../Publics/Redux/Actions/categories';
import { connect } from 'react-redux';

class Modals extends Component {

  state = {
    modalVisible: false,
    name: '',
    url: '',
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  
  postCategories = (name,url) => {
    this.props.dispatch(addCategories(name,url));
    this.setModalVisible(!this.state.modalVisible);
    
  } 

  render() {
    return (
      <View style={{ marginTop: 22}}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.container}>
            <View style={styles.textInput}>
                <View>
                    <TextInput 
                      style={ styles.text } 
                      placeholder="Category name..."
                      onChangeText={(data)=>this.setState({name: data})}/>
                      
                    <TextInput 
                      style={ styles.text } 
                      placeholder="Image URL..."
                      onChangeText={(data)=>this.setState({url: data})}/>
                      
                </View>
                <View>
                    <Button 
                      style={{ alignItems:'flex-end', top:'80%', right:80 }} 
                      onPress={()=>
                      this.postCategories(this.state.name, this.state.url)} title="add"/>
                    
                    <TouchableOpacity style={{ alignItems:'flex-end',top:'30%'}}
                        onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text style={styles.textCancel}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
          </View>
        </Modal>

        <TouchableOpacity style={{ width:220, top:-22, height:60}}
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={{ fontSize:18,color:'#000' }}>Add Category</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = ( state ) => {
    return{
        categories: state.categories,
        notes: state.notes
    }
}
export default connect (mapStateToProps)(Modals); 

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'rgba(118, 122, 77, 0.12)',
        alignItems:'center',
        justifyContent:'center'
    },
    textInput : {
        backgroundColor:'#fff',
        width:"70%",
        height:200,
        padding:10,
        elevation:3,
        borderRadius:5
    },
    text : {
        top:14,
        borderBottomWidth:1,
        borderColor: "#2ED1A2",
        marginLeft:25,
        marginRight:25,
        marginTop:5,
        fontSize:17,
    },
    textCancel : {
        fontSize:18,
        fontWeight:'bold',
        color:'grey',
        alignItems:'flex-end',
        paddingRight:20
    },
    textAdd : {
        fontSize:18,
        fontWeight:'bold',
        color:'#000'
    }
});