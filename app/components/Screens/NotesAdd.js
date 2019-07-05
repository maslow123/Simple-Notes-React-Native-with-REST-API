import React, { Component } from 'react';
import { Picker,Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import{ Container, Content,Header, Left,Body, Right,Title, Textarea, Form } from 'native-base';

/* REDUX */

import { addNotes } from '../../Publics/Redux/Actions/notes';
import { connect } from 'react-redux';

class NotesAdd extends Component {
    state = {
        title: '',
        content: '',
    }
    
    postNotes = (title,content,category) => {
        this.props.dispatch(addNotes(title,content,category));
        this.props.navigation.goBack()
    }
  
  render() {
      
    console.disableYellowBox = true;
    return (
        <Container>
            <Header style={{backgroundColor:'white'}}>
                <Left>
                <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                    <Image source={require('../../Assets/baa65a53410e0977385ffab01521ea12.png')}       
                            style={{width:25,height:25}}/>
                    </TouchableOpacity>
                </Left>
                <Body style={{paddingLeft:'30%',width:'100%'}}>
                    <Title style={{color:'black',fontSize:20,fontWeight:'bold'}}>
                    Add Notes
                    </Title>
                </Body>
                <Right>
                    <TouchableOpacity onPress={()=> this.postNotes(this.state.title,this.state.content,this.state.category)}>  
                        <Icon name="check-circle"
                              style={{fontSize:25,color:'#000'}}/>
                    </TouchableOpacity>
                </Right>
            </Header>
            
            <Content padder>
                <Form>
                    <Textarea
                         placeholder="ADD TITLE ..." 
                         rowSpan={2} 
                         style={{fontSize:20,marginTop:"10%"}}
                         maxLength={50}
                         onChangeText={(value)=>this.setState({title:value})}/>
                    <Textarea  
                        placeholder="ADD DESCRIPTION ..." 
                        rowSpan={10} 
                        style={{fontSize:20,marginTop:"10%"}}
                        onChangeText={(value)=>this.setState({content:value})}/>
                </Form>
                <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}>CATEGORY</Text>
                <Picker
                    selectedValue={this.state.category}
                    style={{height: 50, width: '80%',shadowColor:'#000'}}
                    onValueChange={(itemValue) =>
                        parseInt(this.setState({category: itemValue}))
                    }>
                        
                        <Picker.item label="Select the category" enabled={false}/>
                    {
                        this.props.categories.data.map( (item) => (
                            <Picker.item key={item.category_id} label={item.category_name} value={item.category_id}/>
                            )
                        )
                    }
                </Picker>
                <Text>{this.state.category}</Text>
            </Content>
        </Container>
    );
  }
}
const mapStateToProps = ( state ) => {
    return{
        categories: state.categories,
        notes: state.notes
    }
}

export default connect (mapStateToProps)(NotesAdd);
