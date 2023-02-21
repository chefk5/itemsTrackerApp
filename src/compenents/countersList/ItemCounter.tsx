import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { ActionCreatorWithoutPayload, PayloadAction } from '@reduxjs/toolkit';

interface Props {
  name: string;
  counter: number | undefined;
  id: string;
  increment: (id: string) => void;
  decrement: (id: string) => void;
}

const ItemCounter = ({ id, name, counter, increment, decrement }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={() => decrement(id)}>
          <Text>-</Text>
        </TouchableOpacity>
        <View>
          <Text testID={'counter'}>{counter}</Text>
        </View>
        <TouchableOpacity onPress={() => increment(id)}>
          <Text>add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemCounter;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    backgroundColor: '#f4975f',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  counterContainer: {
    flexDirection: 'row',
  },
});
