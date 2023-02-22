import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

export enum MainRoutes {
  CountersList = 'CountersList',
  ShoppingList = 'ShoppingList',
  AddCounter = 'AddCounter',
  UpdateItem = 'UpdateItem',
}

export type MainStackParamList = {
  [MainRoutes.CountersList]: { id: string } | undefined;
  [MainRoutes.ShoppingList]: undefined;
  [MainRoutes.AddCounter]: undefined;
  [MainRoutes.UpdateItem]: { id: string } | undefined;
};

export type MainNavigationProp<
  RouteName extends keyof MainStackParamList = MainRoutes,
> = StackNavigationProp<MainStackParamList, RouteName>;

export const MainStack = createStackNavigator<MainStackParamList>();
