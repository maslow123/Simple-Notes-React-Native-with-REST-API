import React, { Component } from 'react';
import { Picker,Image,Text, TouchableOpacity, YellowBox } from 'react-native';
import{ Container, Content, Textarea, Form, Header, Left,Body, Right,Title } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

/* REDUX */
import { updNotes } from '../../Publics/Redux/Actions/notes';
import { connect } from 'react-redux';

class NotesEdit extends Component {
    
    constructor(props){
      super(props);
      this.state={
          id: parseInt(this.props.navigation.state.params.desc_id),
          title : this.props.navigation.state.params.title,
          note: this.props.navigation.state.params.note,
          category: this.props.navigation.state.params.category_id
      }
  };
  updateNotes = (id,title,note,category) => {
    if(title!=='' && note !== '' && category !== ''){
        this.props.dispatch(updNotes(id,title,note,category));
        this.props.navigation.goBack()
    }else {
        alert('Data must be filled in!')
    }
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
                        Edit Notes
                    </Title>
                </Body>
                <Right>
                    <TouchableOpacity onPress={()=> this.updateNotes(this.state.id,this.state.title,this.state.note,this.state.category)}>  
                        <Icon name="check-circle"
                              style={{fontSize:25,color:'#000'}}/>
                    </TouchableOpacity>
                </Right>
            </Header>
            <Content padder>
                <Form>
                    <Textarea 
                              value={this.state.title} 
                              rowSpan={2} 
                              style={{fontSize:20,marginTop:"10%"}}
                              onChangeText={(title)=>this.setState({title})}
                              maxLength={50}/>

                    <Textarea  
                              value={this.state.note} 
                              rowSpan={10} 
                              style={{fontSize:20,marginTop:"10%"}}
                              onChangeText={(itemValue)=>this.setState({note: itemValue})}/>
                </Form>
                <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}>CATEGORY</Text>
                <Picker
                    selectedValue={this.state.category}
                    style={{height: 50, width: '40%',shadowColor:'#000'}}
                    onValueChange={(itemValue) => this.setState({category: itemValue})
                    }>
                    {
                        this.props.categories.data.map( (item) => (
                            <Picker.item key={item.category_id} label={item.category_name} value={item.category_id}/>
                            )
                        )
                    }
                </Picker>
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

export default connect (mapStateToProps)(NotesEdit);

