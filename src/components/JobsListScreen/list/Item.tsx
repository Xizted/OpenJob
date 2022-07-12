import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Card from '../../common/Card';
import * as SecureStore from 'expo-secure-store';
import AppContext from '../../../context/AppContext';

interface ItemProps {
  title: string;
  subtitle: string;
  time: string;
}

const Item = ({ title, subtitle, time }: ItemProps) => {
  const { navigate } = useNavigation();
  const { token } = useContext(AppContext);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        const screen = token === null ? 'Login' : 'Detalles';
        navigate(screen as never);
      }}
    >
      <Card>
        <Text style={styles.continent}>Latam</Text>
        <View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            }}
            resizeMode={'cover'}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            hic veniam quod nisi esse rerum commodi,
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.meta}>Remoto - Senior</Text>
          <View style={styles.iconsContainer}>
            <TouchableWithoutFeedback>
              <MaterialIcons
                name='favorite-outline'
                size={24}
                style={styles.icon}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <MaterialIcons name='more-vert' size={24} />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Card>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  continent: {
    fontSize: 18,
    color: '#636e72',
    marginVertical: 5,
  },
  image: {
    height: 130,
    borderRadius: 5,
    marginVertical: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    marginVertical: 5,
  },
  meta: {
    fontSize: 14,
    marginVertical: 15,
    color: '#636e72',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
});

export default Item;
