import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
  name: string;
}

const ItemCounter = ({ name }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity>
          <Text>
            <Icon name="minus" size={30} color="#4F8EF7" />
          </Text>
        </TouchableOpacity>
        <View>
          <Text>1</Text>
        </View>
        <TouchableOpacity>
          <Text>
            <Icon name="plus" size={30} color="#4F8EF7" />
          </Text>
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
  },
  counterContainer: {
    flexDirection: 'row',
  },
});
