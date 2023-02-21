import { StyleSheet } from 'react-native';
import { Theme, useTheme } from '@react-navigation/native';
import React from 'react';

type colors = {
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
};

const getGlobalStyles = (props: colors) =>
  StyleSheet.create({
    container: {
      color: props.colors.notification,
    },
  });

function useGlobalStyles() {
  const { colors } = useTheme();

  // We only want to recompute the stylesheet on changes in color.
  const styles = React.useMemo(
    () =>
      getGlobalStyles({
        colors,
      }),
    [colors],
  );

  return styles;
}

export default useGlobalStyles;
