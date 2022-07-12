import { Image, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Controller, set, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as SecureStore from 'expo-secure-store';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

interface LoginValues {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

const LoginScreen = () => {
  const { setToken } = useContext(AppContext);

  const { control, handleSubmit } = useForm<LoginValues>({
    mode: 'all',
    defaultValues: {
      email: 'osmar.1288@gmail.com',
      password: '12345678',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginValues) => {
    SecureStore.setItemAsync('Token', 'token').then(() => setToken('token'));
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1425504724233723910/HQy3tFfX_400x400.png',
          }}
          style={[styles.logo]}
        />
        <View style={styles.form}>
          <Controller
            control={control}
            name='email'
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                label='Correo Electronico'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />

          <Controller
            control={control}
            name='password'
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                label='Contraseña'
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={true}
              />
            )}
          />
          <Button
            text='Iniciar Sesión'
            bgcolor='#74b9ff'
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 250,
    width: 250,
    borderRadius: Number.MAX_SAFE_INTEGER,
  },
  form: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 30,
  },
});

export default LoginScreen;
