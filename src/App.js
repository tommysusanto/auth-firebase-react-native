import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import {Header, Button, CardSection, Spinner} from './components/common'

class App extends Component{

  state = {loggedIn: null};

  componentWillMount(){
      // Initialize Firebase
      firebase.initializeApp({
        apiKey: "AIzaSyCcRXXCSO4icTN6PGMshj1FnKGijz1pfMY",
        authDomain: "auth-6bb8c.firebaseapp.com",
        databaseURL: "https://auth-6bb8c.firebaseio.com",
        storageBucket: "auth-6bb8c.appspot.com",
        messagingSenderId: "29007404056"
      });

      firebase.auth().onAuthStateChanged((user) => {
        if (user){
          this.setState({loggedIn: true})
        }else{
          this.setState({loggedIn: false})
        }
      });
  }

  render(){
    return(
      <View>
        <Header headerText = "Authentication" />
        {this.renderContent()}
      </View>
    );
  }

  renderContent(){

    switch(this.state.loggedIn){
      case true:
        return(
          <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size = 'large' />;
    }
  }

}
export default App;
