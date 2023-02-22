/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateItem } from '../features/counter/ItemsSlice';

const UpdateItem = ({ route }) => {
  const [itemName, setItemName] = useState<string>('');

  const dispatch = useDispatch();

  const submitItems = () => {
    if (itemName != '') {
      dispatch(updateItem({ id: route.params.id, name: itemName }));
      setItemName('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Item name"
        value={itemName}
        onChangeText={(text) => setItemName(text)}
      />
      <Button title="Edit" onPress={submitItems} />
    </View>
  );
};

export { UpdateItem };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
