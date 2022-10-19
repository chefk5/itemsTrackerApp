import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

export enum MainRoutes {
  CountersList = 'CountersList',
  ShoppingList = 'ShoppingList',
  AddCounter = 'AddCounter',
}

export type MainStackParamList = {
  [MainRoutes.CountersList]: undefined;
  [MainRoutes.ShoppingList]: undefined;
  [MainRoutes.AddCounter]: undefined;
};

export type MainNavigationProp<
  RouteName extends keyof MainStackParamList = MainRoutes,
> = StackNavigationProp<MainStackParamList, RouteName>;

export const MainStack = createStackNavigator<MainStackParamList>();
