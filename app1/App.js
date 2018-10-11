import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "xxxxxxx",
    authDomain: "xxxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    projectId: "xxxx",
    storageBucket: "xxxxx.appspot.com",
    messagingSenderId: "xxxxxx"
}
firebaseConfig.initializeApp(firebaseConfig)
import {Container,Content,Header,Form,Input,Item,Button,Label} from 'native-base'
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state=({
      email:'',
      password:''
    })
  }
  signUpUser=(email,password)=>{
    try{
      if(this.state.password.length<6){
        alert("please enter 6 characters at least")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email,password)
    }
    catch(error){
      console.log(error.toString())
    }
  }
  loginUser=(email,password)=>{
    try{
      firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
        console.log(user)
      })
    }
    catch(erro){
      console.log(error.toString())
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={email=>this.setState({email})}
            ></Input>
          </Item>
          <Item floatingLabel>
            <Label>password</Label>
            <Input
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={email=>this.setState({password})}></Input>
          </Item>
          <Button style={{marginTop:10}}
          full
          rounded
          success
          onPress={()=>this.loginUser(this.state.email,this.state.password)}>
            <Text style={{color:white}}>Login</Text>
          </Button>
          <Button style={{marginTop:10}}
          full
          rounded
          primary
          onPress={()=>this.signUpUser(this.state.email,this.state.password)}>
            <Text style={{color:white}}>Sign Up</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding:10
  },
});
