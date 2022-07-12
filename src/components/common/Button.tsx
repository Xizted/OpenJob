import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps {
  text: string;
  bgcolor: string;
}

const Button = ({
  bgcolor,
  text,
  style,
  ...props
}: ButtonProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      style={[{ ...styles.ButtonContainer, backgroundColor: bgcolor }, style]}
      {...props}
    >
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ButtonContainer: {
    marginTop: 24,
    elevation: 8,
    borderRadius: 50,
    padding: 16,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default Button;
