import React, { FC } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

interface IRadioListButtonProps {
  value: string;
  isActive: boolean;
  onPress: () => void;
}

const RadioListButton: FC<IRadioListButtonProps> = ({
  value,
  isActive,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        isActive ? styles.buttonContainerActive : null,
      ]}
    >
      <View
        style={[styles.checkMark, isActive ? styles.checkMarkActive : null]}
      />
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#3D3230',
    borderRadius: 16,
    backgroundColor: '#3D3230',
  },
  buttonContainerActive: {
    borderColor: '#ff9433',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  checkMark: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: '#ababab',
    borderRadius: 50,
    backgroundColor: 'transparent',
    marginRight: 16,
  },
  checkMarkActive: {
    borderColor: '#ff9433',
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
});

export default RadioListButton;
