import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  name: string;
};
const CountersList: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>CountersList</Text>
    </View>
  );
};

export { CountersList };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
