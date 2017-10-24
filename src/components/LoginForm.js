import React, { Component } from 'react';
import firebase from 'firebase';
import { Text, View } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    emailText: '',
    passwordText: '',
    error: '',
    successLogin: '',
    successCreate: '',
  };

  onButtonPress() {
    const { emailText, passwordText } = this.state;

    this.setState({ error: '', successLogin: '', successCreate: '' });

    firebase.auth().signInWithEmailAndPassword(emailText, passwordText)
      .then(() => {
      this.setState({ successLogin: 'Login successfull' });
      })
      .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(emailText, passwordText)
        .then(() => {
        this.setState({ successCreate: 'New user created successfully' });
        })
        .catch(() => {
          this.setState({ error: 'Authentication is failed' });
          console.log('this.state');
        });
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          placeholder='user@gmail.com'
          label='Email'
          value={this.state.emailText}
          onChangeText={emailText => this.setState({ emailText })}
          />
        </CardSection>

        <CardSection>
          <Input
          secure
          placeholder='password'
          label='Password'
          value={this.state.passwordText}
          onChangeText={passwordText => this.setState({ passwordText })}
          />
        </CardSection>


        <View>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>

          <Text style={styles.successLoginTextStyle}>
            {this.state.successLogin}
          </Text>

          <Text style={styles.successCreateTextStyle}>
            {this.state.successCreate}
          </Text>
        </View>

        <CardSection>
          <Button
          whenPress={this.onButtonPress.bind(this)}
          >
          Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'red',
  },

  successLoginTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'green',
  },

  successCreateTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'yellow',
  }
};

export default LoginForm;
