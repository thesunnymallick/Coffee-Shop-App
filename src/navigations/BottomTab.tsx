import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/home/Home';
import { COLORS } from '../theme/theme';
import { BlurView } from '@react-native-community/blur';
import CustomIcon from '../components/CustomIcon';
import Cart from '../screen/cart/Cart';
import Favourite from '../screen/favourite/Favourite';
import History from '../screen/history/History';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.bottomTab,
        tabBarBackground: () => {
          return (
            <BlurView overlayColor="" blurAmount={15} style={styles.blurView} />
          );
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="home"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryWhiteHex}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="cart"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryWhiteHex}
            />
          ),
        }}
        name="Cart"
        component={Cart}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="like"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryWhiteHex}
            />
          ),
        }}
        name="Favourite"
        component={Favourite}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="bell"
              size={25}
              color={focused ? COLORS.primaryOrangeHex : COLORS.primaryWhiteHex}
            />
          ),
        }}
        name="History"
        component={History}
      />
      
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTab: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryDarkGreyHex,
    borderTopWidth: 0,
    borderTopColor: 'transparent',
    elevation: 0,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default BottomTab;
