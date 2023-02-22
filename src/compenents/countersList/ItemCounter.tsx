import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  name: string | undefined;
  counter: number | undefined;
  id: string;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  deleteItem: (id: string) => void;
  moveToEdit: (id: string) => void;
}

const ItemCounter = ({
  id,
  name,
  counter,
  increment,
  decrement,
  deleteItem,
  moveToEdit,
}: Props) => {
  return (
    <Pressable
      style={styles.container}
      onLongPress={() => deleteItem(id)}
      onPress={() => moveToEdit(id)}
    >
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
    </Pressable>
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
