import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Appearance } from 'react-native';
// import { light } from '../../styles/Themes';
import {
  AddCounter,
  CountersList,
  ShoppingList,
  UpdateItem,
} from '../screens/Index';
import { MainRoutes, MainStack } from './Types';

const MainNavigation = () => {
  const scheme = Appearance.getColorScheme();

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name={MainRoutes.CountersList}
          component={CountersList}
        />
        <MainStack.Screen
          name={MainRoutes.ShoppingList}
          component={ShoppingList}
        />
        <MainStack.Screen name={MainRoutes.AddCounter} component={AddCounter} />
        <MainStack.Screen name={MainRoutes.UpdateItem} component={UpdateItem} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
