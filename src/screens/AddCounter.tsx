import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useGlobalStyles from '../hooks/GlobalStyles';
const AddCounter = () => {
  const globalStyles = useGlobalStyles();

  return (
    <View>
      <Text style={globalStyles.container}>AddCounter</Text>
    </View>
  );
};

export { AddCounter };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
