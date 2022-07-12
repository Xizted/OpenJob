import { StyleSheet, Text, View } from 'react-native';

interface CardProps {
  children: JSX.Element | JSX.Element[];
}

const Card = ({ children }: CardProps) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    height: 'auto',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 16,
    marginVertical: 10,
  },
});

export default Card;
