import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from 'src/navigation/screens/MainScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name='Home' component={MainScreen} />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
