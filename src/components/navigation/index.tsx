import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import LoginScreen from '../../screen/auth/LoginScreen';
import JobDetailScreen from '../../screen/home/JobDetailScreen';
import JobsListScreen from '../../screen/home/JobsListScreen';
import DrawerContent from './DrawerContent';
import AppContext from '../../context/AppContext';

const Drawer = createDrawerNavigator();

const AppContainer = () => {
  const { token } = useContext(AppContext);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Vacantes'
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name='Vacantes' component={JobsListScreen} />

        {token !== null ? (
          <Drawer.Screen name='Detalles' component={JobDetailScreen} />
        ) : (
          <Drawer.Screen
            name='Login'
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
