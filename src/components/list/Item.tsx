import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ItemProps {
  title: string;
  subtitle: string;
  time: string;
}

const Item = ({ title, subtitle, time }: ItemProps) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row' }}>
            <Text>{title}</Text>
            <Text>{time}</Text>
          </View>
          <Text>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 30,
    fontSize: 50,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  container: {
    flex: 1,
  },
});

export default Item;
