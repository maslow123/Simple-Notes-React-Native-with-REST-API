import React,{ Component } from 'react';
import { 
  View, StyleSheet, Text, FlatList, TouchableOpacity,
  ActivityIndicator, Alert, RefreshControl } from 'react-native';

import moment from 'moment';

import { getNotes, searchNotes,
         delNotes, getLoadData } from '../../Publics/Redux/Actions/notes';
/* REDUx COMPONENT CALLING */
import { getCategories } from '../../Publics/Redux/Actions/categories';
import { connect } from 'react-redux';


class Content extends Component {
    constructor() {
      super();
      this.state = {
        search : '',
        sort : 'desc',
        desc_id : '',
        refreshing: false,
        page:1,
        isLoading:false,
      }
    }

    componentDidMount = () => {
      this.setState({isLoading:false},this.getData(this.state.search,this.state.sort)),
      this.getDataCategories()
    }
    /* If data flatlist is empty */
    emptyData = () => {
      return(
        <View>
          <Text>Data not found !</Text>
        </View> 

      )
    }
    /* GET DATA NOTES */
    getData = () => {
      this.props.dispatch(getNotes())
    }

    /* INFINITY SCROLL */
    handleLoadMore = async () => {
      if(this.state.page < this.props.notes.page) {
        this.setState(
          {page : this.state.page + 1, isLoading:true},
            ()=>this.props.dispatch(getLoadData(this.state.page))) 
      }else{
        this.setState({isLoading:false})
      }
    }

    /* Make a reloader for infinity scroll */
    renderFooter = ()=>{
      return(
            this.state.isLoading ? 
            
            <View style={styles.loader}>
              <ActivityIndicator size="large"/>
            </View> : null
      )
    }

    /* GET DATA CATEGORIES */
    getDataCategories = () => {
      this.props.dispatch(getCategories())
    }

    /* DEL DATA CATEGORIES */
    delDataNotes = (id) => {
      this.props.dispatch(delNotes(id))
    }

    /* FITUR PULL REFRESH */
    _onRefresh = async () => {
      await this.setState({refreshing: true})
      // await this.getData()
      await this.getData()
      await this.setState({refreshing: false,page:1})
    }
    
    render() {
      const { refreshing } = this.state;
         
      let color = ["#808080","#2FC2DF","#FAD06C","#C0EB6A","#FF92A9","#00ffbf",
                   "#e61919","#996666","#0c9f96","#0c85ff"
                  ]
                  
      console.disableYellowBox = true;
      return ( 
          <View style={{ margin:15, flex:1 }}>
            
            {
              this.props.notes.isLoading ? <ActivityIndicator size="large" color="#007aff"/> : 
              (
                
                <FlatList
                  ListEmptyComponent={this.emptyData}
                  data={ this.props.notes.data }
                  onEndReachedThreshold={0.1} // Scrolling
                  onEndReached={this.handleLoadMore}
                  ListFooterComponent={this.renderFooter}
                  numColumns={ 2 }
                  refreshControl = {
                    <RefreshControl refreshing={refreshing} onRefresh={this._onRefresh}/>
                  }
                  renderItem={({ item, index }) => (
                    <TouchableOpacity 
                      onPress={()=>this.props.navigation.navigate('Edit',item)}
                      onLongPress={
                        ()=>{
                        Alert.alert(
                          'Warning !',
                          'Are you sure delete this data ? ',
                          [
                            {
                              text: 'Cancel',
                              style: 'cancel',
                            },
                            {text: 'OK', 
                             onPress: () => this.delDataNotes(item.desc_id)
                            },
                             
                          ],
                          {cancelable: false},
                        );
                      }}
                      onPressOut={this._onPressOut}
                      style={[styles.card,{
                        backgroundColor : item.category_id == null  ? color[0] : 
                                          color[item.category_id]
                                        }
                              ]}>
                        
                      <View>
                        <View style={ styles.dateView }>
                          <Text style={ [styles.text,{fontWeight:'normal',fontSize:13}] }>
                            {moment(item.createdAt).format('DD-MMM')}
                          </Text>
                        </View>
                        <View style={ styles.titleView }>
                          <Text  numberOfLines={1} style={ [styles.text,{fontSize:18}] }>{ item.title }</Text>
                        </View>
                        <View style={ styles.categoryView }>
                          
                          <Text style={ [styles.text,{fontWeight:'normal'}] }>
                              {item.category_name == null ? <Text>-</Text> : item.category_name}
                          </Text>
                        </View>
                        <View style={ styles.contentView }>
                          <Text style={ [styles.text,{fontSize:15}] } numberOfLines={4}>{ item.note }</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item,index)=>item.desc_id.toString()}
                />
              )
            }
          </View>
      );
    }
  }
  
  const mapStateToProps = ( state ) => {
    return {
      notes : state.notes,
      categories: state.categories,
    }
  }

  export default connect(mapStateToProps)(Content)

  const styles = StyleSheet.create({
    
    text:{
      fontWeight:'bold',
      color:'#fff',
      fontSize:15
    },
    card:{
      borderRadius: 5,
      justifyContent:'center',
      paddingRight:0,
      paddingTop:20,
      paddingLeft:0,
      paddingBottom:0,
      maxHeight:180,
      shadowColor:'#000',
      shadowOffset:{
        width:0,
        height:2,
      },
      shadowOpacity:0.25,
      shadowRadius:3.84,
      elevation:5,
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap-reverse',
      height: 150,
      
      marginLeft:'3%',
      marginRight:'3%',
      marginBottom:20,
    },
    dateView: {
      alignItems:'flex-end',
      paddingRight:13,
      paddingTop:10
    },
    titleView: {
      marginLeft:20,
      marginRight:20
    },
    categoryView: {
      marginLeft:20
    },  
    contentView:{
      marginLeft:20,
      marginTop:5,
      marginRight: 20,
      marginBottom:10,
    },
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
    },
    loader:{
      marginTop:10,
      alignItems:'center',
      color:'red'
    }

  });