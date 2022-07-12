import { StyleSheet, Text, TextInput, TextInputProps } from 'react-native';

interface InputProps {
  label: string;
}

const Input = ({ style, label, ...props }: TextInputProps & InputProps) => {
  return (
    <>
      <Text style={{ fontSize: 14 }}>{label}</Text>
      <TextInput style={[styles.input, style]} {...props} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#dfe6e9',
    padding: 16,
    borderRadius: 50,
    marginTop: 4,
    marginBottom: 16,
  },
});

export default Input;
