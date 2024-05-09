import { FC } from 'react';
import { Text, View } from 'react-native';

const ProfileScreen: FC = () => {
  return (
    <View
      style={{
        backgroundColor: '#1f1f1f',
        paddingHorizontal: 16,
        paddingVertical: 12,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontWeight: '700',
          fontSize: 24,
          color: '#fff',
        }}
      >
        Profile screen
      </Text>
    </View>
  );
};

export default ProfileScreen;
