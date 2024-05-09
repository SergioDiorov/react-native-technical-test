import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';

import BottomNavigation from 'src/navigation/components/bottomNavigation';
import { ETabNavigation } from 'src/navigation/enums/tabNavigation';
import HomeStackScreen from 'src/navigation/routes/HomeStackScreen';
import MessageScreen from 'src/navigation/screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <RootScreen>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={ETabNavigation.MAIN}
        tabBar={(props) => (
          <View style={styles.bottomNavigation}>
            <BottomNavigation {...props} />
          </View>
        )}
      >
        <Tab.Screen
          name={ETabNavigation.MAIN}
          component={HomeStackScreen}
        ></Tab.Screen>
        <Tab.Screen
          name={ETabNavigation.MESSAGE}
          component={MessageScreen}
        ></Tab.Screen>
        <Tab.Screen
          name={ETabNavigation.PROFILE}
          component={ProfileScreen}
        ></Tab.Screen>
      </Tab.Navigator>
    </RootScreen>
  );
};
const RootScreen = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
`;
const styles = StyleSheet.create({
  mainPage: {
    position: 'relative',
    flex: 1,
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppRoutes;
