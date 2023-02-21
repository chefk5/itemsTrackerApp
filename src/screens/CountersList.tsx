import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import ItemCounter from '../compenents/countersList/ItemCounter';
import { decrement, increment } from '../features/counter/ItemsSlice';
import { FlashList } from '@shopify/flash-list';
import { MainNavigationProp, MainRoutes } from '../navigation/Types';

// import { MainNavigationProp, MainRoutes } from '../navigation/Types';

//type Props = { navigation: MainNavigationProp<MainRoutes.CountersList> };

const CountersList = () => {
  const counter = useSelector((state: RootState) => state.items);
  const dispatch = useDispatch();

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

  return (
    <View style={styles.container}>
      <FlashList
        data={counter.items}
        renderItem={({ item }) => (
          <ItemCounter
            name={'item 1'}
            counter={item.count}
            id={item.id}
            increment={incrementValue}
            decrement={decrementValue}
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
