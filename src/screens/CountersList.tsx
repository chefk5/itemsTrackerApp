import { useNavigation } from '@react-navigation/native'; // <-- import useNavigation hook
import { StackNavigationProp } from '@react-navigation/stack';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import ItemCounter from '../compenents/countersList/ItemCounter';
import {
  decrement,
  increment,
  deleteItem,
} from '../features/counter/ItemsSlice';
import { MainRoutes, MainStackParamList } from '../navigation/Types';

const CountersList = () => {
  const counter = useSelector((state: RootState) => state.items);
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const incrementValue = (id: string) => {
    dispatch(
      increment({
        id,
      }),
    );
  };

  const decrementValue = (id: string) => {
    dispatch(decrement({ id }));
  };

  const deleteItemFromCounter = (id: string) => {
    dispatch(deleteItem({ id }));
  };

  const navigateToScreen = (screen: MainRoutes) => {
    navigation.navigate(screen);
  };

  const navigateToUpdateScreenWithParams = (id: string) => {
    navigation.navigate(MainRoutes.UpdateItem, { id });
  };

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigateToScreen(MainRoutes.AddCounter)}
        >
          <Text>Add</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlashList
        data={counter.items}
        renderItem={({ item }) => (
          <ItemCounter
            name={item.name}
            counter={item.count}
            id={item.id}
            increment={incrementValue}
            decrement={decrementValue}
            deleteItem={deleteItemFromCounter}
            moveToEdit={navigateToUpdateScreenWithParams}
          />
        )}
        estimatedItemSize={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export { CountersList };
