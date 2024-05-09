import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';

interface ISelectInputProps {
  title: string;
  selectedValue: string;
  onSelect: (value: string) => void;
  options: string[];
}

const SelectInput: FC<ISelectInputProps> = ({
  title,
  selectedValue,
  onSelect,
  options,
}) => {
  const [isSelectOpened, setSelectOpen] = useState<boolean>(false);

  return (
    <>
      <TouchableOpacity
        style={styles.selectContainer}
        onPress={() => setSelectOpen((prev) => !prev)}
      >
        <View>
          <Text style={styles.selectTitle}>{title}</Text>
          <Text style={styles.selectOption}>{selectedValue}</Text>
        </View>

        <Image
          style={[
            styles.selectArrow,
            { transform: isSelectOpened ? [{ rotate: '180deg' }] : [] },
          ]}
          source={require('src/assets/filters/arrow.png')}
        />
      </TouchableOpacity>
      <View
        style={[
          styles.selectMenu,
          isSelectOpened ? { display: 'flex' } : { display: 'none' },
        ]}
      >
        {options.map((value) => {
          return (
            <TouchableOpacity
              key={value}
              onPress={() => {
                onSelect(value);
                setSelectOpen(false);
              }}
              style={[
                styles.selectItem,
                value === selectedValue
                  ? { backgroundColor: 'rgba(255, 148, 51, 0.26)' }
                  : null,
              ]}
            >
              <View style={styles.selectBox} />
              <Text style={styles.selectValue}>{value}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  selectContainer: {
    position: 'relative',
    backgroundColor: '#1f1216',
    borderWidth: 1,
    borderColor: '#ff9433',
    borderRadius: 8,
    height: 68,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 14,
    zIndex: 0,
  },
  selectTitle: {
    color: '#ff9433',
    fontWeight: '500',
    fontSize: 13,
    marginBottom: 4,
  },
  selectOption: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  selectArrow: {
    width: 17,
    height: 8,
    objectFit: 'contain',
    marginVertical: 'auto',
  },
  selectMenu: {
    marginTop: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#2b2b2b',
    borderRadius: 8,
    backgroundColor: '#141414',
    paddingVertical: 21,
  },
  selectItem: {
    flexDirection: 'row',
    paddingVertical: 13,
    paddingHorizontal: 16,
  },
  selectBox: {
    width: 19,
    height: 19,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
    marginRight: 14,
  },
  selectValue: {
    fontWeight: '500',
    fontSize: 16,
    color: '#fff',
  },
});

export default SelectInput;
