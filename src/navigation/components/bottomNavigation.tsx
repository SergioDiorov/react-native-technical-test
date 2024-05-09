import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { TabButton } from 'src/navigation/components/tabButton';
import { ETabNavigation } from 'src/navigation/enums/tabNavigation';

const BottomNavigation: FC<BottomTabBarProps> = ({ state, navigation }) => {
  const onPress = (route, isFocused) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({ name: route.name, merge: true } as any);
    }
  };
  return (
    <View accessibilityRole='button' style={styles.container}>
      {state.routes.map((route, index) => {
        return (
          <TabButton
            key={route.name}
            name={route.name as ETabNavigation}
            isActive={state.index === index}
            onPress={() => onPress(route, state.index === index)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // maxWidth: 398,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: 80,
    height: 80,
    // borderRadius: 46,
    backgroundColor: '#0F1113',
    paddingHorizontal: 56,
  },
});

export default BottomNavigation;
