import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import ItemCounter from './ItemCounter';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

jest.mock('react-native-vector-icons/AntDesign', () => 'Icon');

describe('ItemCounter', () => {
  it('displays the name and counter, and increments/decrements the counter', async () => {
    const { getByTestId, getByText } = render(
      <ItemCounter
        name="Item 1"
        counter={1}
        id="item-1"
        increment={() => jest.fn('item-1')}
        decrement={jest.fn()}
      />,
    );
    expect(getByText('Item 1')).toBeTruthy();
    fireEvent.press(getByText('add'));
    expect(getByTestId('counter').props.children).toEqual(2);
  });
});
