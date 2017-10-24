//import library
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//create component
const Button = ({ whenPress, children }) => {
  const {
    buttonTextStyle,
    textStyle,
  } = styles;

  return (
    <TouchableOpacity onPress={whenPress} style={buttonTextStyle}>
      <Text style={textStyle}>
      {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonTextStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },

  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  }

};

//export
export { Button };
