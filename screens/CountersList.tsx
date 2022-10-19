import React from 'react';
import { StyleSheet, View } from 'react-native';
import ItemCounter from '../compenents/countersList/ItemCounter';
//mport { MainNavigationProp, MainRoutes } from '../navigation/Types';

//type Props = { navigation: MainNavigationProp<MainRoutes.CountersList> };

const CountersList = () => {
  return (
    <View style={styles.container}>
      <ItemCounter name={'item 1'} />
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
