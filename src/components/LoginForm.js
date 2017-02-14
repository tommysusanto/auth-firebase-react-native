import React, {Component} from 'react';
import {Text} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';
import firebase from 'firebase';

class LoginForm extends Component{

  state = {email: '', password:'', error:'', loading: false}
  render() {
    return(
      <Card>
        <CardSection>
          <Input secure={false} placeholder="user@gmail.com" label="Email" value={this.state.email} onChangeText = {email => this.setState({email})}/>
        </CardSection>

        <CardSection>
          <Input secure={true} placeholder="password" label="password" value={this.state.password} onChangeText = {password => this.setState({password})}/>
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }

  onButtonPress(){
    const {email, password} = this.state
    this.setState({error: '', loading: true})

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(this.onLoginSuccess.bind(this))
    .catch(()=>{
      firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
    });
  }

  onLoginSuccess(){
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }

  onLoginFail(){
    this.setState({
      error: 'Authentication failed!',
      loading: false
    })
  }

  renderButton(){
    if (this.state.loading){
      return <Spinner size='small' />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
    );

  };
}

const styles ={
  errorTextStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
