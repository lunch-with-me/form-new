/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import {ScrollView,View, Text, Picker,StatusBar,TextInput,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native';
import React, { Component } from 'react';
//import Picker from 'react-native-picker-select';
//import {  Image, Platform,StyleSheet,ImageBackground, TouchableOpacity,Text} from 'react-native';
//import { Container, Header, Content, ListItem,Text,  Radio, Right, Left } from 'native-base';
import { UIManager, findNodeHandle } from 'react-native';
import DatePicker from 'react-native-datepicker';
import RadioForm, {
  RadioButton, 
  RadioButtonInput, 
  RadioButtonLabel
} from 'react-native-simple-radio-button';


<StatusBar backgroundColor="#a98274" barStyle="light-content" />


var gender=[
  {label:"female",value:0},
  {label:"male",value:1},
  {label:"other",value:2}
]
class App extends Component {
  constructor(props){
    super(props);
 
    this.state = {
       job: "default occupation",
       date:"01-01-2019",
       
       
 }
}

render() {
    return (
    <View style={styles.container}>
      
      <Text style={styles.txtH}>Create Account</Text>
      
    <Text style={styles.txt}>Full Name*</Text>
    <TextInput style={styles.input}
     
      placeholder="Full Name"
      //secureTextEntry={true}
      //onChangeText={text =>this.setState({confirmpassword : text})}
      //placeholderTextColor="#efebe9"
      />
      
      <Text style={styles.txt}>Gender*</Text>
     
      <RadioForm
      radio_props={gender}
      initial={-1}
      onPress={(value)=>{}}
      buttonSize={12}
      selectedButtonColor={'black'}
      buttonColor={'grey'}
      //buttonOuterSize={12}
      />


     
    

      


<Text style={styles.txt}>Date of Birth*</Text>

      <DatePicker
          style={{width: 200}}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          
          onDateChange={(date) => {this.setState({date: date})}}
        />



<Text style={styles.txt}>Description about yourself*</Text>
<TextInput style={styles.input}
 
  placeholder="Self Description"
  //secureTextEntry={true}
  //onChangeText={text =>this.setState({confirmpassword : text})}
  //placeholderTextColor="#efebe9"
  />

     
      
<Text style={styles.txt}>Mobile Number* </Text>
  <TextInput style={styles.input}
  //style={styles2.input}
  placeholder="Mobile Number"
  //secureTextEntry={true}
  //onChangeText={text =>this.setState({confirmpassword : text})}
  //placeholderTextColor="#efebe9"
  />
  
  <Text style={styles.txt}>Select Occupation*</Text>
<Picker
  selectedValue={this.state.job}
  style={{height: 50, width: 150}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({job: itemValue})
  }>
  <Picker.Item label="student" value="std" />
  <Picker.Item label="software Developer" value="sd" />
  <Picker.Item label="Doctor" value="d" />
  <Picker.Item label="Professor" value="p" />
  <Picker.Item label="Other" value="o" />
</Picker>

</View>

    );
  }
}



const styles =StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'rgb(230, 204, 179)',
      //backgroundColor:"rgba(40,24,14,0.7)",
      width:"100%",
      height:"100%",
      borderWidth: 3,
      //borderColor: '#000000',
      justifyContent: 'center',
      alignItems: 'center',
     
    },


  txtH:{
   color:"#000000",
    //textAlign:"center",
    marginTop:10,
    fontWeight:"bold",
    fontSize: 20

  },
  txt:{
    color:"#000000",
     //textAlign:"center",
     marginTop:15,
     fontWeight:"bold",
     fontSize: 20
 
   },
   input:{
    borderColor:'#000000',
    //backgroundColor:'rgba(240,208,193,0.5)' ,
    height:40,
    width:150,
    marginBottom:10,
    marginTop:10,
    color:'#000000',
    //borderRadius:20,
    fontWeight:'bold',
    paddingLeft:20,
   }


  
  
  
  });
  
export default App;
