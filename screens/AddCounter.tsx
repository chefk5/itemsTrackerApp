import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddCounter: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>AddCounter</Text>
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
