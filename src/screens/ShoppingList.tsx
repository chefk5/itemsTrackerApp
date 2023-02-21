import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  name: string;
};
const ShoppingList = () => {
  return (
    <View style={styles.container}>
      <Text>ShoppingList</Text>
    </View>
  );
};

export { ShoppingList };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
