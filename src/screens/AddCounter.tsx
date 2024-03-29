import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/counter/ItemsSlice';
// import useGlobalStyles from '../hooks/GlobalStyles';

const AddCounter = () => {
  // const globalStyles = useGlobalStyles();
  const [itemName, setItemName] = useState<string>('');
  const [count, setCount] = useState<string>('');

  const dispatch = useDispatch();

  const submitItems = () => {
    if (itemName != '' && count != '') {
      dispatch(addItem({ name: itemName, count: Number(count) }));
      setItemName('');
      setCount('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Item name"
        value={itemName}
        onChangeText={(text) => setItemName(text)}
      />
      <TextInput
        placeholder="Initial count"
        keyboardType="numeric"
        value={count}
        onChangeText={(text) => setCount(text)}
      />
      <Button title="Add" onPress={submitItems} />
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
