import { View } from 'react-native';
import React, { FC } from 'react';
import styled from 'styled-components/native';

import { ETabNavigation } from 'src/navigation/enums/tabNavigation';
import { IconNavigationMap } from '../constants/tabNavigationMap';

interface ITabButtonParams {
  name: ETabNavigation;
  isActive: boolean;
  onPress?: any;
}

export const TabButton: FC<ITabButtonParams> = ({
  name,
  isActive,
  onPress,
}) => {
  return (
    <View>
      <Button accessibilityRole={'button'} onPress={onPress}>
        {name === ETabNavigation.PROFILE ? (
          <ImageButton
            source={IconNavigationMap[name]}
            style={{
              width: 24,
              height: 24,
              objectFit: 'cover',
              borderRadius: 50,
            }}
          />
        ) : (
          <ImageButton source={IconNavigationMap[name]} />
        )}
        {isActive && <ActiveTab />}
      </Button>
    </View>
  );
};

const ActiveTab = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-19.5px, -19.5px);
  width: 38px;
  height: 38px;
  background-color: rgba(255, 255, 255, 0.12);
  border-radius: 100px;
  z-index: 1;
`;

const ImageButton = styled.Image`
  width: 24px;
  height: 24px;
  object-fit: contain;
  z-index: 2;
`;

const Button = styled.TouchableOpacity`
  position: relative;
`;
