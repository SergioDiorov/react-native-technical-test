import { FC } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ETabNavigation } from '../enums/tabNavigation';

const MessageScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.messagesContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 74,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate(ETabNavigation.MAIN as never)}
        >
          <Image source={require('src/assets/messages-page/icon-back.png')} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Félicitations!</Text>
        <View />
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Image
          style={styles.mainImage}
          source={require('src/assets/messages-page/main-background.png')}
        />
        <Text style={styles.messagesTitle}>C'est un match !</Text>
        <Text style={styles.messagesSub}>
          Commencez une conversation l'un avec l'autre maintenant.
        </Text>
        <TouchableOpacity style={styles.buttonMessage}>
          <Text style={styles.buttonText}>Message texte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAction}>
          <Text style={styles.buttonText}>Continuez à faire glisser</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messagesContainer: {
    backgroundColor: '#1f1f1f',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flex: 1,
  },
  headerText: {
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 20,
    color: '#fff',
  },
  mainImage: {
    width: 336,
    height: 295,
    objectFit: 'contain',
    marginBottom: 24,
  },
  messagesTitle: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 12,
    color: '#fff',
  },
  messagesSub: {
    fontWeight: '500',
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    maxWidth: 292,
    marginBottom: 34,
  },
  buttonMessage: {
    borderRadius: 20,
    width: 280,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
    elevation: 2,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 14,
    color: '#fff',
  },
  buttonAction: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    width: 280,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MessageScreen;
