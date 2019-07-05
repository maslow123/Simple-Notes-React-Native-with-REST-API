import React from 'react';
import{View,Text,TouchableOpacity} from 'react-native';

export default class Index extends React.Component{

    state = {
        number : 0,
        text   : ""
    }

    // constructor(){
    //     super();
    //     this.state={
    //         number : 0,
    //         text = ""
    //     };
    // }
    /**  if you want to increment state +1 persecond */ 
    
    // componentDidMount(){
    //     setInterval(()=>{
    //         this.setState({
    //             number : this.state.number +1
    //         });
    //     },1000);
    // }

    handleClick(myPersonal){
        // console.warn('Hello my name is ' +myPersonal.name+ " and im "+myPersonal.age+ " years old");

        this.setState({
            number : this.state.number + 1,
            text   : "Hello React"
        });
        
    }
    
    render(){

        const myPersonal = {
                name : "M.Fadhly NR",
                age  : 17
            };
        return(
            <View>
                <Text>Please click button below !</Text>
                <TouchableOpacity onPress={()=>this.handleClick(myPersonal)}>
                    <Text>Click this button !</Text>
                    <Text>State to -  {this.state.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}