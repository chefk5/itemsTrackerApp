import React from 'react';
import { MainRoutes, MainStack } from './Types';
import { NavigationContainer } from '@react-navigation/native';
import { AddCounter, ShoppingList, CountersList } from '../screens/Index';
import { Appearance, AppearanceProvider } from 'react-native';
import {
  DefaultTheme,
  DarkTheme,
  LightTheme,
  ExtendedTheme,
} from '@react-navigation/native';
import { light, dark } from '../../styles/Themes';

const MainNavigation = () => {
  const scheme = Appearance.getColorScheme();

  return (
    <NavigationContainer theme={light}>
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
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
