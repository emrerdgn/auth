import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secure }) => {
  const {
    InputStyle,
    LabelStyle,
    ContainerStyle
  } = styles;
  return (
    <View style={ContainerStyle}>

      <Text style={LabelStyle}>{label}</Text>

      <TextInput
      secureTextEntry={secure}
      placeholder={placeholder}
      autoCorrect={false}
      autoCapitalize="none"
      style={InputStyle}
      value={value}
      onChangeText={onChangeText}
      />


    </View>
  );
};

const styles = {
  InputStyle: {
    height: 20,
    width: 100,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },

  LabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },

  ContainerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

};

export { Input };
