import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ( {spinnerSize }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={spinnerSize || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
};

export { Spinner };
