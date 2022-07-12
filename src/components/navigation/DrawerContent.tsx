import { useContext, useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { Avatar, Drawer } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import AppContext from '../../context/AppContext';

const DrawerContent = ({}: DrawerContentComponentProps) => {
  const { navigate } = useNavigation();
  const { setToken, token } = useContext(AppContext);
  return (
    <View style={{ flex: 1 }}>
      <Drawer.Section>
        {/* @ts-ignore */}
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          }}
          style={styles.imageBackgroundContainer}
        >
          <Avatar.Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
            }}
            size={50}
          />
          <Text style={styles.name}>
            {token === null ? 'Invitado' : 'Osmar Ortiz'}
          </Text>
        </ImageBackground>
      </Drawer.Section>
      <DrawerContentScrollView>
        <Drawer.Section>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name='work' color={color} size={size} />
            )}
            label='Trabajos para ti'
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name='contact-page' color={color} size={size} />
            )}
            label='Tus postulaciones'
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name='email' color={color} size={size} />
            )}
            label='Invitaciones'
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name='person' color={color} size={size} />
            )}
            label='Editar tu perfil'
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name='business' color={color} size={size} />
            )}
            label='Empresa'
            onPress={() => {}}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialIcons name='help' color={color} size={size} />
          )}
          label='Ayuda'
          onPress={() => {}}
        />
        {token === null ? (
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name='login' color={color} size={size} />
            )}
            label='Iniciar Sesión'
            onPress={() => {
              navigate('Login' as never);
            }}
          />
        ) : (
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name='exit-to-app' color={color} size={size} />
            )}
            label='Cerrar Sesión'
            onPress={() => {
              SecureStore.deleteItemAsync('Token').then(() => setToken(null));
            }}
          />
        )}
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  name: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginTop: 5 },
  imageBackgroundContainer: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DrawerContent;
