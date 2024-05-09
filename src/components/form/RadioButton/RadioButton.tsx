import React, { FC } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface IRadioButtonProps {
  value: string;
  isActive: boolean;
  onPress: () => void;
}

const RadioButton: FC<IRadioButtonProps> = ({ value, isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.radioButton,
        isActive
          ? {
              backgroundColor: '#ff998c',
            }
          : null,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.radioButtonText,
          isActive
            ? {
                fontWeight: '700',
              }
            : null,
        ]}
      >
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    borderRadius: 8,
    width: 112,
    height: 40,
    backgroundColor: '#222021',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default RadioButton;
